import React, { useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import WeatherCard from "./WeatherCard";
import axios from "axios";

const WeatherAppUI = () => {
  const [userInput, setUserInput] = useState("New Delhi");
  const apikey = "fc73db1a97cb4d63943123638252011";
  const [data, setData] = useState("");
  const [loading, setLoading] = useState(false);     
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);        
        setError(null);

        const rawData = await axios.get(
          `https://api.weatherapi.com/v1/current.json?key=${apikey}&q=${userInput}&aqi=yes`
        );

        setData(rawData.data);
      } catch (err) {
        if(!userInput) {
          setError("Please Enter City Name..")
        }
        else{
          setError("Failed to fetch weather data");
        }
             
        console.log(err);
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, [userInput]);

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

      {loading &&
        <div className='flex justify-center items-center h-48'>
          <div className='w-12 h-12 border-4 border-gray-300 border-t-gray-700 rounded-full animate-spin'></div>
        </div>
      }

      {error && <p className="mt-5 text-2xl font-light" style={{ color: "red" }}>{error}</p>}

      {!loading && !error && <WeatherCard data={data} />}
    </div>
  );
};

export default WeatherAppUI;
