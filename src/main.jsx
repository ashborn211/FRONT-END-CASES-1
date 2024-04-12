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
      <CircleChart />
      <Linechart />
      <BarChart />
      <Tabble />
      <Search favoriteCoins={favoriteCoins} setFavoriteCoins={setFavoriteCoins} />
      <Favorites favoriteCoins={favoriteCoins} />
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<Main />);
