import "./AlbumsInfo.scss";

const AlbumsInfo = ({ albumData, topTracksData }) => {
  if (!albumData) return null;
  return (
    <div className="albums__container">
      <h2 className="albums__header"> Albums</h2>
      <section className="albums">
        <ul className="albums__list">
          {albumData.items.map((item) => (
            <li key={item.uri} className="albums__items">
              <p>{item.name}</p>
              <img
                src={item.images[0].url}
                alt="Cover Image of Album"
                className="albums__img"
              />
            </li>
          ))}
        </ul>
      </section>
      <div className="album__song-container">
        <h2>Top 10 Songs</h2>
        <div className="albums__songs">
          <ol className="albums__song-list">
            {topTracksData.tracks.slice(0, 5).map((item) => (
              <li key={item.id}> {item.name}</li>
            ))}
          </ol>
          <ol start="6" className="albums__song-list">
            {topTracksData.tracks.slice(5, 10).map((item) => (
              <li key={item.id}> {item.name}</li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default AlbumsInfo;
