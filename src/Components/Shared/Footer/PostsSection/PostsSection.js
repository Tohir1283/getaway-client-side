import React from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import "./PostsSection.css";

const PostsSection = () => {
  return (
    <div style={{ maxWidth: "420px" }}>
      <div className="latestPosts">
        <h3 style={{ color: "yellow" }}>Latest Posts</h3>
        <>
          <small>August 30, 2017</small>
        </>
        <p>How To Take Better Photos? </p>
      </div>
      <div className="latestPosts">
        <h3 style={{ color: "yellow" }}>Latest Posts</h3>
        <>
          <small>August 30, 2017</small>
        </>
        <p>14 Things To See And Do When Visiting Kyoto</p>
        <button
          className="button-primary text-light"
          style={{ backgroundColor: "black" }}
        >
          learn more
          <MdOutlineKeyboardArrowRight className="buttonIcon " />{" "}
        </button>
      </div>
    </div>
  );
};

export default PostsSection;
