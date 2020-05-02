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
  const [symbol, setSymbol] = useState("°C");

  function getTemp(id) {
    if (id === "c") {
      setSymbol("°C");
    }
    if (id === "k") {
      setSymbol("K");
    }
    if (id === "f") {
      setSymbol("°F");
    }
  }

  function newCity(city) {
    setCity(city);
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=52fc60ce71a5b4b724a42352692d2d24`
      )
      .then((res) => {
        setTemp((res.data.main.temp - 273).toFixed(0));
        setMaxTemp((res.data.main.temp_max - 273).toFixed(0));
        setMinTemp((res.data.main.temp_min - 273).toFixed(0));
        setType(res.data.weather[0].main);
        setFeels((res.data.main.feels_like - 273).toFixed(0));
        setHumid(res.data.main.humidity);
      });
  }
  useEffect(() => {
    newCity(city);
  }, [city]);

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
            {temp}
            {symbol}
          </h1>
          <h5>
            <i>
              Feels like : {feels}
              {symbol}
            </i>
          </h5>
          <span id="type">{type}</span>
          <span>
            {maxTemp}
            {symbol} / {minTemp}
            {symbol}
          </span>
          <p>Humidity : {humid} &#37;</p>
          <div className="temptype">
            <span>Temperature Type :</span>
            <button
              id="c"
              className="tempbtn"
              onClick={(e) => getTemp(e.target.id)}
            >
              &#8451;
            </button>
            <button
              id="k"
              className="tempbtn"
              onClick={(e) => getTemp(e.target.id)}
            >
              K
            </button>
            <button
              id="f"
              className="tempbtn"
              onClick={(e) => getTemp(e.target.id)}
            >
              &#8457;
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
