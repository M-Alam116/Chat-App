import express from "express";
import { userRegister, authUser } from "../controllers/userControllers.js";

const router = express.Router();

router.post("/", userRegister);
router.post("/login", authUser);

export default router;
