import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Main.css";

export default function Main() {
  const [maxTemp, setMaxTemp] = useState("");
  const [minTemp, setMinTemp] = useState("");
  const [temp, setTemp] = useState("");
  const [type, setType] = useState("");
  const [city, setCity] = useState("Kolkata");
  const [feels, setFeels] = useState("");
  const [humid, setHumid] = useState("");
  const [symbol, setSymbol] = useState("C");

  function setC(state) {
    setSymbol("C");
  }
  function setK(state) {
    setSymbol("K");
  }
  function setF(state) {
    setSymbol("F");
  }

  function newCity(city) {
    setCity(city);
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=52fc60ce71a5b4b724a42352692d2d24`
      )
      .then((res) => {
        setTemp(res.data.main.temp);
        setMaxTemp(res.data.main.temp_max);
        setMinTemp(res.data.main.temp_min);
        setType(res.data.weather[0].main);
        setFeels(res.data.main.feels_like);
        setHumid(res.data.main.humidity);
      });
  }
  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=kolkata&appid=52fc60ce71a5b4b724a42352692d2d24`
      )
      .then((res) => {
        setTemp(res.data.main.temp);
        setMaxTemp(res.data.main.temp_max);
        setMinTemp(res.data.main.temp_min);
        setType(res.data.weather[0].main);
        setFeels(res.data.main.feels_like);
        setHumid(res.data.main.humidity);
      });
  }, []);
  return (
    <>
      <form>
        <label>Select a city : </label>
        <select onChange={(e) => newCity(e.target.value)}>
          <option value="Kolkata">Kolkata</option>
          <option value="Mumbai">Mumbai</option>
          <option value="Bangalore">Bangalore</option>
          <option value="Chennai">Chennai</option>
          <option value="Ahmedabad">Ahmedabad</option>
          <option value="Hyderabad">Hyderabad</option>
          <option value="Pune">Pune</option>
        </select>
      </form>
      <div className="container">
        <div className="card">
          <h3 id="city">{city}</h3>
          <h1 id="temp">
            {(temp - 273).toFixed(2)} {symbol}
          </h1>
          <h5>
            <i>
              Feels like : {(feels - 273).toFixed(2)} {symbol}
            </i>
          </h5>
          <span id="type">{type}</span>
          <span>
            {(maxTemp - 273).toFixed(2)} {symbol} / {(minTemp - 273).toFixed(2)}{" "}
            {symbol}
          </span>
          <p>Humidity : {humid} &#37;</p>
          <div className="temptype">
            <span>Temperature Type :</span>
            <button id="c" className="tempbtn" onClick={setC}>
              &#8451;
            </button>
            <button id="k" className="tempbtn" onClick={setK}>
              K
            </button>
            <button id="f" className="tempbtn" onClick={setF}>
              &#8457;
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
