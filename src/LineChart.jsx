import React, { useState, useEffect } from "react";
import axios from "axios";
import { Line } from "react-chartjs-2";

function LineChart() {
  const [cryptoList, setCryptoList] = useState([]);
  const [selectedCrypto, setSelectedCrypto] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://api.coincap.io/v2/assets?limit=20"
        );
        setCryptoList(response.data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchCryptoData = async () => {
      if (selectedCrypto) {
        try {
          const response = await axios.get(
            `https://api.coincap.io/v2/assets/${selectedCrypto}/history?interval=d1`
          );
          setData(response.data.data);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      }
    };

    fetchCryptoData();
  }, [selectedCrypto]);

  const handleCryptoChange = (e) => {
    setSelectedCrypto(e.target.value);
  };

  const handleNextPage = async () => {
    try {
      const response = await axios.get(
        "https://api.coincap.io/v2/assets?offset=20&limit=20"
      );
      setCryptoList(response.data.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleReset = async () => {
    try {
      const response = await axios.get(
        "https://api.coincap.io/v2/assets?limit=20"
      );
      setCryptoList(response.data.data);
      setSelectedCrypto("");
      setData([]);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const formatDate = (timestamp) => {
    const date = new Date(timestamp);
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
  };

  const chartData = {
    labels: data.map((entry, index) => formatDate(entry.time)),
    datasets: [
      {
        label: `${selectedCrypto} Price (USD)`,
        data: data.map((entry) => parseFloat(entry.priceUsd)),
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
    <div className="LineChart">
      <h1>Cryptocurrency Price History</h1>
      <div>
        <label htmlFor="crypto-select">Select Cryptocurrency: </label>
        <select id="crypto-select" value={selectedCrypto} onChange={handleCryptoChange}>
          <option value="">Select a cryptocurrency</option>
          {cryptoList.map((crypto) => (
            <option key={crypto.id} value={crypto.id}>{crypto.name}</option>
          ))}
        </select>
      </div>
      <div style={{ width: "800px", height: "400px" }}>
        {selectedCrypto && <Line data={chartData} options={options} />}
      </div>
      <div>
        <button onClick={handleNextPage}>Next</button>
        <button onClick={handleReset}>reset</button>
      </div>
    </div>
  );
}

export default LineChart;
