import React, { useState, useEffect } from "react";
import axios from "axios";
import "./MyCities.css";

export default function MyCities() {
  const [myCity, setMyCity] = useState([]);

  const createMyCitiesList = () => {
    const myCityArray = [];
    const myTempArray = [];
    const myCityID = [];
    for (let key in myCity) {
      const city = myCity[key].City;
      const temp = myCity[key].Temperature;
      const id = key;
      myCityArray.push(city);
      myTempArray.push(temp);
      myCityID.push(id);
    }
    const cityList = myCityArray.map((city, index) => (
      <div className="city" id={myCityID[index]} key={index}>
        <span>{city}</span>
        <span>{myTempArray[index]}</span>
        <button id="removebtn" onClick={(e) => handleRemove(e)}>
          Remove
        </button>
      </div>
    ));
    return cityList;
  };

  const handleRemove = (e) => {
    let id = e.target.parentNode.id;
    axios.delete(`https://weather-app-64739.firebaseio.com/${id}.json`);
    e.currentTarget.parentNode.remove();
  };

  useEffect(() => {
    document.title = "My Citites";
    axios
      .get("https://weather-app-64739.firebaseio.com/.json")
      .then((res) => setMyCity(res.data));
  }, []);

  return (
    <>
      <h2>My Cities</h2>
      <div className="box">
        <div className="cityContainer">{createMyCitiesList()}</div>
      </div>
    </>
  );
}
