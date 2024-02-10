import express from "express"
import dotenv from "dotenv"
import cookieParser from "cookie-parser"
import authRouter from "./routes/auth.route.js"
import messageRouter from "./routes/message.route.js"
import runMongoDBConnection from "./db/connectToMongoDB.js"

dotenv.config()
const app = express()
const PORT = process.env.PORT || 3000

app.use(cookieParser())
app.use(express.json())

app.use("/api/auth", authRouter)
app.use("/api/messages", messageRouter)

app.listen(PORT, () => {
	runMongoDBConnection()
	console.log(`Server listening on port ${PORT}`);
})