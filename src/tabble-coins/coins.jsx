import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const Coins = () => {
  const [coinData, setCoinData] = useState(null);
  const [cryptoList, setCryptoList] = useState([]);
  const [selectedCrypto, setSelectedCrypto] = useState("");
  const { id } = useParams();

  useEffect(() => {
    const fetchCoinData = async () => {
      if (id) {
        try {
          const response = await axios.get(
            `https://api.coincap.io/v2/assets/${id}`
          );
          setCoinData(response.data.data);
        } catch (error) {
          console.error("Error fetching coin data:", error);
        }
      }
    };
    const fetchCryptoData = async () => {
      try {
        const response = await axios.get(
          `https://api.coincap.io/v2/assets?limit=20`
        );
        setCryptoList(response.data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchCryptoData();
    fetchCoinData();
  }, [id]);

  const handleCryptoChange = (e) => {
    const selectedCrypto = e.target.value;
    setSelectedCrypto(selectedCrypto);
    window.location.href = selectedCrypto ? `/coins/${selectedCrypto}` : "/";
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
      setCoinData(null);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleBack = () => {
    window.location.href = "/";
  };

  return (
    <div>
      <div>
        <label htmlFor="crypto-select">Select Cryptocurrency: </label>
        <select
          id="crypto-select"
          value={selectedCrypto}
          onChange={handleCryptoChange}
        >
          <option value="">Select a cryptocurrency</option>
          {cryptoList.map((crypto) => (
            <option key={crypto.id} value={crypto.id}>
              {crypto.name}
            </option>
          ))}
        </select>
      </div>
      <div className="button-container">
        <button className="action-button" onClick={handleNextPage}>
          Next
        </button>
        <button className="action-button" onClick={handleReset}>
          Reset
        </button>
        {id && (
          <button className="action-button" onClick={handleBack}>
            Back
          </button>
        )}
      </div>
      <h2>Coin Detail</h2>
      {coinData ? (
        <div>
          <p>id: {coinData.id}</p>
          <p>changePercent24Hr: {coinData.changePercent24Hr}</p>
          <p>explorer: {coinData.explorer}</p>
          <p>marketCapUsd: {coinData.marketCapUsd}</p>
          <p>maxSupply: {coinData.maxSupply}</p>
          <p>name: {coinData.name}</p>
          <p>priceUsd: {coinData.priceUsd}</p>
          <p>rank: {coinData.rank}</p>
          <p>supply: {coinData.supply}</p>
          <p>symbol: {coinData.symbol}</p>
          <p>volumeUsd24Hr: {coinData.volumeUsd24Hr}</p>
          <p>vwap24Hr: {coinData.vwap24Hr}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Coins;
