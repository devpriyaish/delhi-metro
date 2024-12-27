import React, { useState } from "react";
import Select from "react-select";
import Layout from "../components/Layout";
import "./Home.css"; // Ensure this includes styles for the graph
import options from "../assets/data/stations.json";
import axios from "axios";

const generateLabelWithDots = (lines) => {
  const colorMap = {
    Red: "#f00",
    Yellow: "#ff0",
    Blue: "#00f",
    Green: "#0f0",
    Violet: "#8a2be2",
    Pink: "#ffc0cb",
    Magenta: "#f0f",
    Grey: "#808080",
    Orange: "#ffa500",
    Silver: "#c0c0c0",
  };

  return lines
    .map((line) => `<span style="color: ${colorMap[line]}; font-size: 20px; font-weight: bold;">/</span>`)
    .join(" ");
};

function Home() {
  const [source, setSource] = useState(null);
  const [destination, setDestination] = useState(null);
  const [fare, setFare] = useState(null);
  const [path, setPath] = useState([]);
  const [time, setTime] = useState("");

  const handleCalculateFare = async () => {
    if (source && destination) {
      try {
        const response = await axios.post("http://localhost:8000/api/shortest-path", {
          source: source.value,
          destination: destination.value,
        });

        setFare(response.data.fare);
        setPath(response.data.path);
        setTime(response.data.time);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching fare data:", error);
        alert("There was an error calculating the fare. Please try again.");
      }
    } else {
      alert("Please select both source and destination.");
    }
  };

  const renderGraph = () => (
    <div className="vertical-graph">
      {path.map((station, index) => (
        <div key={index} className="node-container">
          <div className="node"></div>
          <div className="station-name">{station}</div>
        </div>
      ))}
    </div>
  );

  const customStyles = {
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isSelected
        ? "#1a1a1a"
        : state.isFocused
        ? "lightgrey"
        : provided.backgroundColor,
      color: state.isSelected ? "white" : "#1a1a1a",
      padding: 10,
      textAlign: "left",
    }),
    control: (provided) => ({
      ...provided,
      width: "100%",
      maxWidth: "400px",
      textAlign: "left",
    }),
    placeholder: (provided) => ({
      ...provided,
      textAlign: "left",
    }),
    singleValue: (provided) => ({
      ...provided,
      textAlign: "left",
    }),
    menu: (provided) => ({
      ...provided,
      maxWidth: "400px",
    }),
  };

  const formattedOptions = options.map((station) => ({
    ...station,
    label: <div dangerouslySetInnerHTML={{ __html: `${generateLabelWithDots(station.line)} ${station.label}` }} />,
  }));

  return (
    <Layout>
      <h1>Fare Calculator</h1>
      <div className="fare-calculator">
        <Select
          placeholder="Select Source"
          options={formattedOptions}
          value={source}
          onChange={setSource}
          className="select-dropdown"
          styles={customStyles}
        />
        <Select
          placeholder="Select Destination"
          options={formattedOptions}
          value={destination}
          onChange={setDestination}
          className="select-dropdown"
          styles={customStyles}
        />
        <button onClick={handleCalculateFare} className="calculate-button">
          Calculate Fare
        </button>
      </div>

      {fare && (
        <div className="fare-details">
          <p><strong>Fare:</strong> ₹{fare}</p>
          {time && <p><strong>Time:</strong> {time}</p>}
          {path && path.length > 0 && (
            <>
              <h2>Shortest Path</h2>
              {renderGraph()}
            </>
          )}
        </div>
      )}
    </Layout>
  );
}

export default Home;
