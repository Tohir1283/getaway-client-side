import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import "./DestinationDetails.css";

// Detailed Information of our destinations

const DestinationDetails = () => {
  const { destinationId } = useParams();
  const [destination, setDestination] = useState({});
  useEffect(() => {
    const url = `https://secret-ridge-18140.herokuapp.com/destinations/${destinationId}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => setDestination(data));
  }, [destinationId]);
  console.log(destinationId, destination);
  const { name, title, banner, description, images, municipality, gallery } =
    destination;

  return (
    <div>
      <div className=" inner">
        <img src={banner} alt={name} />
      </div>
      <Container fluid className="px-5 m-md-5">
        <div className="destinationDetails py-5 px-md-5 mx-md-5 text-start">
          <h1>
            {title} <b>{name}</b>{" "}
          </h1>
          <p className="my-md-5">{description}</p>
          <br />
          <br />
          <div className="d-flex flex-sm-column flex-md-row">
            {destination._id && (
              <div className="d-md-flex flex-md-row mx-auto">
                <img
                  src={images.img_1}
                  alt={destination.name}
                  style={{ maxWidth: "290px" }}
                  className="mx-2 mb-2"
                />
                <img
                  src={images.img_2}
                  alt={destination.name}
                  style={{ maxWidth: "290px" }}
                  className="mx-2 mb-2"
                />
                <img
                  src={images.img_3}
                  alt={destination.name}
                  style={{ maxWidth: "290px" }}
                  className="mx-2 mb-2"
                />
              </div>
            )}
          </div>
          <div className="municipalities my-5">
            <h2>Municipality</h2>
            <p className="my-5">{municipality}</p>
          </div>

          {/* Gallery Images For Destination Details */}
          <Row sm={1} md={3} lg={4} className="g-1">
            <Col>
              {destination._id && (
                <div className="galleryImages inner">
                  <img src={gallery.img_1} alt={destination.name} />
                </div>
              )}
            </Col>
            <Col>
              {destination._id && (
                <div className="galleryImages inner">
                  <img src={gallery.img_2} alt={destination.name} />
                </div>
              )}
            </Col>
            <Col>
              {destination._id && (
                <div className="galleryImages inner">
                  <img src={gallery.img_3} alt={destination.name} />
                </div>
              )}
            </Col>
            <Col>
              {destination._id && (
                <div className="galleryImages inner">
                  <img src={gallery.img_4} alt={destination.name} />
                </div>
              )}
            </Col>
            <Col>
              {destination._id && (
                <div className="galleryImages inner">
                  <img src={gallery.img_5} alt={destination.name} />
                </div>
              )}
            </Col>
            <Col>
              {destination._id && (
                <div className="galleryImages inner">
                  <img src={gallery.img_6} alt={destination.name} />
                </div>
              )}
            </Col>
            <Col>
              {destination._id && (
                <div className="galleryImages inner">
                  <img src={gallery.img_7} alt={destination.name} />
                </div>
              )}
            </Col>
            <Col>
              {destination._id && (
                <div className="galleryImages inner">
                  <img src={gallery.img_8} alt={destination.name} />
                </div>
              )}
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default DestinationDetails;
