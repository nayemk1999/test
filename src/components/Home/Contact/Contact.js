import React from "react";
import { Button, Form } from "react-bootstrap";

export default function Contact() {
  return (
    <div className="container">
      <h2 className="text-center mt-5 text-success">Contact US</h2>
      <div style={{ borderRadius: "20px" }} className="p-5 shadow-lg mt-5">
        <form action="https://formspree.io/f/xrgrekdq" method='POST'>
          <div className="form-group p-3">
            <input type="text" className="form-control p-3" placeholder="Email Address *" />
          </div>
          <div className="form-group p-3">
            <input type="text" className="form-control p-3" placeholder="Subject *" />
          </div>
          <div className="form-group p-3">
            <textarea name="message" className="form-control p-3" id="" placeholder="Message *"></textarea>
          </div>
          <div className="form-group text-center">
            <button type="submit" className="btn btn-primary btn-lg submitButton"> Send Message </button>
          </div>
        </form>
      </div>
    </div>
  );
}
