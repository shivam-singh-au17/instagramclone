import './App.css';
import { Profile } from './Components/Profile/Profile';
import { BrowserRouter } from 'react-router-dom';

const containerStyle = {
  width: "940px",
  // backgroundColor: "whitesmoke",
  margin: "auto"
}

function App() {
  return (
    <>
      <BrowserRouter>
        <div style={containerStyle}>
          <Profile />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
