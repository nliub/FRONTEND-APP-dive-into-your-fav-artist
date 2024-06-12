import "./RelatedArtist.scss";
import { useNavigate } from "react-router-dom";

const RelatedArtist = ({ relatedArtistsData }) => {
  const navigate = useNavigate();
  const handleClickArtist = (artistID) => {
    navigate(`/${artistID}`);
    console.log(artistID);
  };
  return (
    <>
      <div className="related-artist">
        <h2>Related Artist</h2>
        <section className="related-artist__container">
          <ol className="related-artist__list">
            {relatedArtistsData.artists.slice(0, 5).map((item) => (
              <li key={item.id} className="related-artist__items">
                {item.name}
                <img
                  src={item.images[0].url}
                  alt=""
                  className="related-artist__img"
                  onClick={() => handleClickArtist(item.id)}
                />
              </li>
            ))}
          </ol>
        </section>
      </div>
    </>
  );
};

export default RelatedArtist;
