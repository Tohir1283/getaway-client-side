import React from "react";
import "./Contacts.css";
import { IoIosCall } from "react-icons/io";
import { BsChatText } from "react-icons/bs";
import { GoLocation } from "react-icons/go";

// Contact List
const Contacts = ({ contact }) => {
  const { office, phone, email, address } = contact;
  return (
    <div className="contactInfo">
      <h6 style={{ fontWeight: "900", marginBottom: "1rem" }}>{office}</h6>

      <h6>
        <span>
          {" "}
          <IoIosCall style={{ color: "red" }} />{" "}
        </span>
        {phone}
      </h6>
      <h6>
        <span>
          {" "}
          <BsChatText style={{ color: "red" }} />{" "}
        </span>{" "}
        {email}
      </h6>
      <h6>
        <span>
          <GoLocation style={{ color: "red" }} />
        </span>{" "}
        {address}
      </h6>
    </div>
  );
};

export default Contacts;
