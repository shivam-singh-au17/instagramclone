import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import { Profile } from "./pages/Profile/Profile";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:userId" element={<Profile />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
