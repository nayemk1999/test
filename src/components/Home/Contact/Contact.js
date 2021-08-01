import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import emailjs from "emailjs-com";

export default function Contact() {
  const [email, setEmail] = useState();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_za7y8qe",
        "template_7lrgqed",
        e.target,
        "user_AaQfX3dRBUQR7t0wHUhjB"
      )
      .then(
        (result) => {
          console.log(result.text);
          if (result) {
            setEmail(true);
          } else {
            setEmail(false);
          }
        },
        (error) => {
          console.log(error.text);
          if (error) {
            setEmail(false);
          } else {
            setEmail(false);
          }
        }
      );
    e.target.reset();
  };

  return (
    <div className="container">
      <h2 className="text-center mt-5 text-success">Contact US</h2>
      <div style={{ borderRadius: "20px" }} className="p-5 shadow-lg mt-5">
        <form onSubmit={sendEmail}>
          <div className="form-group p-3">
            <input required type="text" className="form-control p-3" placeholder="Enter Your Name*" />
          </div>
          <div className="form-group p-3">
            <input required type="text" className="form-control p-3" placeholder="Email Address *" />
          </div>
          <div className="form-group p-3">
            <input required type="text" className="form-control p-3" placeholder="Subject *" />
          </div>
          <div className="form-group p-3">
            <textarea required name="message" className="form-control p-3" id="" placeholder="Message *"></textarea>
          </div>
          <div className="form-group text-center">
            <button type="submit" className="btn btn-primary btn-lg submitButton"> Send Message </button>
          </div>
          <p style={{ color: email ? "green" : "red", fontWeight: "bold" }}>
            {email && "Successfully send your valuable message.."}
          </p>
          <p style={{ color: email === false && "red", fontWeight: "bold" }}>
            {email === false && "Please Try again.."}
          </p>
        </form>
      </div>
    </div>
  );
}
