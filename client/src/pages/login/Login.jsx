import { Link } from "react-router-dom"
import useLogin from "../../hooks/useLogin"
import { useState } from "react"

const Login = () => {

	const [formData, setFormData] = useState({})
	const { loading, login } = useLogin()

	const handleChange = (e) => {
		setFormData({
			...formData,
			[e.target.id]: e.target.value,
		})
	}

	const handleSubmit = async (e) => {
		e.preventDefault()
		await login(formData)
	}

	return (
		<div className="flex flex-col items-center justify-center min-w-96 mx-auto">
			<div className="w-full p-6 rounded-lg shadow-md bg-gray-800 bg-clip-padding backdrop-filter backdrop-blur-2xl bg-opacity-30">
				<h1 className="text-3xl font-semibold text-center text-gray 300">
					Login
					<span className="text-yellow-500"> ChitChat</span>
				</h1>
				<form onSubmit={handleSubmit}>
					<div>
						<label className="label p-2">
							<span className="text-base label-text">Username</span>
						</label>
						<input
							onChange={handleChange}
							id="username"
							type="text"
							placeholder="Enter username"
							className="w-full input input-bordered h-10"
						/>
					</div>
					<div className="mb-4">
						<label className="label p-2">
							<span className="text-base label-text">Password</span>
						</label>
						<input
							onChange={handleChange}
							id="password"
							type="password"
							placeholder="Enter password"
							className="w-full input input-bordered h-10"
						/>
					</div>
					<Link to="/signup" className="text-sm hover:underline hover:text-yellow-500 mt-2 ps-2 inline-block">
						{"Don't"} have an account?
					</Link>
					<div>
						<button
							className="btn btn-block btn-sm mt-2 hover:bg-yellow-500 hover:text-[#1d242a]"
							disabled={loading}
						>{loading ? <span className="loading loading-spinner"></span> : "Login"}
						</button>
					</div>
				</form>
			</div>
		</div>
	)
}

export default Login