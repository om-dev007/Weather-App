import React from "react";
import SearchBar from "./SearchBar";
import WeatherCard from "./WeatherCard";

const WeatherAppUI = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "20px",
        background: "linear-gradient(to bottom, #4f8df5, #306ac9)",
        color: "white",
      }}
    >
      <SearchBar />
      <WeatherCard />
    </div>
  );
}

export default WeatherAppUI