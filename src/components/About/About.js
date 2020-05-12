import React, { useEffect } from "react";

export default function About() {
  useEffect(() => {
    document.title = "About";
  }, []);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        margin: "1%",
      }}
    >
      <br></br>
      <br></br>
      <h3 style={{ textAlign: "center" }}>
        Designed and Developed with &#10084; by{" "}
        <a
          style={{ color: "blue", textDecoration: "underline" }}
          href="https://github.com/rishavjaiss/weather-app"
          target="blank"
        >
          Rishav
        </a>
      </h3>
      <img
        style={{ borderRadius: "50%", width: "250px", margin: "auto" }}
        src="https://scontent.fccu3-1.fna.fbcdn.net/v/t1.0-9/18527848_1325000874252607_3977818397876930436_n.jpg?_nc_cat=107&_nc_sid=7aed08&_nc_oc=AQlAw4HNTRIMsz-o_699tFESdFK0PsvBxUJ-C6tfNTHOUQSc092WUeeZZOy9hTwaYvw&_nc_ht=scontent.fccu3-1.fna&oh=db49e146861ad0d89863f9bd99db3301&oe=5EDF13AC"
        alt="Profile Pic"
      ></img>
    </div>
  );
}
