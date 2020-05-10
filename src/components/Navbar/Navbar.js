import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  useEffect(() => {
    document.title = "Weather App";
  });
  return (
    <div className="navbar">
      <h3>My Weather Application</h3>
      <ul>
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/MyCities">
          <li>My Cities</li>
        </Link>
      </ul>
    </div>
  );
}
