import GenderCheckbox from "./GenderCheckbox"

const SignUp = () => {
	return (
		<div className="flex flex-col items-center justify-center min-w-96 mx-auto">
			<div className="w-full p-6 rounded-lg shadow-md bg-gray-800 bg-clip-padding backdrop-filter backdrop-blur-2xl bg-opacity-30">
				<h1 className="text-3xl font-semibold text-center text-gray-300">
					Sign Up<span className="text-yellow-500"> ChitChat</span>
				</h1>
				<form>
					<label className="label p-2">
						<span className="text-base label-text">Full Name</span>
					</label>
					<input type="text" placeholder="John Doe" className="w-full input input-bordered h-10" />
					<label className="label p-2">
						<span className="text-base label-text">Username</span>
					</label>
					<input type="text" placeholder="johndoe" className="w-full input input-bordered h-10" />
					<label className="label p-2">
						<span className="text-base label-text">Password</span>
					</label>
					<input type="password" placeholder="Enter password" className="w-full input input-bordered h-10" />
					<label className="label p-2">
						<span className="text-base label-text">Confirm Password</span>
					</label>
					<input type="password" placeholder="Confirm password" className="w-full input input-bordered h-10" />
					<GenderCheckbox />
					<a href="#" className="text-sm hover:underline hover:text-yellow-500 mt-2 ps-2 inline-block">Already have an account?</a>
					<div>
						<button className="btn btn-block btn-sm mt-2 hover:bg-yellow-500 hover:text-[#1d242a]">Sign Up</button>
					</div>
				</form>
			</div>
		</div>
	)
}

export default SignUp