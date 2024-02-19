import { Router } from "express";

const router = Router();

router.get("/contact", (req, res) => {
  res.send("Hello world!");
});

export default router;
