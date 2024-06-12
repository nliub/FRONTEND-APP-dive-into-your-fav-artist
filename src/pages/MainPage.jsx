import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DumbComponent from "./DumbComponent";
import ArtistInfo from "../components/ArtistInfo/ArtistInfo";
import AlbumsInfo from "../components/AlbumsInfo/AlbumsInfo";
import Header from "../components/Header/Header";
import axios from "axios";

const MainPage = () => {
  const baseURL = "https://api.spotify.com/v1/";
  const access_token =
    "BQBHCqkStVtz9CIjSAvgZVWbrFbuW_M7E1jCsLrGrwg82Nhk-JuquuPr_U8d6xao4dirLtLGbdSO1RbpOWCn6ZByhTMcTpdsu5LL1TCQBhy_zLh_8m8";
  const { id: artistIDfromParams } = useParams();
  const [searchTerm, setSearchTerm] = useState("");
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
      {/* <DumbComponent
        artistData={artistData}
        albumData={albumData}
        topTracksData={topTracksData}
        relatedArtistsData={relatedArtistsData}
      /> */}
      <Header />
      <ArtistInfo artistData={artistData} />
      <AlbumsInfo albumData={albumData} topTracksData={topTracksData} />
    </div>
  );
};

export default MainPage;
