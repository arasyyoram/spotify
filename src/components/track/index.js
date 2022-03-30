export default function TrackComponent({ songName, artists, album }) {
  return (
    <div className="card">
      <div className="card-img">
        <img src={album[0].url} alt={songName} />
      </div>
      <h3 className="card-title">{songName}</h3>
      <p className="card-artist">{artists[0].name}</p>
      <button className="card-btn">Select</button>
    </div>
  );
}
