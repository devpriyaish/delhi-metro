import React from "react";
import { Link } from "react-router-dom";
import "./Layout.css"; // Import the CSS file

function Layout({ children }) {
  return (
    <div>
      <header className="header">
      </header>
      <main className="main-content">
        {children}
      </main>
      {/* <footer className="footer">
        © 2024 Delhi Metro Map
      </footer> */}
    </div>
  );
}

export default Layout;
