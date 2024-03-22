import React from "react";
import "./BarChart.css";
import { useEffect } from 'react'


const BarChart = () => {

  useEffect(() => {
    //voor het testen
    const data = [10, 20, 15, 25];

    // Container voor de grafiek
    const chartContainer = document.getElementById("bar-chart");
    chartContainer.innerHTML = "";

    // maak een bar voor elk ding
    data.forEach((value, index) => {
      const bar = document.createElement("div");
      bar.className = "bar";
      bar.style.height = `${value * 5}px`;
      bar.style.backgroundColor = getRandomColor();
      chartContainer.appendChild(bar);
    });
  }, []);

  //maak random kleur voor de grafiek
  const getRandomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  return (
    <>
      <div className="data-container">
        <div className="data-box">
          <div id="bar-chart"></div>
        </div>
      </div>
    </>
  );
};

export default BarChart;
