import React from "react";

import EDU from "../assets/aa64ea78-653d-4a10-a229-790e3def669d.png";
import Restaurantly from "../assets/cabcd0c7-0bd4-49cd-9861-cc4c01f8aabf.png";
import Game from "../assets/WhatsApp Image 2024-07-28 at 8.27.19 PM (1).jpeg";
import Calendar from "../assets/WhatsApp Image 2024-07-28 at 8.27.19 PM.jpeg";

const Projects = () => {
  //jsx
  return (
    <React.Fragment>
      <div className="Projects" id="Projects">
        <div className="container">
          <div className="header">
            <h1>
              <span>MY</span> Projects
            </h1>
            <h5>Some of my work</h5>
          </div>
          <div className="Someprojects">
            <div className="box">
              <img src={Calendar} alt="" />
              <div className="content">
                <h3>Calendar</h3>
              </div>
              <div className="info">
                <a href="https://www.linkedin.com/feed/update/urn:li:activity:7199824407232491522/">
                  {" "}
                  Preview
                </a>
              </div>
            </div>

            <div className="box">
              <img src={Game} alt="" />
              <div className="content">
                <h3>Memory-Game</h3>
              </div>
              <div className="info">
                <a href="https://abdallaharef65.github.io/Memory-Game/?fbclid=IwAR36fP4YuL_Fp0XgFt8d6ghCOtll1vXjp1jV-SXh2R1OR6eGSl7PzYMCqxc">
                  {" "}
                  Preview
                </a>
              </div>
            </div>

            <div className="box">
              <img src={Restaurantly} alt="" />
              <div className="content">
                <h3>Restaurantly</h3>
              </div>
              <div className="info">
                <a href="https://abdallaharef65.github.io/Restaurantly/">
                  {" "}
                  Preview
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Projects;