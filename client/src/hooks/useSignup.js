import { useState } from "react"
import toast from "react-hot-toast"
import { useAuthContext } from "../context/AuthContext"

const useSignup = () => {
	const [loading, setLoading] = useState(false)
	const { setAuthUser } = useAuthContext()

	const signup = async ({ fullName, username, password, confirmPassword, gender }) => {
		const isFormValid = handleInputErrors({ fullName, username, password, confirmPassword, gender })
		if (isFormValid) {
			setLoading(true)
			try {
				const res = await fetch("/api/auth/signup", {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify({ fullName, username, password, confirmPassword, gender })
				})

				const data = await res.json()
				if (data.error) {
					throw new Error(data.error)
				}
				localStorage.setItem("authUser", JSON.stringify(data))
				setAuthUser(data)
			} catch (error) {
				toast.error(error.message)
			} finally {
				setLoading(false)
			}
		}
	}

	return { loading, signup }
}

export default useSignup

function handleInputErrors({ fullName, username, password, confirmPassword, gender }) {
	if (gender === "") {
		toast.error("Please select a gender!")
		return false
	}
	if (password !== confirmPassword) {
		toast.error("Passwords does not match!")
		return false
	}
	if (password.lenght < 6) {
		toast.error("Password must be at least 6 characters!")
		return false
	}
	if (fullName.length < 2) {
		toast.error("Name field must be at least 2 characters!")
		return false
	}
	if (fullName.lenght > 40) {
		toast.error("Name field must be less than 40 characters!")
		return false
	}

	return true
}