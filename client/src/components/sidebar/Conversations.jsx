import useGetConversations from "../../hooks/useGetConversations"
import { getRandomEmoji } from "../../utils/emojis";
import Conversation from "./Conversation"

const Conversations = () => {
	const { loading, conversations } = useGetConversations()

	console.log(conversations);
	return (
		<div className="py-2 flex flex-col overflow-auto">
			{loading ? <span className="loading loading-spinner"></span> : null}
			{conversations.map((conversation, index) => (
				<Conversation
					key={conversation._id}
					conversation={conversation}
					emoji={getRandomEmoji()}
					lastIndex={index === conversations.length - 1}
				/>
			))}
		</div>
	)
}

export default Conversations 