import React from "react";
import "./BarChart.css";

const BarChart = () => {
  return (
    <>
        <div className="barcontainer">
          <div className="bar" style={{ height: "12%" }}>
            bar
            <div className="barlabel">label</div>
          </div>
          <div className="bar" style={{ height: "16%" }}>
            bar
            <div className="barlabel">label</div>
          </div>
          <div className="bar" style={{ height: "22%" }}>
            bar
            <div className="barlabel">label</div>
          </div>
          <div className="bar" style={{ height: "30%" }}>
            bar
            <div className="barlabel">label</div>
          </div>
          <div className="bar" style={{ height: "45%" }}>
            bar
            <div className="barlabel">label</div>
          </div>
          <div className="bar" style={{ height: "60%" }}>
            bar
            <div className="barlabel">label</div>
          </div>
        </div>
    </>
  );
};

export default BarChart;
