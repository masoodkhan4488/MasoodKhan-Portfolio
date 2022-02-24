import "./testimonials.scss";

export default function Testimonials() {
  const data = [
    {
      id: 1,
      name: "Ali Ahmed",
      title: "YouTube Creator",
      img: "images/aliahmed.jpg",
      icon: "assets/twitter.png",
      desc: "Thanks sir for providing information, please make a full course on python.",
    },
    {
      id: 2,
      name: "Syed Habib Banuri",
      title: "KUST University",
      img: "images/king.jpg",
      icon: "assets/youtube.png",
      desc: "Out class keep it up bro. I finally got my project completed. Nice Work, keep it up ",
      featured: true,
    },
    {
      id: 3,
      name: "VICTORY",
      title: "VICTORY PUB",
      img: "images/victor.jpg",
      icon: "assets/linkedin.png",
      desc: "Keep up the EXCELLENT work and do give plenty of exercises and practical examples Sir!",
    },
  ];
  return (
    <div id="Testimonials">
      {" "}
      <div className="testimonials" id="testimonials">
        <h2
          style={{
            textAlign: "center",
            paddingTop: "40px",
            marginBottom: "40px",
          }}
        >
          Testimonials
        </h2>
        <div className="container">
          {data.map((d) => (
            <div
              style={{
                width: "300px",
                height: "300px",
                backgroundColor: "#1f2235",
              }}
              className={d.featured ? "card featured" : "card"}
            >
              <div className="top">
                <img className="user" src={d.img} alt="" />
              </div>
              <div
                style={{
                  backgroundColor: "#1f2235",
                  color: "white",
                  textAlign: "center",
                  fontSize: "18px",
                  paddingTop: "20px",
                }}
                className="center"
              >
                "{d.desc}"
              </div>
              <div className="bottom">
                <h3>{d.name}</h3>
                <h4>{d.title}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
