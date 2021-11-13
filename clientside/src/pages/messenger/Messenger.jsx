import "./messenger.css";
// import Topbar from "../../components/topbar/Topbar";
import Conversation from "../../components/conversations/Conversation";
// import Message from "../../components/message/Message";
import NewSendMessage from "../../components/newSendMessage/NewSendMessage";
import UserFetchMessage from "../../components/userFetchMessage/UserFetchMessage";
// import ChatOnline from "../../components/chatOnline/ChatOnline";
import { useContext, useEffect, useRef, useState } from "react";
// import { AuthContext } from "../../context/AuthContext";
import axios from "axios";
import { io } from "socket.io-client";

export default function Messenger() {
	const [conversations, setConversations] = useState([]);
	const [currentChat, setCurrentChat] = useState(null);
	const [messages, setMessages] = useState([]);
	const [newMessage, setNewMessage] = useState("");
	const [arrivalMessage, setArrivalMessage] = useState(null);
	const [onlineUsers, setOnlineUsers] = useState([]);
	const [currentMessageSender, setCurrentMessageSender] = useState(null);
	const socket = useRef();
	// const { user } = useContext(AuthContext);
	const user = 1;
	const scrollRef = useRef();

	useEffect(() => {
		socket.current = io("ws://localhost:8900");
		socket.current.on("getMessage", (data) => {
			setArrivalMessage({
				sender: data.senderId,
				text: data.text,
				createdAt: Date.now(),
			});
		});
	}, []);

	useEffect(() => {
		arrivalMessage &&
			currentChat?.members.includes(arrivalMessage.sender) &&
			setMessages((prev) => [...prev, arrivalMessage]);
	}, [arrivalMessage, currentChat]);

	useEffect(() => {
		socket.current.emit("addUser", user._id);
		socket.current.on("getUsers", (users) => {
			setOnlineUsers(
				user.followings.filter((f) => users.some((u) => u.userId === f))
			);
		});
	}, [user]);

	useEffect(() => {
		const getConversations = async () => {
			try {
				const res = await axios.get("/conversations/" + user._id);
				setConversations(res.data);
			} catch (err) {
				console.log(err);
			}
		};
		getConversations();
	}, [user._id]);

	useEffect(() => {
		const getMessages = async () => {
			try {
				const res = await axios.get("/messages/" + currentChat?._id);
				setMessages(res.data);
			} catch (err) {
				console.log(err);
			}
		};
		getMessages();
		const messageSender = currentChat?.members?.filter(
			(el) => el !== user._id
		);
		if (messageSender) setCurrentMessageSender(messageSender[0]);
	}, [currentChat]);

	const handleSubmit = async (e) => {
		e.preventDefault();
		const message = {
			sender: user._id,
			text: newMessage,
			conversationId: currentChat._id,
		};

		const receiverId = currentChat.members.find(
			(member) => member !== user._id
		);

		socket.current.emit("sendMessage", {
			senderId: user._id,
			receiverId,
			text: newMessage,
		});

		try {
			const res = await axios.post("/messages", message);
			setMessages([...messages, res.data]);
			setNewMessage("");
		} catch (err) {
			console.log(err);
		}
	};

	useEffect(() => {
		scrollRef.current?.scrollIntoView({ behavior: "smooth" });
	}, [messages]);

	return (
		<>
			{/* <Topbar /> */}
			<div className="messenger">
				<div className="chatMenu">
					<div className="chatMenuWrapper">
						<div className="chatMenuUsername">
							<div className="fs-16 ml-20">
								{user?.username}
								<div className="svgchatmenu">
									<svg
										aria-label="Down Chevron Icon"
										class="_8-yf5 "
										color="#262626"
										fill="#262626"
										height="20"
										role="img"
										viewBox="0 0 48 48"
										width="20"
									>
										<path d="M40 33.5c-.4 0-.8-.1-1.1-.4L24 18.1l-14.9 15c-.6.6-1.5.6-2.1 0s-.6-1.5 0-2.1l16-16c.6-.6 1.5-.6 2.1 0l16 16c.6.6.6 1.5 0 2.1-.3.3-.7.4-1.1.4z"></path>
									</svg>
								</div>
							</div>
							<div>
								<svg
									aria-label="New Message"
									class="_8-yf5 "
									color="#262626"
									fill="#262626"
									height="24"
									role="img"
									viewBox="0 0 44 44"
									width="24"
								>
									<path d="M33.7 44.12H8.5a8.41 8.41 0 01-8.5-8.5v-25.2a8.41 8.41 0 018.5-8.5H23a1.5 1.5 0 010 3H8.5a5.45 5.45 0 00-5.5 5.5v25.2a5.45 5.45 0 005.5 5.5h25.2a5.45 5.45 0 005.5-5.5v-14.5a1.5 1.5 0 013 0v14.5a8.41 8.41 0 01-8.5 8.5z"></path>
									<path d="M17.5 34.82h-6.7a1.5 1.5 0 01-1.5-1.5v-6.7a1.5 1.5 0 01.44-1.06L34.1 1.26a4.45 4.45 0 016.22 0l2.5 2.5a4.45 4.45 0 010 6.22l-24.3 24.4a1.5 1.5 0 01-1.02.44zm-5.2-3h4.58l23.86-24a1.45 1.45 0 000-2l-2.5-2.5a1.45 1.45 0 00-2 0l-24 23.86z"></path>
									<path d="M38.2 14.02a1.51 1.51 0 01-1.1-.44l-6.56-6.56a1.5 1.5 0 012.12-2.12l6.6 6.6a1.49 1.49 0 010 2.12 1.51 1.51 0 01-1.06.4z"></path>
								</svg>
							</div>
						</div>
						<div className="messagetypes">
							<div className="messagesectypes activeMessageTab">
								PRIMARY
							</div>
							<div className="messagesectypes">GENERAL</div>
						</div>
						{conversations.map((c) => (
							<div onClick={() => setCurrentChat(c)}>
								<Conversation
									conversation={c}
									currentUser={user}
								/>
							</div>
						))}
					</div>
				</div>
				<div className="chatBox">
					<div className="chatBoxWrapper">
						{currentChat ? (
							<>
								{currentMessageSender ? (
									<UserFetchMessage
										reference={scrollRef}
										messages={messages}
										messageSender={currentMessageSender}
									/>
								) : null}
								{/* <div className="chatBoxTop">
									{messages.map((m) => (
										<div ref={scrollRef}>
											<Message
												message={m}
												own={m.sender === user._id}
											/>
										</div>
									))}
								</div> */}
								<div className="chatBoxBottom">
									<textarea
										className="chatMessageInput"
										placeholder="Message..."
										onChange={(e) =>
											setNewMessage(e.target.value)
										}
										value={newMessage}
									></textarea>
									<button
										className="chatSubmitButton"
										onClick={handleSubmit}
									>
										Send
									</button>
								</div>
							</>
						) : (
							<NewSendMessage />
						)}
					</div>
				</div>
				{/* <div className="chatOnline">
					<div className="chatOnlineWrapper">
						<ChatOnline
							onlineUsers={onlineUsers}
							currentId={user._id}
							setCurrentChat={setCurrentChat}
						/>
					</div>
				</div> */}
			</div>
		</>
	);
}
