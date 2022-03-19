import logo from "./logo.svg";
import "./App.css";

const SPOTIFY_CLIENT = process.env.REACT_APP_SPOTIFY_CLIENT;
console.log(SPOTIFY_CLIENT);

function App() {
  return (
    <div className="App">
      <h1>Hello Spotify!</h1>
    </div>
  );
}

export default App;
