import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [coins, setCoins] = useState([]);
  const [limit, setLimit] = useState(20);

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

  const handleRefresh = () => {
    setLimit(20);
    window.scrollTo(0, 0);
  };

  return (
    <div className="coins-container">
      <div className="ScrollContainer">
        <section className="coins">
          <h1 style={{ textAlign: "center", marginBottom: "1rem" }}>
            This App uses the <a href="https://coincap.io">CoinCap API</a>
          </h1>
          <article>
            <p>Showing {coins.length} coins</p>
          </article>
            <table>
              <thead>
                <tr>
                  <th>Rank</th>
                  <th>Name</th>
                  <th>Price (USD)</th>
                </tr>
              </thead>

              <tbody>
                {coins.map(({ id, name, rank, priceUsd }) => (
                  <tr key={id}>
                    <td>{rank}</td>
                    <td>{name}</td>
                    <td>${parseFloat(priceUsd).toFixed(2)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          <div className="buttons">
            <button onClick={() => setLimit(limit + 20)}>Next</button>
            <button onClick={handleRefresh}>Refresh</button>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
