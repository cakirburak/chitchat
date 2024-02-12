import { useAuthContext } from "../../context/AuthContext"
import { useConversationContext } from "../../context/ConversationContext"

const Message = ({ message }) => {
	const { authUser } = useAuthContext()
	const { selectedConversation } = useConversationContext()

	const fromMe = message.senderId === authUser._id;
	const formattedTime = message.createdAt.slice(11, 16);
	const chatClassName = fromMe ? "chat-end" : "chat-start";
	const profileImg = fromMe ? authUser.profileImg : selectedConversation?.profileImg;
	const bubbleBgColor = fromMe ? "bg-yellow-500" : "";

	return (
		<div className={`chat ${chatClassName}`}>
			<div className='chat-image avatar'>
				<div className='w-10 rounded-full'>
					<img alt='Tailwind CSS chat bubble component' src={profileImg} />
				</div>
			</div>
			<div className={`chat-bubble text-white ${bubbleBgColor} pb-2`}>{message.message}</div>
			<div className='chat-footer opacity-50 text-xs flex gap-1 items-center'>{formattedTime}</div>
		</div>
	)
}

export default Message