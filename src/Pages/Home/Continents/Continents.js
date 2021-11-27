import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Continent.css";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const Continents = () => {
  return (
    <div style={{ width: "98%", marginLeft: "1rem" }}>
      <Container
        style={{
          paddingLeft: 0,
          paddingRight: 0,
          width: "100%",
        }}
        fluid
      >
        <Row style={{ paddingLeft: 0, paddingRight: 0 }}>
          <Col
            xs={12}
            md={4}
            style={{ paddingLeft: 0, paddingRight: 0, boxSizing: "border-box" }}
          >
            {/* <div className="image-container"> */}
            <img
              src="https://getaway.qodeinteractive.com/wp-content/uploads/2017/08/h1-banner-img-3.jpg"
              alt="America"
              className="img-fluid continent-image"
            />
            {/* </div> */}
          </Col>
          <Col xs={12} md={4} style={{ paddingLeft: 0, paddingRight: 0 }}>
            <div className="article-details">
              <h3>Unique Cultures, America</h3>
              <br />
              <br />
              <p>
                Tourism in the United States is a large industry that serves
                millions of international and domestic tourists yearly.
                Foreigners visit the U.S. to see natural wonders, cities,
                historic landmarks, and entertainment venues. Americans seek
              </p>

              <button className="button-primary">
                learn more
                <MdOutlineKeyboardArrowRight className="buttonIcon" />{" "}
              </button>
            </div>
          </Col>
          <Col xs={12} md={4} style={{ paddingLeft: 0, paddingRight: 0 }}>
            <div className="continent-details">
              <div className="containerBackground">
                <h1
                  style={{
                    fontSize: "6rem",
                    fontFamily: "'Damion', cursive",
                    fontWeight: "bold",
                  }}
                >
                  America
                </h1>
              </div>
              <div className="container-name">
                <h1
                  style={{
                    fontSize: "6rem",
                    fontFamily: "'Damion', cursive",
                    fontWeight: "bold",
                  }}
                >
                  America
                </h1>
              </div>
            </div>
          </Col>
        </Row>

        <Row style={{ paddingLeft: 0, paddingRight: 0 }}>
          <Col xs={12} md={4} style={{ paddingLeft: 0, paddingRight: 0 }}>
            <div className="continent-details">
              <div className="containerBackground">
                <h1
                  style={{
                    fontSize: "6rem",
                    fontFamily: "'Damion', cursive",
                    fontWeight: "bold",
                  }}
                >
                  Europe
                </h1>
              </div>
              <div className="container-name">
                <h1
                  style={{
                    fontSize: "6rem",
                    fontFamily: "'Damion', cursive",
                    fontWeight: "bold",
                  }}
                >
                  Europe
                </h1>
              </div>
            </div>
          </Col>
          <Col xs={12} md={4} style={{ paddingLeft: 0, paddingRight: 0 }}>
            <img
              src="https://getaway.qodeinteractive.com/wp-content/uploads/2017/08/h1-banner-img-1.jpg"
              alt="Europe"
              className="img-fluid continent-image "
            />
          </Col>
          <Col xs={12} md={4} style={{ paddingLeft: 0, paddingRight: 0 }}>
            <div className="article-details">
              <h3>Finest Cuisine, Europe</h3>
              <br />
              <br />
              <p>
                The outstanding growth industry of tourism—supplementing
                business, professional, and student travel—brings employment and
                foreign exchange to many Europeans, especially in the
                Mediterranean countries, with their combination of sunshine.
              </p>

              <button className="button-primary">
                learn more
                <MdOutlineKeyboardArrowRight className="buttonIcon" />{" "}
              </button>
            </div>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={4} style={{ paddingLeft: 0, paddingRight: 0 }}>
            <img
              src="https://getaway.qodeinteractive.com/wp-content/uploads/2017/08/h1-banner-img-2.jpg"
              alt="Asia"
              className="img-fluid continent-image"
            />
          </Col>
          <Col xs={12} md={4} style={{ paddingLeft: 0, paddingRight: 0 }}>
            <div className="article-details">
              <h3>A Place to heal , Asia</h3>
              <br />
              <br />
              <p>
                Asia covers a lot of land area and encompasses hundreds of
                natural scenic wonders. Towering mountains, white-sand beaches,
                and virgin rainforest parks make up some of the most beautiful
                natural attractions in Asia.
              </p>

              <button className="button-primary">
                learn more
                <MdOutlineKeyboardArrowRight className="buttonIcon" />{" "}
              </button>
            </div>
          </Col>
          <Col xs={12} md={4} style={{ paddingLeft: 0, paddingRight: 0 }}>
            <div className="continent-details">
              <div className="containerBackground">
                <h1
                  style={{
                    fontSize: "6rem",
                    fontFamily: "'Damion', cursive",
                    fontWeight: "bold",
                  }}
                >
                  Asia
                </h1>
              </div>
              <div className="container-name">
                <h1
                  style={{
                    fontSize: "6rem",
                    fontFamily: "'Damion', cursive",
                    fontWeight: "bold",
                  }}
                >
                  Asia
                </h1>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Continents;
