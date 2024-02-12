import { useConversationContext } from "../../context/ConversationContext";

const Conversation = ({ conversation, lastIndex, emoji }) => {
	const { selectedConversation, setSelectedConversation } = useConversationContext()

	const isSelected = selectedConversation?._id === conversation._id
	return (
		<>
			<div
				className={`${isSelected ? "bg-yellow-500 " : ""}flex gap-2 items-center hover:bg-yellow-500 rounded p-2 py-1 cursor-pointer`}
				onClick={() => setSelectedConversation(conversation)}
			>
				<div className="avatar online">
					<div className="w-12 rounded-full">
						<img src={conversation.profileImg} alt="user avatar" />
					</div>
				</div>
				<div className="flex flex-col flex-1">
					<div className="flex gap-3 justify-between">
						<p className="font-bold text-gray-200">{conversation.fullName}</p>
						<span className="text-xl">{emoji}</span>
					</div>
				</div>
			</div>

			{!lastIndex ? <div className="divider my-0 py-0 h-1"></div> : null}
		</>
	)
}

export default Conversation