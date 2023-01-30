import "./cardmotel.css";
import React from "react";
import Navbar from "../../components/navbar/Navbar";

const CardMotel = () => {
  return (
    <>
      <Navbar />
      <div className="cp">
        <div className="cpItem">
          <img src="./images/Card1.jpg" alt="review" className="fpImg" />
          <span className="fpName">PANCHAVTI MOTELS</span>
        </div>
        <div className="cpItem">
          <img src="./images/Card2.jpg" alt="review" className="fpImg" />
          <span className="fpName">PANCHAVTI MOTELS</span>
        </div>
        <div className="cpItem">
          <img src="./images/Card3.jpg" alt="review" className="fpImg" />
          <span className="fpName">PANCHAVTI MOTELS</span>
        </div>
      </div>
      <div className="cp">
        <div className="cpItem">
          <img src="./images/Card4.jpg" alt="review" className="fpImg" />
          <span className="fpName">PANCHAVTI MOTELS</span>
        </div>
        <div className="cpItem">
          <img src="./images/Card5.jpg" alt="review" className="fpImg" />
          <span className="fpName">PANCHAVTI MOTELS</span>
        </div>
        <div className="cpItem">
          <img src="./images/Card6.jpg" alt="review" className="fpImg" />
          <span className="fpName">PANCHAVTI MOTELS</span>
        </div>
      </div>
      <div className="cp">
        <div className="cpItem">
          <img src="./images/Card7.jpg" alt="review" className="fpImg" />
          <span className="fpName">PANCHAVTI MOTELS</span>
        </div>
        <div className="cpItem">
          <img src="./images/Card8.jpg" alt="review" className="fpImg" />
          <span className="fpName">PANCHAVTI MOTELS</span>
        </div>
        <div className="cpItem">
          <img src="./images/Card9.jpg" alt="review" className="fpImg" />
          <span className="fpName">PANCHAVTI MOTELS</span>
        </div>
      </div>
    </>
  );
};

export default CardMotel;
