import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import { Profile } from "./pages/profile/Profile";
import Setting from "./pages/setting/Setting";
import Message from "./pages/messenger/Messenger";

function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/:userId" element={<Profile />} />
				<Route path="/login" element={<Login />} />
				<Route path="/register" element={<Home />} />
				<Route path="/setting" element={<Setting />} />
				<Route path="/message" element={<Message />} />
			</Routes>
		</>
	);
}

export default App;
