import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ArtistInfo from "../components/ArtistInfo/ArtistInfo";
import AlbumsInfo from "../components/AlbumsInfo/AlbumsInfo";
import Header from "../components/Header/Header";
import axios from "axios";
import RelatedArtist from "../components/RelatedArtist/RelatedArtist";

//import example data for demo when api calls fail (e.g. expired token)
import drake from "../default-data/drake.json";
import future from "../default-data/future.json";
import adele from "../default-data/adele.json";
import coldplay from "../default-data/coldplay.json";

const MainPage = () => {
  const navigate = useNavigate();
  const baseURL = "https://api.spotify.com/v1/";
  const access_token =
    "BQD1kMO-fP7hYqL2yTLDbZ4nK8A73bnyOlS2zBDy0E8Xnp4C9Kd1eIhq2ZGYw1EaV1odA-zO3pfA0--5lWcc2qlCMgs8Y0Nm1M2CjzUYoWyM2xNqRgQ";
  const { id: artistIDfromParams } = useParams();
  const [artistData, setArtistData] = useState(null);
  const [albumData, setAlbumData] = useState(null);
  const [topTracksData, setTopTracksData] = useState(null);
  const [relatedArtistsData, setRelatedArtistsData] = useState(null);

  const artistNameToID = {
    drake: "3TVXtAsR1Inumwj472S9r4",
    future: "1RyvyyTE3xzB2ZywiAwp0i",
    coldplay: "4gzpq5DPGxSnKTe4SA8HAU",
    adele: "4dpARuHxo51G3z768sgnrY",
  };

  const artistNameToData = {
    drake,
    future,
    coldplay,
    adele,
  };

  let artistID = artistIDfromParams ? artistIDfromParams : artistNameToID.drake;
  const getArtistData = async () => {
    const sectionOrder = 0;
    for (const [name, id] of Object.entries(artistNameToID)) {
      if (id === artistID) {
        setArtistData(artistNameToData[name][sectionOrder]);
        return;
      }
    }

    try {
      const url = `${baseURL}artists/${artistID}`;
      const response = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      });
      console.log(response.data);
      setArtistData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getAlbumData = async () => {
    const sectionOrder = 1;
    for (const [name, id] of Object.entries(artistNameToID)) {
      if (id === artistID) {
        setAlbumData(artistNameToData[name][sectionOrder]);
        return;
      }
    }
    try {
      const url = `${baseURL}artists/${artistID}/albums`;

      const response = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      });
      console.log(response.data);
      setAlbumData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getTopTracksData = async () => {
    const sectionOrder = 2;
    for (const [name, id] of Object.entries(artistNameToID)) {
      if (id === artistID) {
        setTopTracksData(artistNameToData[name][sectionOrder]);
        return;
      }
    }
    try {
      const url = `${baseURL}artists/${artistID}/top-tracks`;

      const response = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      });
      console.log(response.data);

      setTopTracksData(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  const getRelatedArtistsData = async () => {
    const sectionOrder = 3;
    for (const [name, id] of Object.entries(artistNameToID)) {
      if (id === artistID) {
        setRelatedArtistsData(artistNameToData[name][sectionOrder]);
        return;
      }
    }
    try {
      const url = `${baseURL}artists/${artistID}/related-artists`;

      const response = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      });
      console.log(response.data);

      setRelatedArtistsData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getArtistIDFromName = async (artistName) => {
    for (const [name, id] of Object.entries(artistNameToID)) {
      if (name === artistName) {
        navigate(`/${id}`);
        return;
      }
    }

    try {
      const url = `${baseURL}search?q=${artistName}&type=artist`;
      const response = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      });
      const linkedEndpointID = response.data.artists.items[0].id;
      // console.log(linkedEndpointID);
      navigate(`/${linkedEndpointID}`);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSearchInput = (event) => {
    event.preventDefault();
    const form = event.target;
    const searchInput = form.search.value.toLowerCase();
    getArtistIDFromName(searchInput);
    form.reset();
  };

  useEffect(() => {
    getArtistData();
    getAlbumData();
    getTopTracksData();
    getRelatedArtistsData();
  }, [artistID]);

  if (!(artistData && albumData && topTracksData && relatedArtistsData)) {
    return <div>loading</div>;
  }
  return (
    <div>
      <Header handleSearchInput={handleSearchInput} />
      <ArtistInfo artistData={artistData} />
      <AlbumsInfo albumData={albumData} topTracksData={topTracksData} />
      <RelatedArtist relatedArtistsData={relatedArtistsData} />
    </div>
  );
};

export default MainPage;
