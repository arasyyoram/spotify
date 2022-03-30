import { Component } from "react";
import TrackComponent from "../track";
export default class SearchComponent extends Component {
  state = { accessToken: "", query: "", tracks: [] };

  getQueryParams = () => {
    const hash = window.location.hash.substring(1);
    const params = {};
    hash.split("&").forEach((hk) => {
      let temp = hk.split("=");
      params[temp[0]] = temp[1];
    });
    // console.log(params.access_token);
    this.setState({ accessToken: params.access_token });
    return params.access_token;
  };

  componentDidMount() {
    if (window.location.hash) {
      this.getQueryParams();
    }
  }

  getTracks = async (event) => {
    event.preventDefault();
    console.log("fetching...");

    const tracks = await fetch(
      `https://api.spotify.com/v1/search?q=${this.state.query}&type=artist%2Calbum%2Ctrack&market=ID&limit=8`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: "Bearer " + this.state.accessToken,
        },
      }
    ).then((response) => response.json());
    this.setState({ tracks: tracks.albums.items });
    // console.log(tracks);
  };

  queryInput = (event) => {
    this.setState({ query: event.target.value });
  };

  render() {
    const { tracks } = this.state;

    return (
      <>
        <div className="playlist-container">
          <form id="playlist-form" className="form-container">
            <div className="search-container">
              <input
                type="search"
                id="search"
                className="search-bar"
                placeholder="Search your favorite song"
                onChange={this.queryInput}
              />
            </div>

            <button id="playlist-btn" onClick={this.getTracks}>
              Search
            </button>
          </form>
          {/* <img
        src="https://media.giphy.com/media/Vh8pbGX3SGRwFDh3V0/source.gif"
        alt="images"
        className="img"
      /> */}
        </div>
        <div className="card-container">
          {tracks.length > 0 &&
            tracks.map((e) => {
              return (
                <TrackComponent
                  key={e.id}
                  songName={e.name}
                  artists={e.artists}
                  album={e.images}
                />
              );
            })}
        </div>
      </>
    );
  }
}
