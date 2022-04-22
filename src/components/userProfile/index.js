import { useEffect, useState } from "react";

const UserProfile = ({ accessToken }) => {
  const [userName, setUserName] = useState("");

  // Get user Spotify profile
  useEffect(() => {
    fetch(`https://api.spotify.com/v1/me`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer " + accessToken,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setUserName(data.display_name);
      });
  }, []);

  return (
    <div>
      <h3 className="playlist-title">Hello {userName} 👋</h3>
    </div>
  );
};

export default UserProfile;
