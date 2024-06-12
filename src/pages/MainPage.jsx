import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import DumbComponent from "./DumbComponent";
import ArtistInfo from "../components/ArtistInfo/ArtistInfo";
import AlbumsInfo from "../components/AlbumsInfo/AlbumsInfo";
import Header from "../components/Header/Header";
import axios from "axios";
import RelatedArtist from "../components/RelatedArtist/RelatedArtist";

const MainPage = () => {
  const navigate = useNavigate();
  const baseURL = "https://api.spotify.com/v1/";
  const access_token =
    "BQDsGaT6YCD1gAVgNdSxxc-a_85luUeIB_uaoMnoKHP1bFAU2VUxmgW81Ng7AMcvkmDDaUdP0_jJwhv1l6BggSWIqKTr1w1y2jk2A51wXQZLcfS9YUA";
  const { id: artistIDfromParams } = useParams();
  // const [searchTerm, setSearchTerm] = useState("");
  const [artistData, setArtistData] = useState(null);
  const [albumData, setAlbumData] = useState(null);
  const [topTracksData, setTopTracksData] = useState(null);
  const [relatedArtistsData, setRelatedArtistsData] = useState(null);

  let artistID = artistIDfromParams
    ? artistIDfromParams
    : "3TVXtAsR1Inumwj472S9r4";
  const getArtistData = async () => {
    try {
      const url = `${baseURL}artists/${artistID}`;
      const response = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      });
      setArtistData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getAlbumData = async () => {
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
    try {
      const url = `${baseURL}artists/${artistID}/top-tracks`;

      const response = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      });
      setTopTracksData(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  const getRelatedArtistsData = async () => {
    try {
      const url = `${baseURL}artists/${artistID}/related-artists`;

      const response = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      });
      setRelatedArtistsData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getArtistIDFromName = async (artistName) => {
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
    const searchInput = form.search.value;
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
