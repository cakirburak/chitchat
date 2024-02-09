import express from "express"
import dotenv from "dotenv"
import authRouter from "./routes/auth.route.js"
import runMongoDBConnection from "./db/connectToMongoDB.js"

dotenv.config()

const PORT = process.env.PORT || 3000
const app = express()

app.use("/api/auth", authRouter)

app.get("/", (req, res) => {
	res.json("Hello World")
})

app.listen(PORT, () => {
	runMongoDBConnection()
	console.log(`Server listening on port ${PORT}`);
})