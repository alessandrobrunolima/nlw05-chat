<h3 align="center">
    <img width="300px" src="https://i.imgur.com/JkVMEgs.png">
    <br><br>
    <p align="center">
      <a href="#-sobre">Sobre</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
      <a href="#-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
      <a href="#-comandos-para-começar">Comandos para começar</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
      <a href="#-license">Licença</a>
  </p>
</h3>

---

## 🔖 Sobre

O <strong>Projeto</strong> é uma API Restful para Chat.

Aplicação web construída na trilha <strong>NodeJS</strong> da <strong>Next Level Week 05</strong> distribuída pela [Rocketseat](https://rocketseat.com.br/).

---

## 🚀 Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:

- [Node.js](https://nodejs.org/en/)
- [YARN](https://yarnpkg.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [Express](https://expressjs.com/pt-br/)
- [TypeORM](https://typeorm.io/)

---

## ⤵ Comandos para começar

Essas instruções vão te levar a uma cópia do projeto rodando em sua máquina local para propósitos de testes e desenvolvimento.

Obs: Banco de dados é o Sqlite3, caso queira alterar, configure o arquivo ormconfig.json para seu banco de dados específico (Campo "database" é o nome do banco de dados no SGBD, neste projeto é local).

```bash
- git clone https://github.com/alessandrobrunolima/nlw05-chat-backend
- cd nlw05-chat-backend
```

Instalando dependências

```bash
- yarn install
```

Criando tabela das migrations do Sqlite3 por meio do cli do TypeOrm

```bash
- yarn typeorm migration:run
```

Inicializando uma instância local (Script configurado no package.json)

```bash
- yarn dev
```

---

## 🎓 Quem ministrou?

As aulas foram ministradas pela **[Daniele Leão](https://github.com/danileao)** na **Next Level Week 05**.

---

## 📝 License

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

<h4 align="center">
    Desenvolvido por <a href="https://www.linkedin.com/in/alessandro-bruno-lima-158a2a54/" target="_blank">Alessandro Bruno Lima</a>
</h4>
