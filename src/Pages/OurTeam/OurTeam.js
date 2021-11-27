import React from "react";
import { Col, Container } from "react-bootstrap";
import { Row } from "reactstrap";
import useTeam from "../../Hooks/useTeam";
import "./OurTeam.css";

const OurTeam = () => {
  const [ourTeam] = useTeam();
  console.log(ourTeam);
  return (
    <div>
      <div className="inner">
        <img
          src="https://i.ibb.co/4TTCY72/tour-1-title-8.jpg"
          alt="name"
          style={{ maxHeight: "620px", width: "100%" }}
        />
      </div>
      <div className="banner" style={{ marginBottom: "0" }}>
        {" "}
        <h1 className="banner-text">Our Team!!!</h1>
      </div>
      <div
        style={{ width: "100%", padding: "4rem 0", backgroundColor: "#f6f6f6" }}
      >
        <div className="article">
          <div className="article-header">
            <p className="fs-1" style={{ marginBottom: 0 }}>
              Meet And
              <span className="fw-bolder"> Work With</span>{" "}
              <span className="fw-bolder">Our Amazing</span>Travel Agents!!!
            </p>
          </div>
          <p>
            Do you want to travel but don’t know where you should go? Are you
            looking for a little clarity and inspiration to get your trip
            planning started? You’re in the right place!
          </p>
        </div>
      </div>
      <div className="ourTeam my-5 ms-md-5 ps-2">
        <Container fluid>
          <Row sm={1} md={2} lg={4} className="g-5 ">
            {ourTeam.map((teamMember) => {
              return (
                <Col className="">
                  <div className="teamcard my-5">
                    {/* <div className="inner"> */}
                    <img src={teamMember.image} alt={teamMember.name} />
                    {/* </div> */}
                    <div className="cardBody">
                      <h3>Name: {teamMember.name}</h3>
                      <h5>{teamMember.title}</h5>
                    </div>
                  </div>
                </Col>
              );
            })}
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default OurTeam;
