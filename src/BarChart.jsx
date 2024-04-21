import React, { useState, useEffect } from "react";
import axios from "axios";
import { Bar } from "react-chartjs-2";
import useFetchCoins from "./fetch";
import { ArcElement } from "chart.js";
import Chart from "chart.js/auto";

function BarChart() {
  const [page, setPage] = useState(1);
  const coins = useFetchCoins(page);

  const chartData = {
    type: "bar",
    labels: coins.map((coin) => coin.name),
    datasets: [
      {
        label: "Price (USD)",
        data: coins.map((coin) => parseFloat(coin.priceUsd)),
        backgroundColor: [
          "rgba(255, 99, 132, 0.6)",
          "rgba(54, 162, 235, 0.6)",
          "rgba(255, 206, 86, 0.6)",
          "rgba(75, 192, 192, 0.6)",
          "rgba(153, 102, 255, 0.6)",
          "rgba(255, 159, 64, 0.6)",
          "rgba(255, 99, 132, 0.6)",
          "rgba(54, 162, 235, 0.6)",
          "rgba(255, 206, 86, 0.6)",
          "rgba(75, 192, 192, 0.6)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
        ],
      },
    ],
  };

  const handleNextClick = () => {
    setPage(page + 1);
  };

  const handleResetClick = () => {
    setPage(1);
  };

  return (
    <div className="bar-container">
      <div className="barchart-container">
        <h1>Cryptocurrency Price</h1>
        <Bar data={chartData} />
      </div>
      <div className="buttons2">
        <button onClick={handleNextClick}>Next</button>
        <button onClick={handleResetClick}>Reset</button>
      </div>
    </div>
  );
}

export default BarChart;
