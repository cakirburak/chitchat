import express from "express"
import dotenv from "dotenv"
import authRouter from "./routes/auth.route.js"
import runMongoDBConnection from "./db/connectToMongoDB.js"


const PORT = process.env.PORT || 3000
const app = express()

dotenv.config()

app.use(express.json())
app.use("/api/auth", authRouter)

app.listen(PORT, () => {
	runMongoDBConnection()
	console.log(`Server listening on port ${PORT}`);
})