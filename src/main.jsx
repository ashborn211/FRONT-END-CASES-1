import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import BarChart from "./BarChart.jsx";
import "./Tabble.css";
import CircleChart from "./CircleChart.jsx";
import Linechart from "./LineChart.jsx";
import Tabble from "./tabble.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Coins from "./tabble-coins/coins.jsx";
import "./tabble-coins/coins.css";
import Search from "./Search";
import Favorites from "./Favorites";

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
