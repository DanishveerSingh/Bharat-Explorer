import express from "express";
import { saveQuizScore, getQuizScore } from "../controllers/quiz.controllers.js";
import { verifyJWT } from "../middlewares/user.middlewares.js";

const router = express.Router();

router.post("/score", verifyJWT, saveQuizScore);
router.get("/score/:username", getQuizScore);

export default router;