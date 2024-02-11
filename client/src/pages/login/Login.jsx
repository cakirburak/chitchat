const Login = () => {
	return (
		<div className="flex flex-col items-center justify-center min-w-96 mx-auto">
			<div className="w-full p-6 rounded-lg shadow-md bg-gray-800 bg-clip-padding backdrop-filter backdrop-blur-2xl bg-opacity-30">
				<h1 className="text-3xl font-semibold text-center text-gray 300">
					Login
					<span className="text-yellow-500"> ChitChat</span>
				</h1>
				<form>
					<div>
						<label className="label p-2">
							<span className="text-base label-text">Username</span>
						</label>
						<input type="text" placeholder="Enter username" className="w-full input input-bordered h-10" />
					</div>
					<div className="mb-4">
						<label className="label p-2">
							<span className="text-base label-text">Password</span>
						</label>
						<input type="password" placeholder="Enter password" className="w-full input input-bordered h-10" />
					</div>
					<a href="#" className="text-sm hover:underline hover:text-yellow-500 mt-2 ps-2 inline-block">{"Don't"} have an account?</a>
					<div>
						<button className="btn btn-block btn-sm mt-2 hover:bg-yellow-500 hover:text-[#1d242a]">Login</button>
					</div>
				</form>
			</div>
		</div>
	)
}

export default Login