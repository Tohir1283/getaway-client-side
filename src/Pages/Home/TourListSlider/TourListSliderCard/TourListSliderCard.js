import React from "react";
import { Card, CardBody, CardTitle } from "reactstrap";
import { GoLocation } from "react-icons/go";
import { GrUserManager } from "react-icons/gr";
import { ImClock } from "react-icons/im";
import { Link } from "react-router-dom";
import { Spinner } from "react-bootstrap";

const TourListSliderCard = ({ tour }) => {
  return (
    <>
      {tour && (
        <Card key={tour._id}>
          <Link to={`/tours/${tour._id}`}>
            <div className="inner">
              <img width="100%" src={tour.cover} alt="Card cap" />
            </div>
          </Link>
          <CardBody className="text-start ps-4">
            <CardTitle tag="h4">{tour.name}</CardTitle>
            <p>
              <span style={{ color: "crimson" }}>{tour.rating}</span>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$ {tour.cost}
            </p>
            <p>Location: {tour.departure}</p>
            <p>{tour.departure_time}</p>
            <Link to={`/tours/${tour._id}`}>
              <button
                style={{
                  border: "none",
                  backgroundColor: "black",
                  color: "yellow",
                  padding: "6px 15px",
                }}
              >
                <b>book now</b>
              </button>{" "}
            </Link>
          </CardBody>
          <CardBody style={{ backgroundColor: "yellow" }}>
            <CardTitle
              tag="h6"
              className="fw-bold text-start d-flex justify-content-evenly "
            >
              <span className="m-3 d-flex align-items-center">
                <ImClock />
                &nbsp; {tour.duration}
              </span>
              <span className="m-3 d-flex align-items-center">
                <GrUserManager />
                &nbsp;{tour.age}
              </span>
              <span className="m-3 d-flex align-items-center">
                <GoLocation />
                &nbsp;{tour.region}
              </span>
            </CardTitle>
          </CardBody>
        </Card>
      )}
      {!tour && <Spinner animation="grow" />}
    </>
  );
};

export default TourListSliderCard;
