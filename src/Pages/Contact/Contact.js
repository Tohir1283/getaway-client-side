import React from "react";
import ContactList from "../Home/ContactList/ContactList";

const Contact = () => {
  return (
    <div>
      <div className="inner">
        <img
          src=" https://i.ibb.co/bvXSMLG/tour-1-title-7.jpg"
          alt="Banner"
          style={{ maxHeight: "620px", width: "100%" }}
        />
      </div>
      <div className="banner" style={{ marginBottom: "0" }}>
        {" "}
        <h1 className="banner-text">Contact us!!!</h1>
      </div>
      <ContactList />
    </div>
  );
};

export default Contact;
