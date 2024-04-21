import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import { useFetchCryptoData, useFetchCryptoList } from "./fetch";

function LineChart() {
  const [limit, setLimit] = useState(100);
  const cryptoList = useFetchCryptoList(limit);

  const [selectedCrypto, setSelectedCrypto] = useState("");
  const data = useFetchCryptoData(selectedCrypto);

  const nextpage = () => {
    setLimit(limit + 100);
  };

  const handleCryptoChange = (e) => {
    setSelectedCrypto(e.target.value);
  };

  const formatDate = (timestamp) => {
    const date = new Date(timestamp * 1000); // convert timestamp to milliseconds
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    return `${month}/${day}/${year}`;
  };

  const chartData = {
    labels: data?.map((entry) => formatDate(entry.time)),
    datasets: [
      {
        label: `${selectedCrypto} Price (USD)`,
        data: data?.map((entry) => parseFloat(entry.priceUsd)),
        fill: false,
        borderColor: "rgb(75, 192, 192)",
        tension: 0.1,
      },
    ],
  };

  const options = {
    scales: {
      x: {
        title: {
          display: true,
          text: "Date",
        },
      },
      y: {
        title: {
          display: true,
          text: "Price (USD)",
        },
      },
    },
  };

  return (
    <div className="line-container">
    <div>
      <h1>Cryptocurrency Price History</h1>
      <label htmlFor="crypto-select">Select Cryptocurrency: </label>
      <select
        id="crypto-select"
        value={selectedCrypto}
        onChange={handleCryptoChange}
      >
        <option value="">Select a cryptocurrency</option>
        {cryptoList?.map((crypto) => (
          <option key={crypto.id} value={crypto.id}>
            {crypto.name}
          </option>
        ))}
      </select>
    </div>
    <div className="linechart-container">
      {selectedCrypto && <Line data={chartData} options={options} />}
    </div>
    <div className="buttons">
      <button onClick={nextpage}>Load More</button>
    </div>
  </div>
  );
}

export default LineChart;