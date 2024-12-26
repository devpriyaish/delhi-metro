import React from "react";
import Layout from "../components/Layout";
import "./About.css"; // Assuming you're keeping About-specific CSS

function About() {
  return (
    <Layout>
      <div className="about-container">
        <h1 className="about-title">Delhi Metro Fare Calculator</h1>
        <p className="about-intro">
          Imagine navigating the bustling labyrinth of the Delhi Metro with just a few clicks. The Fare Calculator app is your personal travel assistant, simplifying fare estimation while showcasing the magic of modern technology. Designed using cutting-edge tools like React and FastAPI, this web application bridges the gap between complex algorithms and everyday convenience.
        </p>
        <div className="about-highlight-box">
          <p>Prerequisites: JavaScript, Python, Dijkstra algorithm</p>
          <p>Technologies Used: React + FastAPI</p>
        </div>
        <h2 className="about-heading">More Than Just an App</h2>
        <p className="about-paragraph">
          This project isn’t just about calculating fares; it’s a testament to what’s possible when theory meets practice. Whether you're a student crafting an impressive final-year project or a developer adding finesse to your portfolio, the Fare Calculator app exemplifies innovation and problem-solving at its best.
        </p>
        <p className="about-paragraph">
          It’s an educational playground, demonstrating principles of graph theory, software architecture, and user-centric design. Plus, it’s a real-world solution that makes travel easier for Delhi’s commuters—a perfect blend of learning and impact.
        </p>
        <h2 className="about-heading">Your Journey Starts Here</h2>
        <p className="about-conclusion">
          The Fare Calculator app is more than a tool; it’s a gateway to understanding the power of technology in everyday life. It’s where ideas turn into applications, where learning meets doing, and where you take center stage as a creator of solutions. Ready to embark on this journey? Let’s get started!
        </p>
      </div>
    </Layout>
  );
}

export default About;
