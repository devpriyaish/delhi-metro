import React from "react";
import Layout from "../components/Layout";
import "./About.css"; // Assuming you're keeping About-specific CSS

function About() {
  return (
    <Layout>
      <div className="about-content">
        <h1>Delhi Metro</h1>
        <img
          src="/delhi-metro-map.svg" // Referencing the image from the public folder
          alt="Delhi Metro Map"
          className="about-image"
        />
      </div>
    </Layout>
  );
}

export default About;
