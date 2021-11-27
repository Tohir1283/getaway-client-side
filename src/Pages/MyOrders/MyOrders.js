import React from "react";
import ManageMyOrder from "./ManageMyOrder/ManageMyOrder";

const MyOrders = () => {
  return (
    <div>
      <div className="orders ">
        <div>
          <div className="inner">
            <img
              src="https://getaway.qodeinteractive.com/wp-content/uploads/2017/08/tour-4-title-5.jpg"
              alt="banner"
            />
          </div>
          <div className="banner" style={{ marginBottom: "0" }}>
            {" "}
            <h1 className="banner-text">Orders!!!</h1>
          </div>
          <div className="manageOrders">
            <ManageMyOrder />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyOrders;
