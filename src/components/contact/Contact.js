import "./contact.css";
import React, { useState, useRef } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const formRef = useRef();
  const [done, setDone] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_gvtxvcm",
        "template_9owjlje",
        formRef.current,
        "user_2agKQgT6Jx0WnwCl0pwPP"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <>
      <h2
        id="Contact"
        style={{
          textAlign: "center",
          paddingTop: "120px",
          paddingBottom: "20px",
          marginBottom: "30px",
        }}
      >
        Let's Discuss Your Project
      </h2>
      <div class="contact-container">
        <div class="contact-box">
          <div class="left"></div>
          <div class="right">
            <h2>Contact Us</h2>
            <form ref={formRef} onSubmit={handleSubmit}>
              <input
                type="text"
                class="field"
                placeholder="Your Name"
                name="user_name"
              />
              <input
                type="text"
                class="field"
                placeholder="Your Subject"
                name="user_subject"
              />
              <input
                type="text"
                class="field"
                placeholder="Email"
                name="user_email"
              />
              <textarea placeholder="Message" class="field" name="message" />
              <button class="btnbtn">Submit</button>
              {done && "Thank you..."}
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default Contact;
