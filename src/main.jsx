import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import BarChart from "./BarChart.jsx";
import "./App.css";
import CircleChart from "./CircleChart.jsx";
import Linechart from "./LineChart.jsx";

function Root() {
  return (
    <>
      <CircleChart />
      <Linechart />
      <App/>
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<Root />);
