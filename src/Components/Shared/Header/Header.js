import React, { useState } from "react";
import { Container, Nav, Navbar, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { GoSearch } from "react-icons/go";
import { BsCartFill } from "react-icons/bs";
import "./Header.css";
import SideMenu from "../../SideMenu/SideMenu";
import useAuth from "../../../Hooks/useAuth";

const Header = () => {
  const { user, logOut } = useAuth();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleSearchOptions = () => {
    document.getElementById("searchContainer").style = "display: block";
  };
  const handleSearchDisplay = () => {
    document.getElementById("searchContainer").style = "display:none";
  };

  const handleLogOut = () => {
    logOut();
    console.log("logOut", user);
  };

  return (
    <div style={{ backgroundColor: "whitesmoke" }}>
      <div id="searchContainer" className="searchContainer px-5 py-3">
        <input
          className="px-4 py-2"
          type="text"
          placeholder={`Search`}
          onBlur={handleSearchDisplay}
        />
      </div>
      <nav className=" d-flex flex-column flex-md-row justify-content-center align-items-center px-md-5 px-sm-2 pt-2">
        <div className="image-container">
          <img
            src="https://i.ibb.co/8Pdtp6y/dark-logo-img.png"
            alt="getAway"
            className="img-fluid"
          />
        </div>
        <Navbar expand="lg">
          <Container>
            <Navbar.Toggle
              aria-controls="basic-navbar-nav"
              className="mx-auto mt-3 mb-3"
            />

            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mx-auto fw-bolder text-dark">
                <Nav.Link as={Link} to="/home#home">
                  Home
                </Nav.Link>
                <Nav.Link as={Link} to="/destinations#destinations">
                  Destinations
                </Nav.Link>
                <Nav.Link as={Link} to="/tours#tours">
                  Tours
                </Nav.Link>

                <Nav.Link as={Link} to="/about#about">
                  About us
                </Nav.Link>
                <Nav.Link as={Link} to="/ourTeam#ourTeam">
                  Our Team
                </Nav.Link>
                <Nav.Link as={Link} to="/contact#contact">
                  Contact us
                </Nav.Link>

                {user.email && (
                  <Nav.Link as={Link} to="/addDestination">
                    Add Destination
                  </Nav.Link>
                )}
                {user.email && (
                  <Nav.Link as={Link} to="/myOrders">
                    Orders
                  </Nav.Link>
                )}

                {user.email && (
                  <Nav.Link as={Link} to="/manageAllOrders">
                    Manage All Orders
                  </Nav.Link>
                )}

                {!user.email && (
                  <Nav.Link as={Link} to="/logIn">
                    Log in
                  </Nav.Link>
                )}

                {user.email && (
                  <Nav.Link onClick={handleLogOut}>Log out</Nav.Link>
                )}
                {user.email && <Nav.Link>{user.displayName}</Nav.Link>}
              </Nav>

              <div className="mx-md-3 mt-1 mx-auto " style={{ width: "50px" }}>
                <GoSearch onClick={handleSearchOptions} className="fs-5" />
              </div>
              <Button variant="light" onClick={handleShow} className=" m-0 p-0">
                <BsCartFill
                  style={{
                    padding: "0",
                    textDecoration: "none",
                  }}
                  className="fs-5"
                />
              </Button>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </nav>{" "}
      <SideMenu placement="end" handleClose={handleClose} show={show} />
    </div>
  );
};

export default Header;
