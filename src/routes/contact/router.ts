import { Router, Request, Response } from "express";
import { check, validationResult } from "express-validator";

const router = Router();
const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true }));

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
  const { name, email, contact } = req.body;
  console.log("Name:", name);
  console.log("Email:", email);
  console.log("contact:", contact);
  res.send("Obrigado por entrar em contato!")
})

export default router;
