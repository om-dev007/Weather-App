import React from "react";

const InfoBox = ({ label, value }) =>  {
  return (
    <div style={{
        textAlign: "center" }}>
      <p style={{ fontSize: "14px" }}>{label}</p>
      <p style={{ fontSize: "22px", fontWeight: "600" }}>{value}</p>
    </div>
  );
}

export default InfoBox