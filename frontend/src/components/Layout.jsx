import React from "react";
import { Link } from "react-router-dom";

function Layout({ children }) {
  return (
    <div>
      <header className="bg-blue-600 text-white p-4">
        <nav>
          <Link to="/" className="mr-4">Home</Link>
          <Link to="/map">Map</Link>
        </nav>
      </header>
      <main className="p-4">{children}</main>
      <footer className="bg-gray-800 text-white text-center p-2">
        © 2024 Delhi Metro Map
      </footer>
    </div>
  );
}

export default Layout;
