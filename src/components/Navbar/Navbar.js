import React, { useEffect } from "react";
import "./Navbar.css";

export default function Navbar() {
  useEffect(() => {
    document.title = "Weather App";
  });
  return <div className="navbar">My Weather Application</div>;
}
