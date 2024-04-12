import React from "react";
import { Link } from "react-router-dom";

function Favorites({ coins, favoriteCoins }) {
  const filteredCoins = favoriteCoins.filter((coin) => coin.name.toLowerCase());

  return (
    <div>
      <h2>Favorieten</h2>
      <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {filteredCoins.map((coin) => (
            <tr key={coin.id}>
              <td>
                <Link to={`/coins/${coin.id}`}>{coin.name}</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </div>
  );
}

export default Favorites;
