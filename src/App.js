import "./App.css";
import SearchComponent from "./components/search";
import TrackComponent from "./components/track";
// import data from "./data";
import data from "./datatrack";
import { useEffect, useState } from "react";

import { Switch, Route, Redirect } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { getAccessToken } from "./components/search/actions";

const SPOTIFY_CLIENT = process.env.REACT_APP_SPOTIFY_CLIENT;
// console.log(SPOTIFY_CLIENT);

const client_id = SPOTIFY_CLIENT;

let url = "https://accounts.spotify.com/authorize";
url += "?response_type=token";
url += "&client_id=" + client_id;
url += "&scope=playlist-modify-private";
url += "&redirect_uri=http://localhost:3000/";
// console.log(url);

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
  const [accessToken, setAccessToken] = useState("");

  const dispatch = useDispatch();
  const currentAccessToken = useSelector((state) => state.accessToken);
  console.log(currentAccessToken, "<< token");

  const getQueryParams = () => {
    const hash = window.location.hash.substring(1);
    const params = {};
    hash.split("&").forEach((hk) => {
      let temp = hk.split("=");
      params[temp[0]] = temp[1];
    });
    // console.log(params.access_token);
    setAccessToken(params.access_token);
    dispatch(getAccessToken(params.access_token));
    return params.access_token;
  };

  useEffect(() => {
    if (window.location.hash) {
      getQueryParams();
    }
  }, []);

  return (
    <section>
      <Switch>
        <Route path="/create-playlist">
          {currentAccessToken ? (
            <>
              <h1 className="playlist-title">Search Playlist</h1>
              <SearchComponent />
            </>
          ) : (
            <Redirect to="/" />
          )}
        </Route>
        <Route path="/">
          <h1 className="playlist-title">Welcome to Spotify</h1>
          {currentAccessToken ? (
            <Redirect to="/create-playlist" />
          ) : (
            <a href={`${url}`} className="login">
              Login
            </a>
          )}
        </Route>
        {/* <div className="card-container">{renderTrack}</div> */}
        {/* <TrackComponent songName={songName} artists={artists} album={album} /> */}
      </Switch>
    </section>
  );
}

export default App;
