export default function TrackComponent({
  songName,
  artists,
  album,
  isHeld,
  getSelect,
}) {
  const style = {
    backgroundColor: isHeld ? "#000" : "#fff",
    color: isHeld ? "#fff" : "#000",
  };

  return (
    <div className="card">
      <div className="card-img">
        <img src={album[0].url} alt={songName} />
      </div>
      <h3 className="card-title">{songName}</h3>
      <p className="card-artist">{artists[0].name}</p>
      <button className="card-btn" onClick={getSelect} style={style}>
        {isHeld ? "Deselect" : "Select"}
      </button>
    </div>
  );
}
