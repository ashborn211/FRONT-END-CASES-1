import React, { useState, useEffect } from "react";
import axios from "axios";
import { Doughnut } from "react-chartjs-2";
import { ArcElement } from "chart.js";
import Chart from 'chart.js/auto'

function CircleChart() {
  const [coins, setCoins] = useState([]);
  const [limit, setLimit] = useState(10);

  useEffect(() => {
    const fetchCoins = async () => {
      try {
        const response = await axios.get(
          `https://api.coincap.io/v2/assets?limit=${limit}`
        );
        console.log(response.data.data);
        setCoins(response.data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchCoins();
  }, [limit]);

  const chartData = {
    labels: coins.map((coin) => coin.name),
    datasets: [
      {
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

  return (
    <div className="chart-container">
      <Doughnut data={chartData} />
    </div>
  );
}

export default CircleChart;
