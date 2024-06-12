// import "./AristInfo.scss";
const AristInfo = ({ artistData }) => {
  if (!artistData) return null;
  const { name, followers, genres, images, external_urls, popularity } =
    artistData;
  const firstImage = images[0].url;
  return (
    <>
      <div className="info">
        <img src={firstImage} alt="Artist Image" />
        <div>
          <h2>{name}</h2>
          <p>{followers.total} followers</p>
          <p>Popularity: {popularity}/100</p>
          {/* Genres Here */}
          <p>Genres: {genres.join(", ")}</p>
        </div>
      </div>
    </>
  );
};

export default AristInfo;
