import React from "react";
import "./BarChart.css";
import { useEffect, useState } from 'react'
import axios from 'axios';

const BarChart = () => {
  const [fetchCryptoList, setfetchCrypto] = useState([]);
  const fetchCrypto = () => {
    axios
      .get("https://api.coincap.io/v2/assets")
      .then(function (response) {
        const data = response.data.results;
        setfetchCrypto(data);
        console.log(response);
      }).catch(error => {
        console.error(error);
      });
  };

  useEffect(() => {
    fetchCrypto();
    //voor het testen
    const data = [10, 20, 15, 25];

    // Container voor de grafiek
    const chartContainer = document.getElementById("bar-chart");
    chartContainer.innerHTML = "";

    // maak een bar voor elk ding
    data.forEach((value) => {
      const bar = document.createElement("div");
      bar.className = "bar";
      bar.style.height = `${value * 5}px`;
      chartContainer.appendChild(bar);
    });
  }, []);



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


