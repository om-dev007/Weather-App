import React, { useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import WeatherCard from "./WeatherCard";
import axios from "axios";

const WeatherAppUI = () => {
  const [userInput, setUserInput] = useState("New Delhi")
  const apikey = 'fc73db1a97cb4d63943123638252011'
  const [data, setData] = useState([])
  useEffect(() => {
    const getData = async () => {
      try {
        const rawData = await axios.get(`http://api.weatherapi.com/v1/current.json?key=${apikey}&q=${userInput}&aqi=yes`)
        setData(rawData['data'])
      } catch(err) {
        console.log(err);
      } finally {
        console.log(data);
      }
    }
    getData()
  }, [userInput])

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
      <SearchBar userInput={userInput} setUserInput={setUserInput} />
      <WeatherCard data={data} />
    </div>
  );
}

export default WeatherAppUI