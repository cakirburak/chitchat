import { useEffect, useState } from "react";
import { getRandomEmoji } from "../../utils/emojis";
import Conversation from "./Conversation"

const Conversations = ({ loading, conversations, emojiMap }) => {

	return (
		<div className="py-2 flex flex-col overflow-auto">
			{loading ? <span className="loading loading-spinner"></span> : null}
			{!loading && conversations.length === 0 && <p className="text-center">No conversation found</p>}
			{conversations.map((conversation, index) => (
				<Conversation
					key={conversation._id}
					conversation={conversation}
					emoji={emojiMap[conversation._id]}
					lastIndex={index === conversations.length - 1}
				/>
			))}
		</div>
	)
}

export default Conversations 