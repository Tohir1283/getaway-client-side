import { useEffect, useState } from "react";

const useAllOrders = () => {
  const [allOrders, setAllOrders] = useState([]);
  useEffect(() => {
    const url = "https://secret-ridge-18140.herokuapp.com/allOrders";
    fetch(url)
      .then((response) => response.json())
      .then((data) => setAllOrders(data));
  }, []);
  return [allOrders, setAllOrders];
};
export default useAllOrders;
