import "./App.css";
import SearchComponent from "./components/search";
import { useEffect, useState } from "react";

import { Switch, Route, Redirect } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { getAccessToken } from "./components/search/actions";

import { Helmet } from "react-helmet";
import Button from "@mui/material/Button";

const SPOTIFY_CLIENT = process.env.REACT_APP_SPOTIFY_CLIENT;
// console.log(SPOTIFY_CLIENT);

const client_id = SPOTIFY_CLIENT;
const REDIRECT_URI =
  process.env.REACT_APP_DEV_URL || process.env.REACT_APP_VERCEL_URL;

let url = "https://accounts.spotify.com/authorize";
url += "?response_type=token";
url += "&client_id=" + client_id;
url += "&scope=playlist-modify-private";
url += "&redirect_uri=" + REDIRECT_URI;
// console.log(url);

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
      <Helmet>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
      </Helmet>
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
            <>
              {/* <a href={`${url}`} className="login">
                Login
              </a> */}
              <Button
                href={`${url}`}
                variant="outlined"
                size="large"
                sx={{
                  color: "#000000",
                  borderColor: "#000000",
                  position: "absolute",
                  right: 30,
                  top: 20,
                  "&:hover": {
                    borderColor: "#000000",
                    backgroundColor: "#000000",
                    color: "#ffffff",
                  },
                }}
              >
                Login
              </Button>
            </>
          )}
        </Route>
      </Switch>
    </section>
  );
}

export default App;
