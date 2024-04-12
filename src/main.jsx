import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import BarChart from "./BarChart.jsx";
import CircleChart from "./CircleChart.jsx";
import Linechart from "./LineChart.jsx";
import Tabble from "./tabble.jsx";
import Coins from "./tabble-coins/coins.jsx";
import "./tabble-coins/coins.css";
import Search from "./Search.jsx";
import Favorites from "./Favorites.jsx";

function Main() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/coins/:id" element={<Coins />} />
      </Routes>
    </Router>
  );
}

function Home() {
  const [favoriteCoins, setFavoriteCoins] = useState([]);
  return (
    <>
      <div class="word-list-container">
        <div class="word-list-box" id="word-list-box">
          <CircleChart />
        </div>
        <div class="word-list-box" id="word-list-box">
          <Linechart />
        </div>
        <div class="word-list-box" id="word-list-box">
          <BarChart />
        </div>
        </div>
        <div class="word-list-container">
        <div class="word-list-box" id="word-list-box">
          <Tabble />
        </div>
        <div class="word-list-box" id="word-list-box">
          <Search
            favoriteCoins={favoriteCoins}
            setFavoriteCoins={setFavoriteCoins}
          />
        </div>
        <div class="word-list-box" id="word-list-box">
          <Favorites favoriteCoins={favoriteCoins} />
        </div>
      </div>
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<Main />);
