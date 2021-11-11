import './App.css';
import { Profile } from './Components/Profile/Profile';

const containerStyle = {
  width: "935px",
  // backgroundColor: "whitesmoke",
  margin: "auto"
}

function App() {
  return (
    <>
      <div style={containerStyle}>
        <Profile />
      </div>
    </>
  );
}

export default App;
