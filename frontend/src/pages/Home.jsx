import React, { useState } from "react";
import Select from "react-select";
import Layout from "../components/Layout";
import "./Home.css";

function Home() {
  const [source, setSource] = useState(null);
  const [destination, setDestination] = useState(null);

  const options = [
    { value: "station1", label: "Station 1" },
    { value: "station2", label: "Station 2" },
    { value: "station3", label: "Station 3" },
    // Add more options here
  ];

  const handleCalculateFare = () => {
    if (source && destination) {
      alert(`Calculating fare from ${source.label} to ${destination.label}`);
    } else {
      alert("Please select both source and destination.");
    }
  };

  const customStyles = {
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isSelected ? '#1a1a1a' : state.isFocused ? 'lightgrey' : provided.backgroundColor, // Dark grey when selected, light grey on hover
      color: state.isSelected ? 'white' : '#1a1a1a', // Text color on select
      padding: 10,
    }),
    control: (provided) => ({
      ...provided,
      width: '100%',
      maxWidth: '400px',
    }),
    menu: (provided) => ({
      ...provided,
      maxWidth: '400px',
    }),
  };

  return (
    <Layout>
      <h1>Fare Calculator - Delhi Metro</h1>
      <div className="fare-calculator">
        <Select
          placeholder="Select Source"
          options={options}
          value={source}
          onChange={setSource}
          className="select-dropdown"
          styles={customStyles}
        />
        <Select
          placeholder="Select Destination"
          options={options}
          value={destination}
          onChange={setDestination}
          className="select-dropdown"
          styles={customStyles}
        />
        <button onClick={handleCalculateFare} className="calculate-button">
          Calculate Fare
        </button>
      </div>
    </Layout>
  );
}

export default Home;
