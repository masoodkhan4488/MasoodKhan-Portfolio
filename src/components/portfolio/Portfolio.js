import { useEffect, useState } from "react";
import PortfolioList from "../portfolioList/PortfolioList";
import "./portfolio.scss";
import {
  featuredPortfolio,
  webPortfolio,
  mobilePortfolio,
  designPortfolio,
  contentPortfolio,
} from "../../data";

export default function Portfolio() {
  const [selected, setSelected] = useState("featured");
  const [data, setData] = useState([]);
  const list = [
    {
      id: "featured",
      title: "Featured",
    },
    {
      id: "web",
      title: "Web App",
    },
    {
      id: "mobile",
      title: "Mobile App",
    },
    {
      id: "design",
      title: "Design",
    },
  ];

  useEffect(() => {
    switch (selected) {
      case "featured":
        setData(featuredPortfolio);
        break;
      case "web":
        setData(webPortfolio);
        break;
      case "mobile":
        setData(mobilePortfolio);
        break;
      case "design":
        setData(designPortfolio);
        break;
      default:
        setData(featuredPortfolio);
    }
  }, [selected]);

  return (
    <div id="Portfolio">
      <div className="portfolio" id="portfolio">
        <h2
          style={{
            textAlign: "center",
            paddingTop: "40px",
            paddingBottom: "20px",
          }}
        >
          Portfolio
        </h2>
        <ul>
          {list.map((item) => (
            <PortfolioList
              title={item.title}
              active={selected === item.id}
              setSelected={setSelected}
              id={item.id}
            />
          ))}
        </ul>
        <div className="container">
          {data.map((d) => (
            <div style={{ width: "300px", height: "300px" }} className="item">
              <img src={d.img} alt="" />
              <h3>{d.title}</h3>
              <button className="button1">
                <a
                  target="_blank"
                  style={{ textDecoration: "none", color: "white" }}
                  href={d.code}
                >
                  Code
                </a>
              </button>
              <button className="button2">
                <a
                  target="_blank"
                  style={{ textDecoration: "none", color: "white" }}
                  href={d.demo}
                >
                  Demo
                </a>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
