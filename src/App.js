import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import Header from "./components/Header";
import ListBeers from "./components/ListBeers";
import OneBeer from "./components/OneBeer";
import RandomBeer from "./components/RandomBeer";
import NewBeer from "./components/NewBeer";
import React, { useEffect, useState } from "react";

function App() {
  const [beers, setBeers] = useState([]);
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route element={<Header />}>
          <Route
            path="/beers"
            element={<ListBeers beers={beers} setBeers={setBeers} />}
          />
          <Route path="/beers/:beerId" element={<OneBeer beers={beers} />} />
          <Route path="/random-beer" element={<RandomBeer />} />
          <Route path="/new-beer" element={<NewBeer />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
