import { Router, Request, Response } from "express";

const router = Router();

router.post("/contact", (req: Request, res: Response) => {
  const { name, email, contact } = req.body;
  console.log("Name:", name);
  console.log("Email:", email);
  console.log("contact:", contact);
  res.send("Obrigado por entrar em contato!")
})

export default router;