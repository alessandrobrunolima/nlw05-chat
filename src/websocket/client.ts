import { text } from "express";
import { Socket } from "socket.io";
import { io } from "../http";
import { ConnectionsService } from "../services/ConnectionsService";
import { MessagesService } from "../services/MessagesService";
import { UsersService } from "../services/UsersService";

interface IParams {
  text: string;
  email: string;
}

io.on("connect", (socket: Socket) => {
  const connectionsService = new ConnectionsService();
  const usersService = new UsersService();
  const messagesService = new MessagesService();

  socket.on("client_first_access", async (params) => {
    const socket_id = socket.id;

    const { email, text } = params as IParams;

    let user = await usersService.findByEmail(email);
    if (!user) {
      user = await usersService.create(email);
    }

    let connection = await connectionsService.findByUserId(user.id);
    if (!connection) {
      connection = await connectionsService.create({
        socket_id,
        user_id: user.id,
      });
    } else {
      connection.socket_id = socket_id;
      connection.updated_at = null;
      await connectionsService.create(connection);
    }

    await messagesService.create({ text, user_id: user.id });

    const allMessages = await messagesService.listByUser(user.id);

    socket.emit("client_list_all_messages", allMessages);

    const allUsers = await connectionsService.findAllWithoutAdmin();
    io.emit("admin_list_all_users", allUsers);
  });

  socket.on("client_send_to_admin", async (params) => {
    const { text, socket_admin_id } = params;

    const socket_id = socket.id;

    const { user_id } = await connectionsService.findBySocketId(socket_id);

    const message = await messagesService.create({
      text,
      user_id,
    });

    io.to(socket_admin_id).emit("admin_receive_message", {
      message,
      socket_id,
    });
  });
});
