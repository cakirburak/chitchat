import express from "express"
import dotenv from "dotenv"
import cookieParser from "cookie-parser"
import authRouter from "./routes/auth.route.js"
import messageRouter from "./routes/message.route.js"
import userRouter from "./routes/user.route.js"
import { app, server } from "./socket/socket.js"

import runMongoDBConnection from "./db/connectToMongoDB.js"

dotenv.config()
const PORT = process.env.PORT || 3000

app.use(cookieParser())
app.use(express.json())

app.use("/api/auth", authRouter)
app.use("/api/messages", messageRouter)
app.use("/api/users", userRouter)

server.listen(PORT, () => {
	runMongoDBConnection()
	console.log(`Server listening on port ${PORT}`);
})