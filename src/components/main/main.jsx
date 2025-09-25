import React from "react";
import "./main.css";
import { assets } from "../../assets/assets/assets";

const main = () => {
  return (
    <div className="main">
      <div className="nav">
        <p>Gemini</p>
        <img src={assets.user_icon} alt="" />
      </div>
      <div className="main-container">
        <div className="greet">
          <p>
            <span>Hello, Dev</span>
          </p>
          <p>How can I help you today?</p>
        </div>
        <div className="cards">
          <div className="card">
            <p>Agentic AI's </p>
            <img src={assets.compass_icon} alt="" />
          </div>
          <div className="card">
            <p>Summarize the concept of deep learning</p>
            <img src={assets.bulb_icon} alt="" />
          </div>
          <div className="card">
            <p>Machine learning with python</p>
            <img src={assets.message_icon} alt="" />
          </div>
          <div className="card">
            <p>Solana Block-Chain development</p>
            <img src={assets.code_icon} alt="" />
          </div>
        </div>
        <div className="main-bottom">
          <div className="search-box">
            <input type="text" placeholder="Enter a prompt here" />
            <div>
              <img src={assets.gallery_icon} alt="" />
              <img src={assets.mic_icon} alt="" />
              <img src={assets.send_icon} alt="" />
            </div>
          </div>
          <p className="bottom-info">
            Double Check the responses, may display inaccurate information
          </p>
        </div>
      </div>
    </div>
  );
};

export default main;
