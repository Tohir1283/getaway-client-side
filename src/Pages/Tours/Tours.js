import React from "react";
import TourCard from "./TourCard/TourCard";

const Tours = () => {
  // const [tourList] = useTours();
  return (
    <div>
      <div className="inner">
        <img
          src=" https://getaway.qodeinteractive.com/wp-content/uploads/2017/09/tour-list-title-img.jpg"
          alt="banner"
        />
      </div>
      <div className="banner" style={{ marginBottom: "0" }}>
        {" "}
        <h1 className="banner-text">Tours!!!</h1>
      </div>

      <div className="article">
        <div className="article-header">
          <p className="fs-1" style={{ marginBottom: 0 }}>
            <span className="fw-bolder">Amazing!!!</span> Tours and Fun
            Adventures <span className="fw-bolder"> waiting for you.</span>
          </p>
        </div>
        <p>
          Your Journey Begins Explore hidden treasures Amazing tours and fun
          adventures are waiting for you. Treat yourself and explore the islands
          of the world.{" "}
        </p>
      </div>

      <div className="tourListContainer">
        <TourCard />
      </div>
    </div>
  );
};

export default Tours;
