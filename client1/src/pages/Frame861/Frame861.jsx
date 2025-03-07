// src/components/Frame861.jsx
import React from "react";
import "./Frame861.scss";

const Frame861 = () => {
  return (
    <div className="frame861">
      <div className="header">
        <p className="powered-by">Powered by</p>
        <h1 className="title">CoreLogic</h1>
      </div>
      <div className="content">
        <h2 className="subtitle">Suburb Market Reports</h2>
        <p className="description">
          Explore Market Trends, Median Property Prices, Property Statistics And
          Recent Sales Across Suburbs in Your Local Area.
        </p>
        <div className="search-container">
          <input
            type="text"
            placeholder="Search your suburb"
            className="search-input"
          />
          <button className="search-button">Find Out</button>
        </div>
      </div>
    </div>
  );
};

export default Frame861;
