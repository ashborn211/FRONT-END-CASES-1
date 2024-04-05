import React from "react";
import "./BarChart.css";
import { useEffect, useState } from 'react'
import axios from 'axios';

const BarChart = () => {
  const [fetchCryptoList, setfetchCrypto] = useState([]);
  const [barHeight, setBarHeight] = useState(0); // State variable to store bar height
  const fetchCrypto = () => {
    axios
      .get("https://api.coincap.io/v2/assets")
      .then(function (response) {
        const data = response.data.data.priceUsd;
        setBarHeight(response.data.data[0].priceUsd);
        setfetchCrypto(data);
        console.log(response);
      }).catch(error => {
        console.error(error);
      });
  };
  useEffect(() => {
    fetchCrypto();

    //voor het testen
    const bars = [1, 2, 3, 4, 5, 6, 7, 8];

    // Container voor de grafiek
    const chartContainer = document.getElementById("bar-chart");
    chartContainer.innerHTML = "";

    // maak een bar voor elk ding
    bars.forEach(() => {
      const bar = document.createElement("div");
      bar.className = "bar";
      bar.style.height = `${barHeight / 1000}%`; // Set the bar height dynamically
      chartContainer.appendChild(bar);
    });
  }, [barHeight]); // Include barHeight in the dependency array to re-run the effect when it changes

  return (
    <>
      <div className="data-container">
        <div id="bar-chart" className="data-box">

        </div>
      </div>
    </>
  );
};


export default BarChart;


