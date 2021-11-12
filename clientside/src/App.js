import './App.css';
import { Profile } from './Components/Profile/Profile';
import { BrowserRouter } from 'react-router-dom';

const containerStyle = {
  width: "940px",
  margin: "auto"
}

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="main-container" style={containerStyle}>
          <Profile />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
