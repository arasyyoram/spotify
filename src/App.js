import "./App.css";
import SearchComponent from "./components/search";
import TrackComponent from "./components/track";
import data from "./data";

const SPOTIFY_CLIENT = process.env.REACT_APP_SPOTIFY_CLIENT;
// console.log(SPOTIFY_CLIENT);

const { name: songName, artists, album } = data;

function App() {
  return (
    <section>
      <h1 className="playlist-title">Search Playlist</h1>
      <SearchComponent />
      <TrackComponent songName={songName} artists={artists} album={album} />
    </section>
  );
}

export default App;
