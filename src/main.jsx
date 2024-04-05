import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import BarChart from "./BarChart.jsx";
import "./Tabble.css";
import CircleChart from "./CircleChart.jsx";
import Linechart from "./LineChart.jsx";
import Tabble from "./tabble.jsx";

function Root() {
  return (
    <>
      <CircleChart />
      <Linechart />
      <Tabble />
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<Root />);
