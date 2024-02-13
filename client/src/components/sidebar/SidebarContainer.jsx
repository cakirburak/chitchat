import { useEffect, useState } from "react"
import useGetConversations from "../../hooks/useGetConversations"
import Conversations from "./Conversations"
import LogoutButton from "./LogoutButton"
import SearchInput from "./SearchInput"
import { getRandomEmoji } from "../../utils/emojis"

const SidebarContainer = () => {
	const [searchInput, setSearchInput] = useState("")
	const [emojiMap, setEmojiMap] = useState([]);
	const [filteredConversations, setFilteredConversations] = useState([]);
	const { loading, conversations } = useGetConversations()

	useEffect(() => {
		const filtered = conversations.filter(conversation =>
			conversation.fullName.toLowerCase().includes(searchInput.toLowerCase())
		);
		setFilteredConversations(filtered);
	}, [searchInput, conversations]);

	// map emoji to its conversation
	useEffect(() => {
		const newEmojiMap = {};
		conversations.forEach((conversation) => {
			if (emojiMap[conversation._id]) {
				newEmojiMap[conversation._id] = emojiMap[conversation._id];
			} else {
				// random emoji for new conversations
				newEmojiMap[conversation._id] = getRandomEmoji();
			}
		});

		const hasEmojiMapChanged = Object.keys(newEmojiMap).some(
			(key) => newEmojiMap[key] !== emojiMap[key]
		);

		if (hasEmojiMapChanged) {
			setEmojiMap(newEmojiMap);
		}
	}, [conversations, emojiMap]);

	return (
		<div className="flex flex-col border-r border-slate-100 p-4">
			<SearchInput searchInput={searchInput} setSearchInput={setSearchInput} />
			<div className="divider px-3"></div>
			<Conversations loading={loading} conversations={filteredConversations} emojiMap={emojiMap} />
			<LogoutButton />
		</div>
	)
}

export default SidebarContainer