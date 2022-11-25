import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ListBeers = ({ beers, setBeers }) => {
  useEffect(() => {
    axios
      .get("https://ih-beers-api2.herokuapp.com/beers")
      .then(({ data }) => {
        setBeers(data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  if (!beers) {
    return <div className="loading">Loading....</div>;
  }

  return (
    <div>
      <h1>Beers list</h1>

      <ul>
        {beers.map((beer) => {
          return (
            <li>
              <img src={beer.image_url} style={{ height: "100px" }} />
              <h3>{beer.name}</h3>
              <h4>{beer.tagline}</h4>
              <h4>Created by: {beer.contributed_by}</h4>
              <Link to={`/beers/${beer._id}`}>Details</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ListBeers;
