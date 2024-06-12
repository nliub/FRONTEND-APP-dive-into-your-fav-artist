import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import DumbComponent from "./DumbComponent";
import axios from "axios";

const MainPage = () => {
  const navigate = useNavigate();
  const baseURL = "https://api.spotify.com/v1/";
  const access_token =
    "BQCMZNja6XNGV7vqRsHycQTQgnYFRBTRXYhAp3ynS279sXDDqlidH1p5ed0172X5SULI25bfzjhfp7SY3T_tGzxQFCn8h9cOHXCHXpRpyFi6TK6jfyc";
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

  const handleSearchInput = (event) => {
    // setSearchTerm(event.target.value);
    const searchInput = event.target.value;
    getArtistIDFromName(searchInput);
  };

  const getAlbumData = async () => {
    try {
      const url = `${baseURL}artists/${artistID}/albums`;

      const response = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      });
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
      navigate(`/${linkedEndpointID}`);
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
      <DumbComponent
        artistData={artistData}
        albumData={albumData}
        topTracksData={topTracksData}
        relatedArtistsData={relatedArtistsData}
      />
    </div>
  );
};

export default MainPage;
