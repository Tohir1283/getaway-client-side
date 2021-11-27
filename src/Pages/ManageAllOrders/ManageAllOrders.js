import React from "react";
import { Container, Row } from "react-bootstrap";
import useAllOrders from "../../Hooks/useAllOrders";
import "./ManageAllOrders.css";
import OrderCard from "./OrderCard/OrderCard";

const ManageAllOrders = () => {
  const [allOrders] = useAllOrders();
  return (
    <div className="orders mb-5 ">
      <div>
        <div className="inner">
          <img
            src="https://getaway.qodeinteractive.com/wp-content/uploads/2017/08/destinations-1-title-12.jpg"
            alt="banner"
          />
        </div>
        <div className="manageOrders">
          <Container fluid className="m-4">
            <Row sm={1} md={2} lg={4} className="g-3">
              {allOrders.map((order) => (
                <OrderCard key={order._id} order={order} />
              ))}
            </Row>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default ManageAllOrders;
