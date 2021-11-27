import React from "react";
import {
  AiFillInstagram,
  AiFillTwitterCircle,
  AiFillLinkedin,
} from "react-icons/ai";
import { MdFacebook } from "react-icons/md";
import "./AboutSection.css";
const AboutSection = () => {
  return (
    <div className="footerAbout">
      <h2 style={{ color: "yellow" }}>About Us</h2>
      <p>
        A travel agency is a private retailer or public service that provides
        travel and tourism-related services to the general public on behalf of
        accommodation or travel suppliers to offer different kinds of travelling
        packages for each destination.
      </p>
      <h1
        style={{
          color: "yellow",
          display: "flex",
          justifyContent: "start",
          cursor: "pointer",
        }}
      >
        <AiFillInstagram className="me-3" />
        <MdFacebook className="me-3" />
        <AiFillTwitterCircle className="me-3" />
        <AiFillLinkedin className="me-3" />
      </h1>
      <p>GetAway!!! © 2021 All rights reserved</p>
    </div>
  );
};

export default AboutSection;
