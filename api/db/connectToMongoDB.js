import mongoose from "mongoose"

const runMongoDBConnection = async () => {
	try {
		await mongoose.connect(process.env.MONGO_DB_URI)
			.then(() => {
				console.log("Connected to MongoDB")
			})
	} catch (error) {
		console.error(error)
	}
}

export default runMongoDBConnection