import { useState } from "react"
import { BsSend } from "react-icons/bs"
import useSendMessage from "../../hooks/useSendMessage"

const MessageInput = () => {
	const [message, setMessage] = useState("")
	const { loading, sendMessage } = useSendMessage()

	const handleSubmit = async (e) => {
		e.preventDefault()
		if (message === "") return
		await sendMessage(message)
		setMessage("")
	}
	return (
		<form onSubmit={handleSubmit} className="px-4 my-3">
			<div className="w-full relative">
				<input
					onChange={(e) => setMessage(e.target.value)}
					value={message}
					placeholder="Send a message"
					type="text"
					className="border text-sm rounded-lg block w-full p-2.5 bg-gray-600 text-white"
				/>
				<button className="absolute inset-y-0 end-0 flex items-center pe-3" type="submit">
					{loading ? <span className="loading loading-spinner"></span> : <BsSend />}
				</button>
			</div>
		</form>
	)
}

export default MessageInput