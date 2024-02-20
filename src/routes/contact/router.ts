import { Router, Request, Response, NextFunction } from "express";

const router = Router();
const express = require('express');
const app = express();
const port = 8080;

app.use(express.urlencoded({ extended: true }));

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});

router.get("/contact", (req: Request, res: Response) => {
  res.send(`
    <h1>Formulário de Contato</h1>
    <body>
    <form action="/contact" method="post">
      <label for="nome">Nome:</label><br>
      <input type="text" id="name" name="nome" <required><br><br>
      
      <label for="email">Email:</label><br>
      <input type="email" id="email" name="email" <required><br><br>
      
      <label for="contato">Contato:</label><br>
      <input type="contato" id="contato" name="contato" <required><br><br>
      
      <input type="submit" value="Enviar">
    </form>
    <body>
  `);
});

router.post("/contact", (req: Request, res: Response) => {
  const { nome, email, contato } = req.body;
  console.log("Nome:", nome);
  console.log("Email:", email);
  console.log("contato:", contato);
  res.send("Dados recebidos!")
})

export default router;
