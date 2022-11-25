import axios from "axios";
import React, { useEffect, useState } from "react";

const RandomBeer = () => {
  const [randomBeer, setRandomBeer] = useState(null);

  useEffect(() => {
    axios
      .get("https://ih-beers-api2.herokuapp.com/beers/random")
      .then(({ data }) => {
        setRandomBeer(data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  if (!randomBeer) {
    return <div className="loading">Loading....</div>;
  }

  return (
    <div>
      <h1>Random beer</h1>
      <img src={randomBeer.image_url} style={{ height: "100px" }} />
      <h3>{randomBeer.name}</h3>
      <h4>{randomBeer.tagline}</h4>
      <h4>{randomBeer.first_brewed}</h4>
      <h4>{randomBeer.attenuation_level}</h4>
      <h5>{randomBeer.description}</h5>
      <p>{randomBeer.contributed_by}</p>
    </div>
  );
};

export default RandomBeer;
