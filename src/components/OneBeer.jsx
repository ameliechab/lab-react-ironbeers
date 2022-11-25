import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const OneBeer = ({ beers }) => {
  const params = useParams();
  const navigate = useNavigate();
  const id = params.beerId;

  const oneBeer = beers.find((beer) => beer._id === id);
  console.log(oneBeer);

  return (
    <>
      <img src={oneBeer.image_url} style={{ height: "100px" }} />
      <h3>{oneBeer.name}</h3>
      <h4>{oneBeer.tagline}</h4>
      <h4>{oneBeer.first_brewed}</h4>
      <h4>{oneBeer.attenuation_level}</h4>
      <h5>{oneBeer.description}</h5>
      <p>{oneBeer.contributed_by}</p>
    </>
  );
};

export default OneBeer;
