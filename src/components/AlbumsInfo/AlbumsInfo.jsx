import "./AlbumsInfo.scss";

const AlbumsInfo = ({ albumData, topTracksData }) => {
  if (!albumData) return null;
  return (
    <div>
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
        <div className="album__song-container">
          <ul className="albums__song-list">
            {topTracksData.tracks.map((item) => (
              <li key={item.id}> {item.name}</li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
};

export default AlbumsInfo;
