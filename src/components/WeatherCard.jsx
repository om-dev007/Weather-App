import React, { useEffect, useState } from "react";
import InfoBox from "./InfoBox";

const WeatherCard = () => {
    const [date, setDate] = useState(() => new Date())
    useEffect(() => {
        if(date) {
            setDate(date.getDate())
        }     
        setDate(date.getTime())

        return () => {
            setDate(date.getFullYear())
        }
    }, [])
  return (
    <div
      style={{
        marginTop: "30px",
        width: "100%",
        maxWidth: "380px",
        background: "rgba(255,255,255,0.15)",
        padding: "25px",
        borderRadius: "25px",
        textAlign: "center",
        backdropFilter: "blur(8px)",
      }}
    >
      <h1 style={{ fontSize: "32px", fontWeight: "bold" }}>City Name</h1>
      <p style={{ opacity: 0.8 }}> {date.getDate()} </p>

      {/* Weather Icon + Temperature */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "20px",
          marginTop: "20px",
        }}
      >
        <span style={{ fontSize: "60px" }}>⛅</span>
        <span style={{ fontSize: "60px", fontWeight: "600" }}>21°C</span>
      </div>

      {/* 3 Info Boxes */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          marginTop: "30px",
        }}
      >
        <InfoBox label="Precipitation" value="55%" />
        <InfoBox label="Wind" value="18 km/h" />
        <InfoBox label="Humidity" value="72%" />
      </div>
    </div>
  );
}

export default WeatherCard