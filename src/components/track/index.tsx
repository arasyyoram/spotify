import React from "react";

interface Props {
  songName: string;
  artists: { name: string }[];
  album: { images: { url: string }[] };
  isHeld: boolean;
  duration: number;
  getSelect: () => void;
}

const TrackComponent: React.FC<Props> = ({
  songName,
  artists,
  album,
  isHeld,
  duration,
  getSelect,
}) => {
  const style = {
    backgroundColor: isHeld ? "#000" : "#fff",
    color: isHeld ? "#fff" : "#000",
  };

  // Convert Milisecond to Minutes:Second format
  function miliToSongDuration(mili: number) {
    const minutes: number = Math.floor(mili / 60000);
    const seconds: number = Number.parseFloat(
      ((mili % 60000) / 1000).toFixed(0)
    );
    return minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
  }

  return (
    <div className="card">
      <div className="card-img">
        <img src={album.images[0].url} alt={songName} />
      </div>
      <h3 className="card-title">{songName}</h3>
      <p className="card-artist">
        {artists[0].name} • {miliToSongDuration(duration)}
      </p>
      <button className="card-btn" onClick={getSelect} style={style}>
        {isHeld ? "Deselect" : "Select"}
      </button>
    </div>
  );
};

export default TrackComponent;
