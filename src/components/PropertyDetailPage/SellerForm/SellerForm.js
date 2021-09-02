import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const SellerForm = () => {
  return (
    <div>
      <div
        style={{ borderRadius: "5px" }}
        className=" px-5 py-4 shadow bg-white"
      >
        <form action="https://formspree.io/f/xrgrekdq" method="POST">
          <h4 className="mb-4 text-center text-uppercase text-info">
            Contact Us
          </h4>
          <div className="form-group mb-2">
            <input
              type="text"
              className="form-control p-2"
              placeholder="Email Address *"
            />
          </div>
          <div className="form-group mb-2">
            <input
              type="text"
              className="form-control p-2"
              placeholder="Subject *"
            />
          </div>
          <div className="form-group mb-2">
            <textarea
              name="message"
              className="form-control p-2"
              id=""
              rows="4"
              placeholder="Message *"
            ></textarea>
          </div>
          <div className="form-group mt-3 text-center">
            <button
              type="submit"
              className="btn btn-primary btn-lg submitButton"
            >
              {" "}
              Send Message <FontAwesomeIcon icon={faEnvelope} />{" "}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SellerForm;
