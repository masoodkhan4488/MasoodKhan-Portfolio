import React from "react";
import Typical from "react-typical";
import "./Banner.css";

const Banner = () => {
  return (
    <>
      <div className="banner-container">
        <div className="banner-parent">
          <div className="banner-details">
            <div className="col">
              <div className="col-icon">
                <a
                  target="_blank"
                  href="https://www.facebook.com/codewithmasoodofficial"
                >
                  <i className="fa fa-facebook-square"></i>
                </a>
                <a
                  target="_blank"
                  href="https://www.instagram.com/codewithmasoodofficial"
                >
                  <i className="fa fa-instagram"></i>
                </a>
                <a
                  target="_blank"
                  href="https://www.youtube.com/codewithmasood"
                >
                  <i className="fa fa-youtube-square"></i>
                </a>
                <a
                  target="_blank"
                  href="https://www.twitter.com/CodeWithMasoodY"
                >
                  <i className="fa fa-twitter"></i>
                </a>
              </div>
            </div>
            <div className="banner-details-name">
              <span className="banner-text">
                {" "}
                Hello, I'M <span className="highlighted-text">Masood Khan</span>
              </span>
            </div>
            <div className="banner-details-role">
              {" "}
              <h1>
                {" "}
                <Typical
                  loop={Infinity}
                  steps={[
                    "Full Stack Developer💻",
                    1000,
                    "MERN Stack Developer😎",
                    1000,
                    "App Developer💻",
                    1000,
                    "React/React Native Dev🔥",
                    1000,
                  ]}
                />
              </h1>
              <span className="banner-role-tagline">
                Knack of building applications for web and android/ios
                platforms.
              </span>
            </div>
            <div className="banner-options">
              <a
                target="_blank"
                href="https://www.fiverr.com/cwmservices?up_rollout=true"
              >
                <button className="btn primary-btn">
                  {""}
                  Hire Me{" "}
                </button>
              </a>
              <a href="masoodresume.pdf" download="Masood Khan Resume.pdf">
                <button className="btn highlighted-btn">Get Resume</button>
              </a>
            </div>
          </div>
          <div className="banner-picture">
            <div className="banner-picture-background"></div>
          </div>
        </div>
      </div>
      <div
        style={{
          backgroundColor: "#1f2235",
          width: "100%",
        }}
      >
        <img src="/images/bgimage.png" width="100%" alt="background" />
      </div>
    </>
  );
};

export default Banner;
