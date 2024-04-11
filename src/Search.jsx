import { useEffect } from "react";
import React,{ useState } from "react";
import axios from "axios";

function Search({ favoriteCoins, setFavoriteCoins }) {
  const [coins, setCoins] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [limit, setLimit] = useState(20);

  useEffect(() => {
    const fetchCoins = async () => {
      try {
        const response = await axios.get(`https://api.coincap.io/v2/assets`);
        console.log(response.data.data);
        setCoins(response.data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchCoins();
  }, []);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleFavorite = (coin) => {
    if (favoriteCoins.includes(coin)) {
      setFavoriteCoins(favoriteCoins.filter((c) => c.id !== coin.id));
    } else {
      setFavoriteCoins([...favoriteCoins, coin]);
    }
  };

  const filteredCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="Search">
      <h1>Coins</h1>
      <input type="text" value={searchTerm} onChange={handleSearch} />
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Favorite</th>
          </tr>
        </thead>
        <tbody>
          {filteredCoins.slice(0, limit).map((coin) => (
            <tr key={coin.id} className={favoriteCoins.includes(coin)? 'favorite' : ''}>
              <td>{coin.name}</td>
              <td>
                <button onClick={() => handleFavorite(coin)}>Favorite</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="buttons">
        <button onClick={() => setLimit(limit + 10)}>Load More</button>
      </div>
    </div>
  );
}

export default Search;