import React from "react";
import { RandomFilm } from "./components/RandomFilm";
import { HomeMovies } from "./components/HomeMovies";
import { HomeSeries } from "./components/HomeSeries";
import { HomeMultfilms } from "./components/HomeMultfilms";

export const Home = () => {
  return (
    <div className="home">
      <RandomFilm />
      <HomeMovies />
      <HomeSeries />
      <HomeMultfilms />
    </div>
  );
};
