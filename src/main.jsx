import React from "react";
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
import Search from "./Search.jsx";

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
  return (
    <>
      <CircleChart />
      <Linechart />
      <Tabble />
      <Search/>
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<Main />);
