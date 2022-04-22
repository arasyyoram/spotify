import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import { getAccessToken } from "../../components/search/actions";

// Get Spotify client id from env
const SPOTIFY_CLIENT = process.env.REACT_APP_SPOTIFY_CLIENT;
const REDIRECT_URI =
  process.env.REACT_APP_DEV_URL || process.env.REACT_APP_VERCEL_URL;

// Url to get token from Spotify
const url = `https://accounts.spotify.com/authorize?response_type=token&client_id=${SPOTIFY_CLIENT}&scope=playlist-modify-private&redirect_uri=${REDIRECT_URI}`;

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const dispatch = useDispatch();
  const currentAccessToken = useSelector((state) => state.accessToken);

  // Logout handler
  const logoutHandler = () => dispatch(getAccessToken(""));

  return (
    <div className={styles.navwrap}>
      <ul className={styles.nav_ol}>
        <li className={styles.nav_li}>
          <Link to="/" className={`${styles.nav_link} ${styles.nav_logo}`}>
            Spotify
          </Link>
        </li>
        <li className={styles.nav_li}>
          <Button
            onClick={handleOpen}
            sx={{
              color: "#ffffff",
              backgroundColor: "#1db954",
              padding: "5px 10px",
              borderRadius: "50px",
              "&:hover": {
                backgroundColor: "#1db954",
                color: "#ffffff",
              },
            }}
          >
            About this project
          </Button>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Hello There!
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                Thank you for stopping by. This is the project that I made for
                Generasi Gigih. This app will help you to make spotify playlist
                easily.
              </Typography>
            </Box>
          </Modal>
        </li>
      </ul>

      {currentAccessToken ? (
        <Button
          onClick={logoutHandler}
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
          Logout
        </Button>
      ) : (
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
      )}
    </div>
  );
};

export default Navbar;
