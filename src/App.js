import "./App.css";
import SearchComponent from "./pages/home";
import data from "./data";

const SPOTIFY_CLIENT = process.env.REACT_APP_SPOTIFY_CLIENT;
console.log(SPOTIFY_CLIENT);

const { name: songName, artists, album } = data;

function App() {
  return (
    <div>
      <h1 className="playlist-title">Search Playlist</h1>
      <SearchComponent />
      <div className="card-container">
        <div className="card">
          <div className="card-img">
            <img src={album.images[0].url} alt={songName} />
          </div>
          <h3 className="card-title">{songName}</h3>
          <p className="card-artist">{artists[0].name}</p>
          <button className="card-btn">Select</button>
        </div>
      </div>
    </div>
  );
}

export default App;
