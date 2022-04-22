import React, { useState } from "react";
import TrackComponent from "../track";
import PlaylistComponent from "../playlist";
import { useSelector, RootStateOrAny } from "react-redux";
import { Helmet } from "react-helmet";
import UserProfile from "../userProfile";

interface Track {
  id: string;
  name: string;
  artists: { name: string }[];
  album: { images: { url: string }[] };
  isHeld: boolean;
  duration_ms: number;
  uri: string;
}

export default function SearchComponent() {
  const [query, setQuery] = useState("");
  const [tracks, setTracks] = useState<Track[]>([]);
  const [selectedTrack, setSelectedTrack] = useState<string[]>([]);

  const currentAccessToken = useSelector(
    (state: RootStateOrAny) => state.accessToken
  );
  // console.log(currentAccessToken, "<< token searchcomponenet");

  // Fetch track from Spotify API
  const getTracks = async (event: React.FormEvent) => {
    event.preventDefault();
    // console.log("fetching...");

    // Store the fetch to variable
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

    // Modify JSON response to add isHeld property
    const tempTrack: any = [];
    trackslist.tracks.items.forEach((e: any) => {
      const tempObj = { ...e, isHeld: false };
      tempTrack.push(tempObj);
    });

    // Validate tracks state before setState
    if (tracks.length === 0) {
      setTracks(tempTrack);
    }

    if (tracks.length !== 0) {
      setTracks((oldTrack) => {
        let newTrack = [];
        const tempselectedTrack = oldTrack.filter((track) => {
          return track.isHeld;
        });
        newTrack = [...tempselectedTrack, ...tempTrack];
        return newTrack;
      });
    }
  };
  // End of getTracks func

  // Handle query input form
  const queryInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  // Handle selected and deselected track and set it to state
  const getSelect = (id: string) => {
    // Change isHeld prop when track get selected
    setTracks((oldTrack) => {
      const selectedTrackTemp = oldTrack.map((track) => {
        return track.uri === id ? { ...track, isHeld: !track.isHeld } : track;
      });
      return selectedTrackTemp;
    });

    // Store selected track to state
    setSelectedTrack((oldselectedTrack) => {
      if (oldselectedTrack.indexOf(id) > -1) {
        oldselectedTrack.splice(oldselectedTrack.indexOf(id), 1);
        return oldselectedTrack;
      }
      return [...oldselectedTrack, id];
    });
  };

  return (
    <>
      <Helmet>
        <title>Create Playlist</title>
      </Helmet>

      <UserProfile accessToken={currentAccessToken} />

      <div className="playlist-container">
        <h1 className="playlist-title">Search Playlist</h1>
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
                duration={e.duration_ms}
                getSelect={() => getSelect(e.uri)}
              />
            );
          })}
      </div>
    </>
  );
}
