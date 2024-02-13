import MessageContainer from "../../components/messages/MessageContainer"
import SidebarContainer from "../../components/sidebar/SidebarContainer"
import { ConversationContextProvider } from "../../context/ConversationContext"

const Home = () => {
	return (
		<ConversationContextProvider>
			<div className="flex sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-gray-800 bg-clip-padding backdrop-filter backdrop-blur-2xl bg-opacity-30">
				<SidebarContainer />
				<MessageContainer />
			</div>
		</ConversationContextProvider>
	)
}

export default Home