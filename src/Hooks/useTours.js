import { useEffect, useState } from "react";

const useTours = () => {
  const [tourList, setTourList] = useState([]);

  useEffect(() => {
    fetch("https://secret-ridge-18140.herokuapp.com/tourList")
      .then((res) => res.json())
      .then((data) => setTourList(data));
  }, []);
  return [tourList, setTourList];
};

export default useTours;
