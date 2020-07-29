import React from "react";
import { Link } from "react-router-dom";

export default () => {
  return (
    <header>
      <ul>
        <li>
          <Link to="/">HOME</Link>
        </li>
        <li>
          <Link to="/movie">MOVIE</Link>
        </li>
        <li>
          <Link to="/tv">TV</Link>
        </li>
        <li>
          <Link to="/search">SEARCH</Link>
        </li>
      </ul>
    </header>
  );
};
