export default function SearchComponen() {
  return (
    <div className="playlist-container">
      <form id="playlist-form" className="form-container">
        <div className="search-container">
          <input
            type="search"
            id="search"
            className="search-bar"
            placeholder="Search your favorite song"
          />
        </div>

        <button id="playlist-btn">Search</button>
      </form>
      {/* <img
        src="https://media.giphy.com/media/Vh8pbGX3SGRwFDh3V0/source.gif"
        alt="images"
        className="img"
      /> */}
    </div>
  );
}
