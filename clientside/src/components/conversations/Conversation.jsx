import axios from "axios";
import { useEffect, useState } from "react";
import "./conversation.css";

export default function Conversation({ conversation, currentUser }) {
	const [user, setUser] = useState(null);
	const PF = process.env.REACT_APP_PUBLIC_FOLDER;

	useEffect(() => {
		const friendId = conversation.members.find(
			(m) => m !== currentUser._id
		);

		const getUser = async () => {
			try {
				const res = await axios("/users?userId=" + friendId);
				setUser(res.data);
			} catch (err) {
				console.log(err);
			}
		};
		getUser();
	}, [currentUser, conversation]);

	return (
		<div className="conversation">
			<img
				className="conversationImg"
				src={
					user?.profilePicture
						? PF + user.profilePicture
						: PF + "person/noAvatar.png"
				}
				alt=""
			/>
			<div>
				<div className="conversationName">{user?.username}</div>
				<div className="lastActiveConversation">Active 15hrs ago</div>
			</div>
		</div>
	);
}
