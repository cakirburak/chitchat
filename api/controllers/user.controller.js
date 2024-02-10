import User from "../models/user.model.js";

export const getUsersForSidebar = async (req, res) => {
	try {
		const currentUserId = req.user.userId

		const allUsers = await User.find({ _id: { $ne: currentUserId } }).select("-password")

		res.status(200).json(allUsers)
	} catch (error) {
		console.log("Error in getUserForSidebar: ", error.message);
		res.status(500).json({ error: "Internal Server Error" })
	}
}