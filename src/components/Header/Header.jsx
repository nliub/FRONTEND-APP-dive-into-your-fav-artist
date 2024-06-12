import { useState } from "react";
import "./Header.scss";

function Header() {
  const [artist, setArtist] = useState([]);

  const handleChangeSearch = (e) => {
    setArtist(e.target.value);
  };
  return (
    <>
      <h1> Enter the name of an artist </h1>
      <input
        type="search"
        name="search"
        className="header__search"
        placeholder="Artist Name"
        onChange={handleChangeSearch}
      />
    </>
  );
}

export default Header;
