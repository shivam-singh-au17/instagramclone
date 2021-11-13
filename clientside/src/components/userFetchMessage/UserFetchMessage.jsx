import "./userFetchMessage.css";
import Message from "../message/Message";
import { useEffect, useRef, useState } from "react";
import axios from "axios";

export default function Login({ messageSender, messages, reference }) {
	const [user, setUser] = useState(null);

	useEffect(() => {
		const getUser = async () => {
			try {
				const res = await axios.get(`/users?userId=${messageSender}`);
				setUser(res.data);
			} catch (err) {
				console.log(err);
			}
		};
		getUser();
	}, []);
	useEffect(() => {
		reference.current?.scrollIntoView({ behavior: "smooth" });
	}, [messages]);

	return (
		<>
			{user ? (
				<>
					<div className="userIdFetchWrapper">
						<div>
							<img
								className="imgUserMessage"
								alt=""
								src={`/assets/${user.profilePicture}`}
							/>
							<span className="spanUsername">
								{user.username}
							</span>
						</div>
						<div>
							<svg
								aria-label="View Thread Details"
								class="_8-yf5 "
								color="#262626"
								fill="#262626"
								height="24"
								role="img"
								viewBox="0 0 48 48"
								width="24"
							>
								<path d="M24 48C10.8 48 0 37.2 0 24S10.8 0 24 0s24 10.8 24 24-10.8 24-24 24zm0-45C12.4 3 3 12.4 3 24s9.4 21 21 21 21-9.4 21-21S35.6 3 24 3z"></path>
								<circle
									clip-rule="evenodd"
									cx="24"
									cy="14.8"
									fill-rule="evenodd"
									r="2.6"
								></circle>
								<path d="M27.1 35.7h-6.2c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5h6.2c.8 0 1.5.7 1.5 1.5s-.7 1.5-1.5 1.5z"></path>
								<path d="M24 35.7c-.8 0-1.5-.7-1.5-1.5V23.5h-1.6c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5H24c.8 0 1.5.7 1.5 1.5v12.2c0 .8-.7 1.5-1.5 1.5z"></path>
							</svg>
						</div>
					</div>
					<div className="chatBoxTop">
						{messages.map((m) => (
							<div ref={reference}>
								<Message
									profile={user.profilePicture}
									message={m}
									own={m.sender === user._id}
								/>
							</div>
						))}
					</div>
				</>
			) : null}
		</>
	);
}
