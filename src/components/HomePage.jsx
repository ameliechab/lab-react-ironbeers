import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="HomePage">
      <h1>Home Page</h1>
      <Link to="/beers">
        <h2>Beers</h2>
      </Link>
      <Link to="/random-beer">
        <h2>Random Beer</h2>
      </Link>
      <Link to="/new-beer">
        <h2>New Beer</h2>
      </Link>
    </div>
  );
};

export default HomePage;
