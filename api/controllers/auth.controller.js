import bcryptjs from "bcryptjs"
import User from "../models/user.model.js"
import generateTokenAndSetCookie from "../utils/generateToken.js"

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
			generateTokenAndSetCookie(newUser._id, res)
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
	try {
		const { username, password } = req.body
		const user = await User.findOne({ username })
		const isPasswordCorrect = await bcryptjs.compare(password, user?.password || "")

		if (!user || !isPasswordCorrect) {
			return res.status(400).json({ error: "Invalid username or password!" })
		}

		generateTokenAndSetCookie(user._id, res)
		res.status(200).json({
			_id: user._id,
			fullName: user.fullName,
			username: user.username,
			profileImg: user.profileImg
		})
	} catch (error) {
		console.log("Error in login controller", error.message);
		res.status(500).json({ error: "Internal Server Error!" })
	}
}

export const logout = (req, res) => {
	try {
		res.cookie("jwt", "", { maxAge: 0 })
		res.status(200).json({ message: "User has been logged out!" })
	} catch (error) {
		console.log("Error in loguot controller", error.message);
		res.status(500).json({ error: "Internal Server Error!" })
	}
} 