import bcryptjs from "bcryptjs"
import User from "../models/user.model.js"

export const signup = async (req, res) => {
	try {
		const {
			fullName,
			username,
			password,
			confirmPassword,
			gender
		} = req.body

		if (password !== confirmPassword) { return res.status(400).json({ error: "Passwords do not match!" }) }

		const user = await User.findOne({ username: username })
		if (user) { return res.status(400).json({ error: "Username is already taken!" }) }

		const profileImgURI = gender === "male" ?
			(`https://avatar.iran.liara.run/public/boy?username=${username}`)
			:
			(`https://avatar.iran.liara.run/public/girl?username=${username}`)

		const salt = await bcryptjs.genSalt(10)
		const hashedPassword = await bcryptjs.hash(password, salt)
		const newUser = new User({
			fullName,
			username,
			password: hashedPassword,
			gender,
			profileImg: profileImgURI
		})

		if (newUser) {

			await newUser.save()
			res.status(201).json({
				_id: newUser._id,
				fullName: newUser.fullName,
				username: newUser.username,
				profileImg: newUser.profileImg
			})
		} else {
			res.status(400).json({ error: "Invalid user data" })
		}
	} catch (error) {
		res.status(500).json({ error: "Internal Server Error" })
		console.log("Error on signup controller", error.message);
	}
}

export const login = async (req, res) => {
	res.send("Login!")
}

export const logout = async (req, res) => {
	res.send("Logout!")
} 