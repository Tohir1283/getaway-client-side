import { useEffect, useState } from "react";

const useDestinations = () => {
  const [destinations, setDestinations] = useState([]);

  useEffect(() => {
    const url = "https://secret-ridge-18140.herokuapp.com/destinations";
    fetch(url)
      .then((response) => response.json())
      .then((data) => setDestinations(data));
  }, []);

  return [destinations, setDestinations];
};

export default useDestinations;
