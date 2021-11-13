import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import { Profile } from "./Components/Profile/Profile";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/" element={<Profile />} />
      </Routes>
    </>
  );
}

export default App;
