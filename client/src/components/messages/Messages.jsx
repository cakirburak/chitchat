import useGetMessages from "../../hooks/useGetMessages"
import MessageSkeleton from "../skeletons/MessageSkeleton"
import Message from "./Message"

const Messages = () => {
	const { loading, messages } = useGetMessages()

	return (
		<div className="px-4 flex-1 overflow-auto">
			{loading && [...Array(3)].map((_, index) => (<MessageSkeleton key={index} />))}
			{!loading && messages.length === 0 && (
				<p className="text-center">Send a message to start the conversation</p>
			)}
			{!loading && messages.length > 0 && messages.map((message, index) => (
				<Message key={index} message={message} />
			))}
		</div>
	)
}

export default Messages