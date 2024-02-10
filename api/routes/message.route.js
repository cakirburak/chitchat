import express from "express"
import { sendMessage } from "../controllers/message.controller.js"
import { verifyToken } from "../middleware/verifyToken.js"

const router = express.Router()

router.post("/send/:id", verifyToken, sendMessage)

export default router