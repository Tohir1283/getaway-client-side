import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { CardTitle } from "reactstrap";
import { ImClock } from "react-icons/im";
import { GrUserManager } from "react-icons/gr";
import { GoLocation } from "react-icons/go";
import { FiPlus, FiX } from "react-icons/fi";
import "./TourDetails.css";
import { Col, Container, Row } from "react-bootstrap";
import Slider from "react-slick";
import { useForm } from "react-hook-form";
import useAuth from "../../Hooks/useAuth";
import axios from "axios";
import useOrderStatus from "../../Hooks/useOrderStatus";

const TourDetails = () => {
  const [orderStatus] = useOrderStatus();
  const { tourId } = useParams();
  const [tour, setTour] = useState({});
  const { user } = useAuth();
  useEffect(() => {
    const url = `https://secret-ridge-18140.herokuapp.com/tourList/${tourId}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => setTour(data));
  }, [tourId]);
  // console.log("tour", tour);
  // console.log(user);
  const {
    _id,
    cost,
    name,
    banner,
    description,
    title,
    departure,
    departure_time,
    return_time,
    included,
    region,
    not_included,
    gallery,
  } = tour;

  // Settings for card slider slider
  const settings = {
    dots: true,
    infinite: true,

    speed: 1000,
    autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    swipeToSlide: true,
    pauseOnHover: true,
    autoplaySpeed: 2000,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  // Tour Booking form Submit and sending data to server
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    data.status = orderStatus;
    console.log(data);
    axios
      .post("https://secret-ridge-18140.herokuapp.com/allOrders", data)
      .then((response) => {
        console.log(response);
        if (response.data.insertedId) {
          alert("Ordered Placed Successfully");
          reset();
        }
      });
  };

  return (
    <div style={{ backgroundColor: "#f6f6f6" }}>
      <div className="inner">
        <img src={banner} alt="" />
      </div>
      <div
        className="d-md-flex justify-content-between mx-auto mt-5 px-md-5 text-md-start"
        style={{ maxWidth: "1500px" }}
      >
        <div className="px-4" style={{ maxWidth: "1000px" }}>
          <h4>
            <span style={{ color: "crimson" }}>$&nbsp;{cost}</span>/per Person
          </h4>
          <h1 className="fw-bolder mb-4">{name}</h1>
          <p>{description}</p>
          <div
            style={{
              width: "100%",
              backgroundColor: "yellow",
            }}
          >
            <CardTitle
              tag="h6"
              className="fw-bold py-3 mt-5 text-center d-flex flex-column flex-md-row justify-content-evenly "
              style={{
                textAlign: "center",
                boxShadow: "4px 3px 10px darkslategray",
              }}
            >
              <span className="m-3 d-md-flex align-items-center">
                <ImClock />
                &nbsp; {tour.duration}
              </span>
              <span className="m-3 d-md-flex align-items-center">
                <GrUserManager />
                &nbsp;{tour.age}
              </span>
              <span className="m-3 d-md-flex align-items-center">
                <GoLocation />
                &nbsp;{tour.region}
              </span>
              <span className="m-3 d-md-flex align-items-center">{title}</span>
            </CardTitle>
          </div>
          <div>
            <ul className="py-5 mb-0">
              <li>
                <div>
                  <h4>Destination</h4>
                </div>
                <div className="listValue">
                  <p>{name}</p>
                </div>
              </li>

              <li>
                <div>
                  <h4>Region</h4>
                </div>
                <div className="listValue">
                  <p>{region}</p>
                </div>
              </li>

              <li>
                <div>
                  <h4>Departure</h4>
                </div>
                <div className="listValue">
                  <p>{departure}</p>
                </div>
              </li>
              <li>
                <div>
                  <h4>Departure Time</h4>
                </div>
                <div className="listValue">
                  <p>{departure_time}</p>
                </div>
              </li>
              <li>
                <div>
                  <h4>Return Time</h4>
                </div>
                <div className="listValue">
                  <p>{return_time}</p>
                </div>
              </li>
              <li>
                <div>
                  <h4>Included</h4>
                </div>
                <div className="listValue">
                  <Container>
                    <Row sm={1} md={2}>
                      {_id &&
                        included.map((perk) => (
                          <Col>
                            <FiPlus /> {perk}
                          </Col>
                        ))}
                    </Row>
                  </Container>
                </div>
              </li>
              {not_included && (
                <li>
                  <div>
                    <h4>Not Included</h4>
                  </div>
                  <div className="listValue">
                    <FiX />
                    &nbsp;
                    {not_included}
                  </div>
                </li>
              )}
            </ul>
            <div>
              <Slider
                {...settings}
                style={{ padding: "1rem", margin: "1.8rem 0" }}
              >
                {_id &&
                  gallery.map((image) => (
                    <div className="mb-5">
                      <div className="">
                        <img
                          src={image}
                          alt="Portrait"
                          className="carousel-image img-fluid"
                        />
                      </div>
                    </div>
                  ))}
              </Slider>
            </div>
          </div>
        </div>{" "}
        <div className="bookingForm">
          <form onSubmit={handleSubmit(onSubmit)}>
            <label>Name:</label>
            <input
              defaultValue={user.displayName}
              type="name"
              {...register("name")}
              placeholder="Enter your name"
            />
            <label>Email:</label>

            <input
              defaultValue={user.email}
              type="email"
              {...register("email")}
              placeholder="Enter your email "
            />
            <label>Phone Number:</label>

            <input
              defaultValue={user.phoneNumber}
              type="number"
              {...register("phone")}
              placeholder="Enter your phone number"
            />
            <label>Package ID:</label>
            {tour._id && (
              <input
                defaultValue={_id}
                type="text"
                {...register("packageId")}
                id="packageId"
              />
            )}
            <p className="text-danger alert-danger"> DO NOT EDIT!</p>

            <label>User Id:</label>

            <input
              defaultValue={user.uid}
              type="text"
              {...register("userId")}
              id="userId"
            />
            <p className="text-danger alert-danger"> DO NOT EDIT!</p>

            <input
              type="submit"
              value="book now"
              style={{ backgroundColor: "yellow", fontWeight: "bold" }}
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default TourDetails;
