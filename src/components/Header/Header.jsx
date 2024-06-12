import { useState } from "react";
import "./Header.scss";

function Header({ handleSearchInput }) {
  // const [artist, setArtist] = useState([]);

  return (
    <>
      <header className="header">
        <h1 className="header__title"> Enter the name of an artist </h1>
        <form onSubmit={handleSearchInput} className="header__form">
          <input
            type="search"
            name="search"
            className="header__search"
            placeholder="Artist Name"
          />
          <button className="header__button">Enter</button>
        </form>
      </header>
    </>
  );
}

export default Header;
