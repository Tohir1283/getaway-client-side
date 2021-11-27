/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from "react";
import { Col, Spinner } from "react-bootstrap";
import useTours from "../../../Hooks/useTours";

const MyOrderCard = (props) => {
  const { myOrder } = props;
  const [tourList] = useTours();
  const [myOrderedTour, setMyOrderedTour] = useState({});

  //   console.log(myOrder);

  if (myOrder) {
    useEffect(() => {
      const orderedTour = tourList.find(
        (tour) => tour._id === myOrder.packageId
      );
      setMyOrderedTour(orderedTour);
    }, [tourList, myOrder]);
  }

  //   console.log(myOrderedTour);

  if (!myOrderedTour) {
    return (
      <div className="isLoading">
        <Spinner animation="grow" />
        <Spinner animation="grow" />
        <Spinner animation="grow" />
      </div>
    );
  }

  if (myOrderedTour) {
    return (
      <>
        {myOrderedTour._id && (
          <Col sm={1} md={2} lg={4} className="g-5">
            <div className="orderCard" key={myOrderedTour._id}>
              <div className="inner">
                <img
                  src={myOrderedTour.cover}
                  alt={myOrderedTour.name}
                  className=" img-fluid"
                />
              </div>
              <div className="orderDetails text-start py-4 px-3">
                <h3>
                  {" "}
                  <b>{myOrderedTour.name}</b>{" "}
                </h3>
                <p className="fw-bold">
                  Charge: $
                  <span style={{ color: "crimson" }}>{myOrderedTour.cost}</span>{" "}
                </p>
                {myOrder.status && <h6>Order status: {myOrder.status}</h6>}
                <p>
                  {" "}
                  <b>Tour Duration:</b> {myOrderedTour.duration}
                </p>
                <button
                  onClick={() => {
                    props.handleDeleteOrder(myOrderedTour.name, myOrder._id);
                  }}
                >
                  Delete Order
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

export default MyOrderCard;
