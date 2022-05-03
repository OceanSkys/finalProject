import logo from './logo.svg';
import './App.css';
import profileImage from './img/Picofme.png'

function App() {
  return (
    <div className="App">
      <h1>my react App</h1>
      <h2>Auther: Jeremy Thornton</h2>
      <img src={profileImage} alt="profile-image" />
    </div>
  );
}

export default App;
