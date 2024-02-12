import { BsSend } from "react-icons/bs"

const MessageInput = () => {
	return (
		<form className="px-4 my-3">
			<div className="w-full relative">
				<input placeholder="Send a message" type="text" className="border text-sm rounded-lg block w-full p-2.5 bg-gray-600 text-white" />
				<button className="absolute inset-y-0 end-0 flex items-center pe-3" type="submit">
					<BsSend />
				</button>
			</div>
		</form>
	)
}

export default MessageInput