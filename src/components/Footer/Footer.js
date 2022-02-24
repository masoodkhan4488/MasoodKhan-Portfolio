import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <>
      <div
        style={{
          backgroundColor: "#1f2235",
          width: "100%",
        }}
      >
        <img
          style={{ transform: "scaleY(-1)" }}
          src="/images/bgimage.png"
          width="100%"
          alt="background"
        />
      </div>
      <div style={{ width: "100%" }} className="footer">
        <div className="footer-content">
          <h3>Connect Me</h3>
          <p style={{ padding: "10px", maxWidth: "800px" }}>
            Full stack web and mobile developer with background knowledge of
            MERN stacks with redux, along with a knack of building applications
            with utmost efficiency. Strong professional with a BSC willing to be
            an asset for an organization. Experience with (MongoDB, MySQL,
            NoSQL) Understanding and Experience on Git. Document the development
            process, architecture, and standard components Keep abreast of new
            trends and best practices in web development Good understanding of
            site development, application layout, and portals. Firebase, Payment
            Integration and other external APIs. Good understanding of front-end
            technologies, UI frameworks such as React or Vue. Capable of HTML5
            and CSS/CSS3 ,JQuery, JavaScript Lifecycle including coding
            standards, code reviews, build process, testing, and operations.
          </p>
          <ul className="socials">
            <li>
              <a
                target="_blank"
                href="https://www.facebook.com/codewithmasoodofficial"
              >
                <i className="fa fa-facebook"></i>
              </a>
            </li>
            <li>
              <a target="_blank" href="https://www.twitter.com/CodeWithMasoodY">
                <i className="fa fa-twitter"></i>
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href="https://www.instagram.com/codewithmasoodofficial"
              >
                <i className="fa fa-instagram"></i>
              </a>
            </li>
            <li>
              <a target="_blank" href="https://www.youtube.com/codewithmasood">
                <i className="fa fa-youtube-square"></i>
              </a>
            </li>
          </ul>
        </div>
        <div style={{ width: "100%" }} className="footer-bottom">
          <p>
            copyright &copy;2022 ReactPortfolioApp. designed by{" "}
            <span>MasoodKhan</span>
          </p>
        </div>
      </div>
    </>
  );
}

export default Footer;
