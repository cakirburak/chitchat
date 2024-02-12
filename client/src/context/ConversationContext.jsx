import { createContext, useContext, useState } from "react";

export const conversationContext = createContext()

export const useConversationContext = () => {
	return useContext(conversationContext)
}

export const ConversationContextProvider = ({ children }) => {
	const [selectedConversation, setSelectedConversation] = useState(null)
	const [messages, setMessages] = useState([])

	return <conversationContext.Provider value={{ selectedConversation, setSelectedConversation, messages, setMessages }}>{children}</conversationContext.Provider>
}