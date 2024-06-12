const DumbComponent = ({
  artistData,
  albumData,
  topTracksData,
  relatedArtistsData,
}) => {
  return (
    <div>
      <h2>{artistData.name}</h2>
      <h2>{artistData.genres}</h2>
      <h2>{artistData.popularity}</h2>
      <hr />
      <h2>
        {albumData.items.map((item) => (
          <div key={item.uri}> {item.name}</div>
        ))}
      </h2>
      <hr />
      <h2>
        {topTracksData.tracks.map((item) => (
          <div key={item.id}> {item.name}</div>
        ))}
      </h2>
      <hr />
      <h2>
        <p>related artists</p>
        {relatedArtistsData.artists.map((item) => (
          <div key={item.id}> {item.name}</div>
        ))}
      </h2>
    </div>
  );
};

export default DumbComponent;
