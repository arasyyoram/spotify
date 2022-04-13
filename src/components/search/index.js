import { useState } from "react";
import TrackComponent from "../track";
import PlaylistComponent from "../playlist";
import { useSelector } from "react-redux";
import { Helmet } from "react-helmet";

export default function SearchComponent() {
  const [query, setQuery] = useState("");
  const [tracks, setTracks] = useState([]);
  const [selectedTrack, setSelectedTrack] = useState([]);

  const currentAccessToken = useSelector((state) => state.accessToken);
  // console.log(currentAccessToken, "<< token searchcomponenet");

  const getTracks = async (event) => {
    event.preventDefault();
    console.log("fetching...");

    const trackslist = await fetch(
      `https://api.spotify.com/v1/search?q=${query}&type=artist%2Calbum%2Ctrack&market=ID&limit=8`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: "Bearer " + currentAccessToken,
        },
      }
    ).then((response) => response.json());
    const tempTrack = [];
    console.log(trackslist);
    trackslist.tracks.items.forEach((e) => {
      const tempObj = { ...e, isHeld: false };
      tempTrack.push(tempObj);
    });
    // console.log(tracks.length);
    if (tracks.length === 0) {
      setTracks(tempTrack);
    }

    if (tracks.length !== 0) {
      // return setTracks(tempTrack);
      setTracks((oldTrack) => {
        let newTrack = [];
        const tempselectedTrack = oldTrack.filter((track) => {
          // console.log(track);
          return track.isHeld;
        });
        // console.log(selectedTrack);
        newTrack = [...tempselectedTrack, ...tempTrack];
        return newTrack;
      });
    }

    // setTracks(tracks.albums.items);
    // console.log(tempTrack[0].isHeld);
    console.log(selectedTrack); // deleted this
  };

  const queryInput = (event) => {
    setQuery(event.target.value);
  };

  const getSelect = (id) => {
    console.log(id);

    setTracks((oldTrack) => {
      const selectedTrackTemp = oldTrack.map((track) => {
        return track.uri === id ? { ...track, isHeld: !track.isHeld } : track;
      });
      return selectedTrackTemp;
    });

    setSelectedTrack((oldselectedTrack) => {
      if (oldselectedTrack.indexOf(id) > -1) {
        oldselectedTrack.splice(oldselectedTrack.indexOf(id), 1);
        return oldselectedTrack;
      }
      return [...oldselectedTrack, id];
    });
  };
  // console.log(selectedTrack, "<< selected track");

  return (
    <>
      <Helmet>
        <title>Create Playlist</title>
      </Helmet>
      <div className="playlist-container">
        <form id="playlist-form" className="form-container">
          <div className="search-container">
            <input
              type="search"
              id="search"
              className="search-bar"
              placeholder="Search your favorite song"
              onChange={queryInput}
            />
          </div>

          <button id="playlist-btn" onClick={getTracks}>
            Search
          </button>
        </form>
      </div>
      <PlaylistComponent
        accessToken={currentAccessToken}
        selectedTrack={selectedTrack}
      />
      <div className="card-container">
        {tracks.length > 0 &&
          tracks.map((e) => {
            return (
              <TrackComponent
                key={e.id}
                songName={e.name}
                artists={e.artists}
                album={e.album}
                isHeld={e.isHeld}
                getSelect={() => getSelect(e.uri)}
              />
            );
          })}
      </div>
    </>
  );
}
