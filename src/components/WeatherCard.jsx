import { useEffect } from "react";
import InfoBox from "./InfoBox";
import { useState } from "react";

const WeatherCard = ({ data }) => {
  const [date, setDate] = useState('')
  const [time, settime] = useState('')

  useEffect(() => {
    const interval = setInterval(() => {
      const date = new Date()
      setDate(date.toLocaleTimeString())
      settime(date.toLocaleDateString("en-US", { weekday: "long" }))
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  if (!data || !data.location || !data.current) {
    return (
      <div className='flex justify-center items-center h-48'>
        <div className='w-12 h-12 border-4 border-gray-300 border-t-gray-700 rounded-full animate-spin'></div>
      </div>
    )
  }

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
      <h1 style={{ fontSize: "32px", fontWeight: "bold" }}> {data.location.name} </h1>
      <p style={{ opacity: 0.8 }}> {time} {date} </p>

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
        <span style={{ fontSize: "60px", fontWeight: "600" }}> {data.current.temp_c}°C</span>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          marginTop: "30px",
        }}
      >
        <InfoBox label="Precipitation" value="55%" />
        <InfoBox label="Wind" value={data.current.wind_kph} />
        <InfoBox label="Humidity" value={data.current.humidity} />
      </div>
    </div>
  );
}

export default WeatherCard