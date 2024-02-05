import React from "react";
//import React, {useState}from 'react'
import "../CheckChallenge/CheckChallenge.css";
import adImage from "../../assets/Group 90 (1).png";
import { FaCheck } from "react-icons/fa6";

const CheckChallenge = () => {
  return (
      <div className="check-challenge-section-page">
          <div className="check-challenge-section">
              <img src={adImage} alt="advert" className="ad-image" />

              <div className="challenge-requirements">
                  <ul>
                      <li className="requirement">
                          Pick a challenge task you are interested in
                      </li>
                      <li className="requirement">
                          Create 5 videos with the song and post it
                      </li>
                      <li className="requirement">
                          The more you create, the more you win!
                      </li>
                  </ul>
              </div>

              <div className="more-requirements">
                  <p>To enter this challenge, you must be:</p>
                  <div className="standard">
                      <FaCheck />
                      <b>Be at least 18 years old</b>
                  </div>

                  <div className="standard">
                      <FaCheck />
                      <b>Have more than 1,000 followers</b>
                  </div>
              </div>

              <button className="challenge-button">ENTER CHALLENGE</button>

              <footer className="section-footer">
                  Copyright BEED+ 2024 Company. All rights reserved
              </footer>
          </div>
      </div>

  );
};

export default CheckChallenge;
