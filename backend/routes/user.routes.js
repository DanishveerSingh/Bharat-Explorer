import {
  registerUser,
  loginUser,
  changeCurrentPassword,
  refreshAccessToken,
  logoutUser,
} from "../controllers/user.controllers.js";
import { Router } from "express";
import { verifyJWT } from "../middlewares/user.middlewares.js";

const router = Router();

router.route("/register").post(registerUser);
router.route("/login").post(loginUser);
router.route("/change-password").post(changeCurrentPassword);
router.route("/refresh-token").post(refreshAccessToken);
router.route("/logout").post(verifyJWT, logoutUser);

export default router;
