import "./newSendMessage.css";

export default function NewSendMessage() {
	return (
		<div class="sendNewMessageWrapper">
			<div>
				<img
					className="messageLogoImg"
					alt="123"
					src="/assets/Screenshot.jpg"
				/>
			</div>
			<div className="newmessageTile">Your Messages</div>
			<div className="messageSpan">
				Send private photos and messages to a friend or group.
			</div>
			<div className="messageButtonMargin">
				<button className="messageButton">Send Message</button>
			</div>
		</div>
	);
}
