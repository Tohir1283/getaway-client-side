import React, { useEffect, useState } from "react";
import Contacts from "../../../Components/Contacts/Contacts";

// Contact List for Home
const ContactList = () => {
  const [contacts, setContacts] = useState([]);
  useEffect(() => {
    fetch("https://secret-ridge-18140.herokuapp.com/contacts")
      .then((response) => response.json())
      .then((data) => setContacts(data));
  }, []);

  // console.log(contacts);
  return (
    <div
      style={{ width: "100%", backgroundColor: "#f6f6f6" }}
      className="d-md-flex flex-xs-column flex-md-row justify-content-evenly py-5 px-5"
      id="contact"
    >
      {contacts.map((contact) => (
        <Contacts contact={contact} key={contact._id} />
      ))}
    </div>
  );
};

export default ContactList;
