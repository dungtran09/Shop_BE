import express, { Router } from "express";
import AccessService from "../../services/accsess.service.js";

const router = express.Router();

router.post("/signup", async (req, res) => {
  try {
    console.log("Signup API hit");
    const result = await AccessService.signUp(req.body);
    res.status(201).json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post("/signin", async (req, res) => {
  try {
    const result = await AccessService.singIn(req.body);
    res.status(200).json(result);
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
});

export default router;
