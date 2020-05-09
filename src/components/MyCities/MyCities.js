import React, { useState, useEffect } from "react";
import axios from "axios";
import "./MyCities.css";

export default function MyCities() {
  const [myCity, setMyCity] = useState([]);

  const createMyCitiesList = () => {
    const myCityArray = [];
    for (let key in myCity) {
      const city = myCity[key].city;
      myCityArray.push(city);
    }
    const cityList = myCityArray.map((city) => (
      <div className="cities">{city}</div>
    ));
    return cityList;
  };

  const createMyTempList = () => {
    const myTempArray = [];
    for (let key in myCity) {
      const temp = myCity[key].temp;
      myTempArray.push(temp);
    }
    const tempList = myTempArray.map((temp) => (
      <div className="temp">{temp}</div>
    ));
    return tempList;
  };

  useEffect(() => {
    axios
      .get("https://weather-app-64739.firebaseio.com/.json")
      .then((res) => setMyCity(res.data));
  }, []);

  return (
    <div className="box">
      <div className="cityName">{createMyCitiesList()}</div>
      <div className="cityTemp">{createMyTempList()}</div>
    </div>
  );
}
