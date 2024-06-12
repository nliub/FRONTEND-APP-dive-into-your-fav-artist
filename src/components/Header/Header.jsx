import { useState } from "react";
import "./Header.scss";

function Header({ handleSearchInput }) {
  // const [artist, setArtist] = useState([]);

  return (
    <>
      <h1> Enter the name of an artist </h1>
      <form onSubmit={handleSearchInput}>
        <input
          type="search"
          name="search"
          className="header__search"
          placeholder="Artist Name"
        />
        <button>Enter</button>
      </form>
    </>
  );
}

export default Header;
