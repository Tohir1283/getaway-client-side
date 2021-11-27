import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";
import "./Locations.css";

const Locations = () => {
  return (
    <>
      <Container
        fluid
        style={{ paddingLeft: 0, paddingRight: 0, width: "100%" }}
      >
        <Row>
          <Col lg={2}>
            <Row>
              <img
                src="https://i.ibb.co/y6WvKTt/tour-1-img-1-550x550.jpg"
                alt=""
                className="locations-image"
              />
            </Row>
            <Row>
              <img
                src="https://i.ibb.co/Yct5Cyt/tour-1-img-6-550x1100.jpg"
                alt=""
                className="locations-image"
              />
            </Row>
          </Col>
          <Col sm={12} lg={8}>
            <Row style={{ paddingLeft: 0, paddingRight: 0 }}>
              <Col lg={6}>
                <Row>
                  <img
                    src="https://i.ibb.co/qdpGKZY/tour-1-img-2.jpg"
                    alt=""
                    className="locations-image"
                    style={{ maxHeight: "635px" }}
                  />
                </Row>
              </Col>
              <Col sm={12} lg={6}>
                <Row>
                  <Col lg={6} style={{ paddingLeft: 0, paddingRight: 0 }}>
                    <img
                      src="https://i.ibb.co/Lzs4MSw/tour-1-img-3-292x550.jpg"
                      alt=""
                      className="locations-image image-fluid"
                      style={{ maxWidth: "320px" }}
                    />
                  </Col>
                  <Col lg={6} style={{ paddingLeft: 0, paddingRight: 0 }}>
                    <img
                      src="https://i.ibb.co/xz16wzY/tour-1-img-4-292x550.jpg"
                      alt=""
                      className="locations-image image-fluid"
                      style={{ maxWidth: "320px" }}
                    />
                  </Col>
                </Row>
                <Row style={{ paddingLeft: 0, paddingRight: 0 }}>
                  <Col style={{ paddingLeft: 0, paddingRight: 0 }}>
                    <div className="location-details">
                      <h3>Corfu, Greece</h3>
                      <p>
                        One of the most popular holiday destinations in Greece,
                        Corfu is an island in the Ionian Sea known for its
                        cosmopolitan Old Town, spectacular sandy beaches and
                        beautiful landscapes.Corfu is a very safe place to
                        travel.
                      </p>

                      <Link to="/tours/61838055795088272ef83f11">
                        <button className="button-primary">
                          learn more
                          <MdOutlineKeyboardArrowRight className="buttonIcon" />{" "}
                        </button>
                      </Link>
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row style={{ paddingLeft: 0, paddingRight: 0 }}>
              <Col lg={3} style={{ paddingLeft: 0, paddingRight: 0 }}>
                <img
                  src="https://i.ibb.co/ggzccHk/tour-1-img-7-550x550.jpg"
                  alt=""
                  className="locations-image image-fluid"
                  style={{ maxWidth: "327px" }}
                />
              </Col>
              <Col lg={6} style={{ paddingLeft: 0, paddingRight: 0 }}>
                <img
                  src="https://i.ibb.co/xCn6RVM/tour-1-img-8-1100x550.jpg"
                  alt=""
                  className="locations-image"
                  style={{ maxWidth: "655px" }}
                />
              </Col>
              <Col lg={3} style={{ paddingLeft: 0, paddingRight: 0 }}>
                <img
                  src="https://i.ibb.co/M7gDPn9/tour-1-img-9-550x550.jpg"
                  alt=""
                  className="locations-image image-fluid"
                  style={{ maxWidth: "327px" }}
                />
              </Col>
            </Row>
          </Col>
          <Col>
            <Row>
              <img
                src="https://i.ibb.co/HVRFZt5/tour-1-img-5-550x550.jpg"
                className="locations-image"
                alt=""
              />
            </Row>
            <Row>
              <img
                src="https://i.ibb.co/2hFwj3k/tour-1-img-10-550x1100.jpg"
                alt=""
                className="locations-image"
              />
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Locations;

// https://i.ibb.co/y6WvKTt/tour-1-img-1-550x550.jpg
// https://i.ibb.co/qdpGKZY/tour-1-img-2.jpg
// https://i.ibb.co/Lzs4MSw/tour-1-img-3-550x550.jpg
// https://i.ibb.co/xz16wzY/tour-1-img-4-550x550.jpg
// https://i.ibb.co/HVRFZt5/tour-1-img-5-550x550.jpg
// https://i.ibb.co/Yct5Cyt/tour-1-img-6-550x1100.jpg
// https://i.ibb.co/ggzccHk/tour-1-img-7-550x550.jpg
// https://i.ibb.co/xCn6RVM/tour-1-img-8-1100x550.jpg
// https://i.ibb.co/M7gDPn9/tour-1-img-9-550x550.jpg
// https://i.ibb.co/2hFwj3k/tour-1-img-10-550x1100.jpg
