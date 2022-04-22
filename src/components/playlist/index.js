import { useState } from "react";

export default function PlaylistComponent({ accessToken, selectedTrack }) {
  const [form, setForm] = useState({ title: "", description: "" });
  // const [userID, setUserID] = useState("");
  // const [playlistID, setPlaylistID] = useState("");
  const [successMessage, setSuccessMessage] = useState(false);

  // Handle input query and store it to state
  const formHandler = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };

  // Handle form submit and run several func to POST data to create playlist
  const formSubmit = (event) => {
    event.preventDefault();
    // console.log("send data...");

    // Get the userID
    const getUserProfile = async () => {
      let userIDlocal = "";
      await fetch(`https://api.spotify.com/v1/me`, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: "Bearer " + accessToken,
        },
      })
        .then((response) => response.json())
        .then((data) => {
          // setUserID(data.id);
          userIDlocal = data.id;
        });
      createPlaylist(userIDlocal);
    };
    getUserProfile();
  };

  // Get playlist ID
  const createPlaylist = async (userIDlocal) => {
    let dataPlaylist = {
      name: form.title,
      description: form.description,
      public: false,
      collaborative: false,
    };
    let playlistIDlocal = "";

    await fetch(`https://api.spotify.com/v1/users/${userIDlocal}/playlists`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer " + accessToken,
      },
      body: JSON.stringify(dataPlaylist),
    })
      .then((response) => response.json())
      .then((data) => {
        // setPlaylistID(data.id);
        playlistIDlocal = data.id;
      });
    addPlaylist(playlistIDlocal);
  };

  // POST selected track into Spotify playlist
  const addPlaylist = async (playlistIDlocal) => {
    let dataitemPlaylist = {
      uris: selectedTrack,
      position: 0,
    };

    await fetch(
      `https://api.spotify.com/v1/playlists/${playlistIDlocal}/tracks`,
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: "Bearer " + accessToken,
        },
        body: JSON.stringify(dataitemPlaylist),
      }
    )
      .then((response) => response.json())
      .then((data) => {
        setSuccessMessage(true);
        setTimeout(() => {
          setSuccessMessage(false);
        }, 3000);
        // console.log(data);
      });

    // Reset form input after click submit button
    setForm({ title: "", description: "" });
  };

  return (
    <>
      <div className="playlist-container">
        <h1 className="playlist-title">Create Playlist</h1>

        {successMessage && (
          <h4 className="playlist-title">Playlist has been added...</h4>
        )}

        <form
          id="playlist-form"
          className="form-container"
          onSubmit={formSubmit}
        >
          <div className="title-container">
            <label htmlFor="title" className="title-label">
              Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={form.title}
              className="title"
              placeholder="Add your favorite song into playlist"
              onChange={formHandler}
              minLength="10"
              required
            />
          </div>
          <div className="description-container">
            <label htmlFor="description" className="desc-label">
              Description
            </label>
            <input
              type="text"
              id="description"
              name="description"
              value={form.description}
              className="description"
              placeholder="Add your favorite song into playlist"
              onChange={formHandler}
              required
            />
          </div>

          <button id="playlist-btn">Add playlist</button>
        </form>
      </div>
    </>
  );
}
