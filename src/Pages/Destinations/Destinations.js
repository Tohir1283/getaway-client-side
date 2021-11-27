import React from "react";
import Destination from "../../Components/Destination/Destination";
// import { Container, Row } from "react-bootstrap";
// import useDestinations from "../../Hooks/useDestinations";

const Destinations = () => {
  // const [destinations] = useDestinations();
  // console.log("Destinations", destinations);
  return (
    <div>
      <img
        src="https://i.ibb.co/Ct2GCb3/destination-list-title.jpg"
        alt="banner"
        style={{ maxHeight: "620px", width: "100%" }}
      />
      <div className="banner" style={{ marginBottom: "0" }}>
        {" "}
        <h1 className="banner-text">Destinations!!!</h1>
      </div>
      <div
        style={{ width: "100%", padding: "2rem 0", backgroundColor: "#f6f6f6" }}
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
      </div>
      {/* Destionaiton Section */}
      <Destination />
    </div>
  );
};

export default Destinations;
