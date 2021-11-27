import React from "react";
import { ProgressBar } from "react-bootstrap";
import ContactList from "../Home/ContactList/ContactList";
import "./About.css";

// About Our Agency

const About = () => {
  return (
    <div>
      <div className="inner">
        <img
          src="https://getaway.qodeinteractive.com/wp-content/uploads/2017/09/about-us-title-img-1.jpg"
          alt="banner"
          style={{ maxHeight: "620px", width: "100%" }}
        />
      </div>
      <div className="banner" style={{ marginBottom: "0" }}>
        {" "}
        <h1 className="banner-text">About us!!!</h1>
      </div>
      <div
        className="d-md-flex justify-content-evenly"
        style={{ width: "100%" }}
      >
        <div
          className=" mx-auto mx-md-5 px-md-5 w-75"
          style={{
            margin: "3rem 0",

            textAlign: "start",
          }}
        >
          <h3>
            <span className="fw-bold text-danger">About us</span>
          </h3>
          <p>
            A global travel agency is a provider of travel management services
            on a global scale. These agencies differ in terms of their size and
            scale, as well as the services that are on offer. These agencies are
            used by companies and organizations that engage in international
            travel and need professional help.Travel agents sell transportation,
            lodging, and admission to entertainment activities to individuals
            and groups planning trips. They offer advice on destinations, plan
            trip itineraries, and make travel arrangements for clients.A travel
            agency is a private retailer or public service that provides travel
            and tourism-related services to the general public on behalf of
            accommodation or travel suppliers to offer different kinds of
            travelling packages for each destination.Travel agents get paid on
            commission by hotels, airlines and resorts, but many more are
            charging fees on top of that because of their time. ... Some
            agencies charge fees up front and then drop the fees when the client
            actually books.
          </p>
        </div>
        <div style={{ width: "50%", textAlign: "start", margin: "3rem" }}>
          <div className="progressBars mb-4">
            <h4>Accommodation</h4>
            <ProgressBar variant="dark" now={75} />
          </div>
          <div className="progressBars mb-4">
            <h4>Destination</h4>
            <ProgressBar variant="dark" now={65} />
          </div>
          <div className="progressBars mb-4">
            <h4>Meals</h4>
            <ProgressBar variant="dark" now={95} />
          </div>
          <div className="progressBars mb-4">
            <h4>Transportation</h4>
            <ProgressBar variant="dark" now={70} />
          </div>
        </div>
      </div>
      <ContactList />
    </div>
  );
};

export default About;
