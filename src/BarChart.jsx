import React from "react";
import "./BarChart.css";

const BarChart = () => {
  const bars = [
    { height: "12%", label: "label1" },
    { height: "16%", label: "label2" },
    { height: "22%", label: "label3" },
    { height: "30%", label: "label4" },
    { height: "45%", label: "label5" },
    { height: "60%", label: "label6" },
  ];
  return (
    <>
      {/* <div className="barcontainer">
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
        </div> */}
      <div className="barcontainer">
        {bars.map((bar, index) => (
          <div key={index} className="bar" style={{ height: bar.height }}>
            bar
            <div className="barlabel">{bar.label}</div>
          </div>
        ))}
      </div>
    </>
  );
};

export default BarChart;
