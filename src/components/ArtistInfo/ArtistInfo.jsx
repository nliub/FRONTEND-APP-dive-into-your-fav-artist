// import "./AristInfo.scss";
import data from "../../data/example.json";
const AristInfo = () => {
  const { name, followers, genres, images, external_urls, popularity } = data;
  const firstImage = images[0];
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
