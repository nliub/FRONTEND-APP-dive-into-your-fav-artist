import "./ArtistInfo.scss";

const AristInfo = ({ artistData }) => {
  if (!artistData) return null;
  const { name, followers, genres, images, external_urls, popularity } =
    artistData;
  const firstImage = images[0].url;
  const formatNumber = (n) => {
    return new Intl.NumberFormat().format(n);
  };
  return (
    <>
      <div className="info">
        <img src={firstImage} alt="Artist Image" className="info__img" />
        <div>
          <h2 className="info__name">{name}</h2>
          <p className="info__followers">
            <strong>{formatNumber(followers.total)}</strong> followers
          </p>
          <p className="info__pop">
            <strong>Popularity:</strong> {popularity}/100
          </p>
          {/* Genres Here */}
          <p className="info__genres">
            <strong>Genres:</strong> {genres.join(", ")}
          </p>
        </div>
      </div>
    </>
  );
};

export default AristInfo;
