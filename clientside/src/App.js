import Home from "./pages/Home";
import Messenger from "./pages/messenger/Messenger";
import { Route, Routes } from "react-router-dom";

function App() {
	const user = [];
	return (
		<>
			<Routes>
				<Route path="/" element={<Home />} />

				{/* <Route
					path="/login"
					element={user ? < Navigate to="/" /> : "Login"}
				>
					{user ? <Navigate to="/" /> : "Login"}
				</Route> */}
				<Route path="/messenger" element={<Messenger />} />
			</Routes>
		</>
	);
}

export default App;
