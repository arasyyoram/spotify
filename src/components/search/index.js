import { useEffect, useState } from "react";
import TrackComponent from "../track";
import PlaylistComponent from "../playlist";
import { useSelector, useDispatch } from "react-redux";
import { getAccessToken } from "./actions";

export default function SearchComponent() {
  // state = { accessToken: "", query: "", tracks: [] };
  const [accessToken, setAccessToken] = useState("");
  const [query, setQuery] = useState("");
  const [tracks, setTracks] = useState([]);
  const [selectedTrack, setSelectedTrack] = useState([]);

  const dispatch = useDispatch();
  const currentAccessToken = useSelector((state) => state.accessToken);

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

  // componentDidMount() {
  //   if (window.location.hash) {
  //     this.getQueryParams();
  //   }
  // }

  useEffect(() => {
    if (window.location.hash) {
      getQueryParams();
    }
  }, []);

  // const rollTracks = (event) => {
  //   event.preventDefault();
  //   setTracks((oldTrack) => {
  //     if (oldTrack.length !== 0) {
  //       oldTrack.map((track) => {
  //         return track.isHeld ? track : getTracks();
  //       });
  //     }
  //   });
  // };

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
    // else {
    //   setTracks((oldTrack) =>
    //     oldTrack.map((track) => {
    //       return track.isHeld ? track : tempTrack;
    //     })
    //   );
    // }
    // console.log(tracks);
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
    console.log(selectedTrack); //deleted this
  };

  const queryInput = (event) => {
    setQuery(event.target.value);
  };

  // const { tracks } = this.state;

  const getSelect = (id) => {
    console.log(id);
    setTracks((oldTrack) =>
      oldTrack.map((track) => {
        return track.uri === id ? { ...track, isHeld: !track.isHeld } : track;
      })
    );
    tracks.forEach((track) => {
      if (track.uri === id) {
        // masih duplicate ketika setstate di dlm setstate
        setSelectedTrack((oldselectedTrack) => {
          const newTrack = [...oldselectedTrack, track.uri];
          return newTrack;
        });
      }
    });
    // setSelect();
  };

  // const setSelect = () => {
  //   setSelectedTrack((oldselectedTrack) => {
  //     const tempselectedTrack = tracks.filter((track) => {
  //       return track.isHeld;
  //     });
  //     console.log(tempselectedTrack);
  //     const newTrack = [...oldselectedTrack, ...tempselectedTrack];
  //     return newTrack;
  //   });
  // };
  // console.log(selectedTrack);
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
              onChange={queryInput}
            />
          </div>

          <button id="playlist-btn" onClick={getTracks}>
            Search
          </button>
        </form>
        {/* <img
        src="https://media.giphy.com/media/Vh8pbGX3SGRwFDh3V0/source.gif"
        alt="images"
        className="img"
      /> */}
      </div>
      <PlaylistComponent
        accessToken={accessToken}
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
