import React from "react";
import "./About.css";

const About = () => {
  return (
    <div id="About" class="section">
      <div class="About-container">
        <div class="content-section">
          <div class="title">
            <h1 style={{ textTransform: "capitalize" }}>About Me</h1>
          </div>
          <div class="content">
            <h3>Why Choose Me?</h3>
            <p>
              Full stack web and mobile developer with background knowledge of
              MERN stacks with redux, along with a knack of building
              applications with utmost efficiency. Strong professional with a
              BSC willing to be an asset for an organization.
            </p>
            <div class="button">
              <a
                className="hire"
                style={{ backgroundColor: "#ff5823" }}
                href="#Contact"
              >
                Contact Me
              </a>
            </div>
          </div>
          <div class="social">
            <a
              target="_blank"
              href="https://wwww.facebook.com/codewithmasoodofficial"
            >
              <i class="fa fa-facebook-square"></i>
            </a>
            <a target="_blank" href="https://www.twitter.com/codewithmasoody">
              <i class="fa fa-twitter"></i>
            </a>
            <a target="_blank" href="https://www.youtube.com/codewithmasood">
              <i class="fa fa-youtube-square"></i>
            </a>
          </div>
        </div>
        <div class="image-section">
          <img src="images/banner.jpg" />
        </div>
      </div>
    </div>
  );
};

export default About;
