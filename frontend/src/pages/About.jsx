import React from "react";
import Layout from "../components/Layout";
import "./About.css";

function About() {
  return (
    <Layout>
      <div className="about-container">
        {/* Header Section */}
        <header className="about-header">
          <h1>Delhi Metro</h1>
          <strong><p className="about-subtitle">Calculate Fare  -  Calculate Time  -  Find Shortest Path</p></strong>
        </header>

        {/* App Info Section */}
        <section className="about-info">
          <h2>About the App</h2>
          <p>
            This app is designed purely for educational purposes, helping users
            calculate the fare and travel time between two stations in the Delhi
            Metro system. It also provides the shortest path between the selected
            source and destination using the Dijkstra Algorithm, an efficient way
            to find the shortest paths in a graph.
          </p>
        </section>

        {/* Prerequisites Section */}
        <section className="about-prerequisites">
          <h2>Prerequisites</h2>
          <div className="prerequisites-list">
            <div className="prerequisites-item">Python</div>
            <div className="prerequisites-item">JS</div>
            <div className="prerequisites-item">Data Structure</div>
          </div>
        </section>

        {/* Technologies Section */}
        <section className="about-technologies">
          <h2>Technologies Used</h2>
          <div className="tech-list">
            <div className="tech-item">FastAPI</div>
            <div className="tech-item">React</div>
            <div className="tech-item">Dijkstra Algorithm</div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="about-contact">
          <div className="social-icons">
            <a href="https://www.linkedin.com/in/dpshivani/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://github.com/devpriyaish" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://www.youtube.com/@DevByteswithDevpriya-j7h" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-youtube"></i>
            </a>
          </div>
        </section>
      </div>
    </Layout>
  );
}

export default About;
