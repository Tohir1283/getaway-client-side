import React from "react";
import Banner from "../../../Components/Banner/Banner";
import useGallery from "../../../Hooks/useGallery";
import ContactList from "../ContactList/ContactList";
import Continents from "../Continents/Continents";
import DestinationCard from "../DestinationCards/DestinationCard";
import Gallery from "../Gallery/Gallery";
import Locations from "../Locations/Locations";
import TourLIstSlider from "../TourListSlider/TourLIstSlider";
import "./Home.css";

const Home = () => {
  const [gallery1] = useGallery();
  return (
    <div style={{ overflow: "hidden" }}>
      <Banner />
      <div className="banner" style={{ marginBottom: "0" }}>
        {" "}
        <h1 className="banner-text">Getaway!!!</h1>
      </div>
      <div
        style={{ width: "100%", padding: "2rem 0", backgroundColor: "#f6f6f6" }}
      >
        <div className="article">
          <div className="article-header">
            <p className="fs-1" style={{ marginBottom: 0 }}>
              <span className="fw-bolder">Amazing!!!</span> Tours and Fun
              Adventures <span className="fw-bolder"> waiting for you.</span>
            </p>
          </div>
          <p>
            Your Journey Begins Explore hidden treasures Amazing tours and fun
            adventures are waiting for you. Treat yourself and explore the
            islands of the world.{" "}
          </p>
        </div>
      </div>
      <TourLIstSlider />
      <Locations />
      <div
        style={{ width: "100%", padding: "4rem 0", backgroundColor: "#f6f6f6" }}
      >
        <div className="article">
          <div className="article-header">
            <p className="fs-1" style={{ marginBottom: 0 }}>
              Choose The
              <span className="fw-bolder"> Destination</span>{" "}
              <span className="fw-bolder">Just Right </span>For Your Vacation!!!
            </p>
          </div>
          <p>
            Do you want to travel but don’t know where you should go? Are you
            looking for a little clarity and inspiration to get your trip
            planning started? You’re in the right place!
          </p>
        </div>
      </div>{" "}
      <DestinationCard />
      {/* Gallery */}
      <div
        style={{
          width: "100%",
          padding: "2.5rem 0",
          backgroundColor: "#f6f6f6",
        }}
      >
        <div className="article">
          <div className="article-header">
            <p className="fs-1" style={{ marginBottom: 0 }}>
              Special<span className="fw-bolder"> Deals And </span>
              <span className="fw-bolder"> Last Minute</span> Amazing Offers!
            </p>
          </div>
          <p>
            Your Journey Begins Explore hidden treasures Amazing tours and fun
            adventures are waiting for you. Treat yourself and explore the
            islands of the world.{" "}
          </p>
        </div>
      </div>
      <div className="inner" style={{ width: "100%" }}>
        <img
          src="https://getaway.qodeinteractive.com/wp-content/uploads/2017/08/h1-video-button-background-img.jpg"
          alt=""
          // style={{ width: "100%", height: "100%" }}
        />
      </div>
      <div
        style={{ width: "100%", padding: "5% 10%", backgroundColor: "yellow" }}
      >
        <div className="newsletter">
          <h1>
            <span className="fw-bolder">Subscribe To</span> the Newsletter
          </h1>
          <input
            type="email"
            placeholder="Your Email..."
            required
            style={{
              width: "100%",
              border: "none",
              outline: "none",
              borderBottom: "3px solid black",
              color: "black",
              backgroundColor: "yellow",
            }}
          />
          <br />
          <button className=" btn-subscribe bg-dark px-5 py-2 mt-4 text-light">
            subscribe
          </button>
        </div>
      </div>
      <Continents />
      <ContactList />
      <div className="imageGallery d-md-flex flex-xs-column flex-md-row">
        {gallery1.map((image) => (
          <Gallery image={image} key={image._id} />
        ))}
      </div>
    </div>
  );
};

export default Home;
