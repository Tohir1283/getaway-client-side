import React from "react";
import { Link } from "react-router-dom";
import { Card, CardBody, CardTitle, Container, Row, Col } from "reactstrap";
import useDestinations from "../../Hooks/useDestinations";

// Destination Details

const Destination = () => {
  const [destinations] = useDestinations([]);
  // console.log(destinations, "Destinations received");
  return (
    <>
      <Container className="mb-5" fluid>
        <Row xs={1} md={3} lg={4} className="g-1">
          {destinations.map((destination) => {
            return (
              <Col key={destination._id}>
                <Card>
                  {" "}
                  <Link to={`/destinations/${destination._id}`}>
                    <div className="inner">
                      <img
                        width="100%"
                        src={destination.cover}
                        alt={destination.name}
                      />
                    </div>
                  </Link>
                  <CardBody style={{ backgroundColor: "yellow" }}>
                    <CardTitle tag="h4" className="fw-bolder">
                      {destination.name}
                    </CardTitle>

                    {/* <Button>Button</Button> */}
                  </CardBody>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    </>
  );
};

export default Destination;
