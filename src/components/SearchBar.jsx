const SearchBar = ({userInput, setUserInput}) => {

  return (
    <div
      style={{
        width: "100%",
        maxWidth: "380px",
        display: "flex",
        alignItems: "center",
        gap: "10px",
        background: "rgba(255,255,255,0.2)",
        padding: "12px 16px",
        borderRadius: "20px",
        backdropFilter: "blur(6px)",
        marginTop: "20px",
      }}
    >
      <span style={{ fontSize: "18px" }}>🔍</span>
      <input
        onChange={(e) => {
           setUserInput(e.target.value)
        }}
        type="text"
        value={userInput}
        placeholder="Search for a city..."
        style={{
          flex: 1,
          background: "transparent",
          border: "none",
          outline: "none",
          color: "white",
          fontSize: "16px",
        }}
      />
    </div>
  );
}

export default SearchBar