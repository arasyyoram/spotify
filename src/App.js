import "./App.css";
import SearchComponent from "./components/search";
import TrackComponent from "./components/track";
// import data from "./data";
import data from "./datatrack";

const SPOTIFY_CLIENT = process.env.REACT_APP_SPOTIFY_CLIENT;
console.log(SPOTIFY_CLIENT);

// const { name: songName, artists, album } = data;

const renderTrack = data.map((e) => {
  return (
    <TrackComponent
      key={e.id}
      songName={e.name}
      artists={e.artists}
      album={e.album}
    />
  );
});

function App() {
  return (
    <section>
      <h1 className="playlist-title">Search Playlist</h1>
      <SearchComponent />
      <div className="card-container">{renderTrack}</div>
      {/* <TrackComponent songName={songName} artists={artists} album={album} /> */}
    </section>
  );
}

export default App;