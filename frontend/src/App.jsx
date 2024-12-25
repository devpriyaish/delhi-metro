import React from "react";
import { BrowserRouter as Router, Route, Routes, Link, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Membership from "./pages/Membership";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="top-bar">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/about" className="nav-link">About</Link>
        <MembershipButton />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/membership" element={<Membership />} />
      </Routes>
    </Router>
  );
}

function MembershipButton() {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate("/membership")}
      className="member-button"
    >
      Become a Member
    </button>
  );
}

export default App;
