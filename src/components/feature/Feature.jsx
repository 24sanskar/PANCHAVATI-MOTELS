import React from "react";
import "./feature.css";

function Feature() {
  return (
    <div className="featured">
      <div className="featuredItem">
        <img
          src="./images/feature1.jpg"
          alt="Nashik"
          className="featuredImg "
        />
        <div className="featuredTitles">
          <h1>Nashik</h1>
        </div>
      </div>
      <div className="featuredItem">
        <img src="./images/feature2.jpg" alt="" className="featuredImg" />
        <div className="featuredTitles">
          <h1>Mumbai</h1>
        </div>
      </div>
      <div className="featuredItem">
        <img src="./images/feature3.jpg" alt="" className="featuredImg" />
        <div className="featuredTitles">
          <h1>Pune</h1>
        </div>
      </div>
    </div>
  );
}

export default Feature;
