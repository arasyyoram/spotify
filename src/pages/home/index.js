import { Helmet } from "react-helmet";
import styles from "./index.module.css";
import Navbar from "./Navbar";

const Home = () => (
  <>
    <Helmet>
      <title>Spotify</title>
    </Helmet>
    <Navbar />
    <div className={styles.homewrap}>
      <div>
        <h1 className={styles.title}>Welcome to Spotify</h1>
        <h2 className={styles.desc}>
          create your spotify playlist with just a few clicks
        </h2>
      </div>
    </div>
    <footer className={styles.footer}>
      <p className={styles.footer_text}>Copyright © 2022 • Made by @yoram</p>
    </footer>
  </>
);

export default Home;
