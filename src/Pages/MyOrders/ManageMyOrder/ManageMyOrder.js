import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import useAuth from "../../../Hooks/useAuth";
import MyOrderCard from "../MyOrderCard/MyOrderCard";

const ManageMyOrder = () => {
  const [myOrders, setMyOrders] = useState([]);
  const { user } = useAuth();

  const handleDeleteOrder = (name, id) => {
    const proceed = window.confirm(
      `Are you sure you want to delete this order? ${name}`
    );
    if (proceed) {
      const url = `https://secret-ridge-18140.herokuapp.com/allOrders/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert(`Your Booking of ${name} has been deleted`);
            const remainingBookings = myOrders.filter(
              (order) => order._id !== id
            );
            setMyOrders(remainingBookings);
          }
        });
    }
  };

  useEffect(() => {
    fetch("https://secret-ridge-18140.herokuapp.com/allOrders")
      .then((response) => response.json())
      .then((data) => {
        setMyOrders(data.filter((order) => order.userId === user.uid));
        // console.log(data);
      });
  }, [user]);
  //   console.log(myOrders);
  return (
    <div className="py-5 ms-4">
      <Container>
        <Row>
          {myOrders.map((myOrder) => (
            <MyOrderCard
              key={myOrder._id}
              myOrder={myOrder}
              handleDeleteOrder={handleDeleteOrder}
            />
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default ManageMyOrder;
