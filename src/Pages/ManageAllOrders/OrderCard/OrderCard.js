/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from "react";
import { Col, Spinner } from "react-bootstrap";
import useTours from "../../../Hooks/useTours";
import useOrderStatus from "../../../Hooks/useOrderStatus";
import "./OrderCard.css";

const OrderCard = ({ order }) => {
  const [tourList] = useTours();
  const [getOrder, setGetOrders] = useState({});

  /*   if (order.status) {
    console.log(order.status, order._id);
  } */
  if (order) {
    useEffect(() => {
      const orderedTour = tourList.find((tour) => tour._id === order.packageId);
      setGetOrders(orderedTour);
    }, [tourList, order.packageId]);
  }

  // Deny The Order
  const handleOrderDeny = (order) => {
    const proceed = window.confirm("Are you sure you want to DENY this Order");
    if (proceed) {
      console.log(order.status, "before");
      order.status = "Denied";
      console.log(order.status, "After");
      const url = `https://secret-ridge-18140.herokuapp.com/allOrders/${order._id}`;
      fetch(url, {
        method: "PUT",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(order),
      })
        .then((res) => res.json())
        .then((result) => {
          console.log(result);
          alert("Order has been Denied");
        });
    }
    // console.log(order.status);
  };

  const handleOrderApproval = (order) => {
    const proceed = window.confirm(
      "Are you sure you want to APPROVE this order?"
    );
    if (proceed) {
      console.log(order.status, "before");
      order.status = "Approved";
      console.log(order.status, "after");
      const url = `https://secret-ridge-18140.herokuapp.com/allOrders/${order._id}`;
      fetch(url, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(order),
      })
        .then((res) => res.json())
        .then((res) => {
          console.log(res);
          alert("Order has been approved");
        });
    }
  };

  //   const orderList = [...orderedTours];

  //   console.log("Order tourList", orderedTour);
  if (!getOrder) {
    return (
      <div className="isLoading">
        <Spinner animation="grow" />
        <Spinner animation="grow" />
        <Spinner animation="grow" />
      </div>
    );
  }
  if (getOrder) {
    return (
      <>
        {getOrder._id && (
          <Col>
            <div className="orderCard" key={getOrder._id}>
              <div className="inner">
                <img
                  src={getOrder.cover}
                  alt={getOrder.name}
                  className=" img-fluid"
                />
              </div>
              <div className="orderDetails text-start py-4 px-3">
                <h3>
                  {" "}
                  <b>{getOrder.name}</b>{" "}
                </h3>
                <p className="fw-bold">
                  Charge: $
                  <span style={{ color: "crimson" }}>{getOrder.cost}</span>{" "}
                </p>
                <span>
                  <p>Recipients Name: {order.name}</p>
                </span>
                <p>
                  Email: <b>{order.email}</b>{" "}
                </p>
                {order.phone && <p>phone: {order.phone}</p>}
                {order.status && <h6>Order Status: {order.status}</h6>}

                <br />
                <button
                  onClick={() => {
                    handleOrderApproval(order);
                  }}
                >
                  Approve
                </button>
                <button
                  onClick={() => {
                    handleOrderDeny(order);
                  }}
                >
                  Deny
                </button>
                <br />
              </div>
            </div>
          </Col>
        )}
      </>
    );
  }
};
export default OrderCard;
