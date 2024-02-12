const Message = () => {
	return (
		<div className="chat chat-end">
			<div className="chat-image avatar">
				<div className="w-10 rounded-full">
					<img src="https://avatar.iran.liara.run/public/boy?username=usertest1" alt="user avatar" />
				</div>
			</div>
			<div className="chat-bubble text-white bg-yellow-500">How you doin!</div>
			<div className="chat-footer opacity-50 text-xs flex gap-1 items-center">15:32</div>
		</div>
	)
}

export default Message