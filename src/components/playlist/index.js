import { useState, useEffect } from "react";

export default function PlaylistComponent({ accessToken, selectedTrack }) {
  const [form, setForm] = useState({ title: "", description: "" });
  const [userID, setUserID] = useState("");
  const [playlistID, setPlaylistID] = useState("");

  const formHandler = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };

  useEffect(() => {
    if (userID !== "") {
      createPlaylist();
      addPlaylist();
    }
  }, [userID]);

  const formSubmit = (event) => {
    event.preventDefault();
    console.log("send data...");
    const getUserProfile = async () => {
      await fetch(`https://api.spotify.com/v1/me`, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: "Bearer " + accessToken,
        },
      })
        .then((response) => response.json())
        .then((data) => setUserID(data.id));
    };
    getUserProfile();
  };

  const createPlaylist = async () => {
    let dataPlaylist = {
      name: form.title,
      description: form.description,
      public: false,
      collaborative: false,
    };
    await fetch(`https://api.spotify.com/v1/users/${userID}/playlists`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer " + accessToken,
      },
      body: JSON.stringify(dataPlaylist),
    })
      .then((response) => response.json())
      .then((data) => setPlaylistID(data.id));
  };

  const addPlaylist = async () => {
    console.log(selectedTrack);
    // let tempdataplaylist = selectedTrack.join;
    let dataitemPlaylist = {
      uris: selectedTrack,
      position: 0,
    };
    await fetch(`https://api.spotify.com/v1/playlists/${playlistID}/tracks`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer " + accessToken,
      },
      body: JSON.stringify(dataitemPlaylist),
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
  };
  console.log(playlistID);
  return (
    <>
      <h1 className="playlist-title">Create Playlist</h1>
      <div className="playlist-container">
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
