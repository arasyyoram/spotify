import "./App.css";
import SearchComponent from "./components/search";
import { useEffect } from "react";

import { Switch, Route, Redirect } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { getAccessToken } from "./components/search/actions";

import { Helmet } from "react-helmet";
import Home from "./pages/home";
import Navbar from "./pages/home/Navbar";

function App() {
  // const [accessToken, setAccessToken] = useState("");

  // Redux
  const dispatch = useDispatch();
  const currentAccessToken = useSelector((state) => state.accessToken);
  // console.log(currentAccessToken, "<< token");

  // Get token from browser url and store it on Redux
  const getQueryParams = () => {
    const hash = window.location.hash.substring(1);
    const params = {};
    hash.split("&").forEach((hk) => {
      let temp = hk.split("=");
      params[temp[0]] = temp[1];
    });
    // setAccessToken(params.access_token);
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
              <Navbar />
              <SearchComponent />
            </>
          ) : (
            <Redirect to="/" />
          )}
        </Route>
        <Route path="/">
          {currentAccessToken ? (
            <Redirect to="/create-playlist" />
          ) : (
            <>
              <Home />
            </>
          )}
        </Route>
      </Switch>
    </section>
  );
}

export default App;
