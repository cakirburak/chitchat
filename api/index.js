import express from "express"
import dotenv from "dotenv"
import cookieParser from "cookie-parser"
import authRouter from "./routes/auth.route.js"
import messageRouter from "./routes/message.route.js"
import userRouter from "./routes/user.route.js"
import { app, server } from "./socket/socket.js"
import path from "path"

import runMongoDBConnection from "./db/connectToMongoDB.js"

dotenv.config()
const PORT = process.env.PORT || 3000
const __dirname = path.resolve()

app.use(cookieParser())
app.use(express.json())

app.use("/api/auth", authRouter)
app.use("/api/messages", messageRouter)
app.use("/api/users", userRouter)

app.use(express.static(path.join(__dirname, "/client/dist")))
app.get("*", (req, res) => res.sendFile(path.join(__dirname, "client", "dist", "index.html")))

server.listen(PORT, () => {
	runMongoDBConnection()
	console.log(`Server listening on port ${PORT}`);
})