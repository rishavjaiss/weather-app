import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Main.css";

export default function Main() {
  const API_KEY = "52fc60ce71a5b4b724a42352692d2d24";
  const [maxTemp, setMaxTemp] = useState("");
  const [minTemp, setMinTemp] = useState("");
  const [temp, setTemp] = useState("");
  const [type, setType] = useState("");
  const [city, setCity] = useState("Kolkata");
  const [feels, setFeels] = useState("");
  const [humid, setHumid] = useState("");
  const [symbol, setSymbol] = useState("°C");

  const getTemp = (symbol) => {
    var t = 0;
    switch (symbol) {
      case "°C":
        t = (temp - 273).toFixed(0);
        break;
      case "K":
        t = temp.toFixed(0);
        break;
      case "°F":
        t = ((temp - 273) * (9 / 5) + 32).toFixed(0);
        break;
      default:
    }
    return t;
  };
  const getMinTemp = (symbol) => {
    var min = 0;
    switch (symbol) {
      case "°C":
        min = (minTemp - 273).toFixed(0);
        break;
      case "K":
        min = minTemp.toFixed(0);
        break;
      case "°F":
        min = ((minTemp - 273) * (9 / 5) + 32).toFixed(0);
        break;
      default:
    }
    return min;
  };
  const getMaxTemp = (symbol) => {
    var max;
    switch (symbol) {
      case "°C":
        max = (maxTemp - 273).toFixed(0);
        break;
      case "K":
        max = maxTemp.toFixed(0);
        break;
      case "°F":
        max = ((maxTemp - 273) * (9 / 5) + 32).toFixed(0);
        break;
      default:
    }
    return max;
  };
  const getFeelsTemp = (symbol) => {
    var f;
    switch (symbol) {
      case "°C":
        f = (feels - 273).toFixed(0);
        break;
      case "K":
        f = feels.toFixed(0);
        break;
      case "°F":
        f = ((feels - 273) * (9 / 5) + 32).toFixed(0);
        break;
      default:
    }
    return f;
  };

  function newCity(city) {
    setCity(city);
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
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
        `https://api.openweathermap.org/data/2.5/weather?q=kolkata&appid=${API_KEY}`
      )
      .then((res) => {
        setTemp(res.data.main.temp);
        setMaxTemp(res.data.main.temp_max);
        setMinTemp(res.data.main.temp_min);
        setType(res.data.weather[0].main);
        setFeels(res.data.main.feels_like);
        setHumid(res.data.main.humidity);
      });
    console.log("HELLO CURIOUS LAD ;)");
    document.title = "Weather App";
  }, []);

  function handleSubmit(e) {
    let t = (temp - 273).toFixed(0);
    axios
      .post(`https://weather-app-64739.firebaseio.com/.json`, {
        City: city,
        Temperature: `${t}°C`,
      })
      .then(alert(`${city} has been added successfully!`));
  }

  return (
    <>
      <form>
        <label>Select a city : </label>
        <select id="choose" onChange={(e) => newCity(e.target.value)}>
          <option value="Kolkata">Kolkata</option>
          <option value="New Delhi">New Delhi</option>
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
            {getTemp(symbol)}
            {symbol}
          </h1>
          <h5>
            <i>
              Feels like : {getFeelsTemp(symbol)}
              {symbol}
            </i>
          </h5>
          <span id="type">{type}</span>
          <span>
            {getMaxTemp(symbol)}
            {symbol} / {getMinTemp(symbol)}
            {symbol}
          </span>
          <p>Humidity : {humid} &#37;</p>
          <div className="temptype">
            <span>Temperature Type :</span>
            <button id="c" className="tempbtn" onClick={() => setSymbol("°C")}>
              &#8451;
            </button>
            <button id="k" className="tempbtn" onClick={() => setSymbol("K")}>
              K
            </button>
            <button id="f" className="tempbtn" onClick={() => setSymbol("°F")}>
              &#8457;
            </button>
          </div>
        </div>
      </div>
      <div className="addCity">
        <button className="addbtn" onClick={(e) => handleSubmit(e)}>
          Add {city} to My Cities
        </button>
      </div>
    </>
  );
}
