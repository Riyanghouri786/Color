import React, { useState } from "react";
import "../Color/Color.css";

const Color = () => {
  const [data, setData] = useState([
    { name: "#0008ff", colorCode: "#0008ff" },
    { name: "#37ff00", colorCode: "#37ff00" },
    { name: "#ff0000", colorCode: "#ff0000" },
    { name: "#00e1ff", colorCode: "#00e1ff" },
    { name: "#ffbb00", colorCode: "#ffbb00" },
    { name: "#ff00bb", colorCode: "#ff00bb" },
    { name: "#8c00ff", colorCode: "#8c00ff" },
    { name: "#000000", colorCode: "#000000" },
    { name: "#5d8dc0", colorCode: "#5d8dc0" },
  ]);

  const [color, setColor] = useState("#000000");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newColor = {
      name: color,
      colorCode: color,
    };

    setData([...data, newColor]);
  };

  return (
    <div
      style={{
        backgroundColor: "rgb(216, 216, 216)",
        width: "100%",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        gap: "20px",
      }}
    >
      <div className="containor">
        {data.map((item, index) => {
          return (
            <div key={index} className="cover">
              <div
                className="box"
                style={{ backgroundColor: item.colorCode }}
              ></div>
              <h3>{item.name}</h3>
            </div>
          );
        })}
      </div>
      <form onSubmit={handleSubmit} className="form">
        <input
          type="color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />
        <button style={{ color: color }} type="submit">
          Add Color
        </button>
      </form>
    </div>
  );
};

export default Color;
