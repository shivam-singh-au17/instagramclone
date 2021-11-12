<<<<<<< HEAD
import "./App.css";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Profile from "./pages/profile/Profile";
import Register from "./pages/register/Register";
import Messenger from "./pages/messenger/Messenger";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
} from "react-router-dom";
function App() {
	const { user } = 1;
	return (
		<>
			<Router>
				<Switch>
					<Route exact path="/">
						{user ? <Home /> : <Register />}
					</Route>
					<Route path="/login">
						{user ? <Redirect to="/" /> : <Login />}
					</Route>
					<Route path="/register">
						{user ? <Redirect to="/" /> : <Register />}
					</Route>
					<Route path="/messenger">
						{!user ? <Redirect to="/" /> : <Messenger />}
					</Route>
					<Route path="/profile/:username">
						<Profile />
					</Route>
				</Switch>
			</Router>
		</>
	);
=======
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
>>>>>>> e9d6f9f7002b8b9e4f2bc6d4ee1b7bfbf2c6b1f8
}

export default App;
