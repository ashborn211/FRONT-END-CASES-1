import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import BarChart from "./BarChart.jsx";
import "./Tabble.css";
import CircleChart from "./CircleChart.jsx";
import Linechart from "./LineChart.jsx";
import Tabble from "./tabble.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Coins from "./tabble-coins/coins";

function Main() {
  return (
    <Router>
      <CircleChart />
      <Linechart />
      <Tabble />

      <Routes>
        <Route path="/" element={<Coins />} />
        <Route path="/coins/:id" element={<Coins />} />
      </Routes>
    </Router>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<Main />);
