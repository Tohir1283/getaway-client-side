import React from "react";
import AboutSection from "./AboutSection/AboutSection";
import "./Footer.css";
import PostsSection from "./PostsSection/PostsSection";
import TweetSection from "./TweetsSection/TweetSection";

const Footer = () => {
  return (
    <div>
      <div className="footerContainer d-md-flex justify-content-evenly">
        <TweetSection />
        <br />
        <PostsSection />
        <br />
        <AboutSection />
      </div>
    </div>
  );
};

export default Footer;
