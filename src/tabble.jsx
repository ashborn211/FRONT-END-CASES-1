import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Tabble() {
  const [coins, setCoins] = useState([]);
  const [limit, setLimit] = useState(100);

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

  const nextpage = () => {
    setLimit(limit + 100);
  };

  const handleRefresh = () => {
    setLimit(100);
  };

  return (
    <div className="data-container">
      <section className="coins">
        <h1 style={{ textAlign: "center", marginBottom: "1rem" }}>
          This table shows all cryptocurrency
        </h1>
        <div className="scroll-container">
          <table>
            <thead>
              <tr>
                <th>Rank</th>
                <th>Name</th>
                <th>Symbol</th>
                <th>Price (USD)</th>
              </tr>
            </thead>

            <tbody>
              {coins.map(({ id, name, rank, symbol, priceUsd }) => (
                <tr key={id}>
                  <td>{rank}</td>
                  <td>
                    <Link to={`/coins/${id}`}>{name}</Link>
                  </td>
                  <td>
                    <Link to={`/coins/${id}`}>{symbol}</Link>
                  </td>
                  <td>${parseFloat(priceUsd).toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="buttons">
          <button onClick={nextpage}>Load More</button>
          <button onClick={handleRefresh}>Reset</button>
        </div>
      </section>
      </div>
  );
}

export default Tabble;
