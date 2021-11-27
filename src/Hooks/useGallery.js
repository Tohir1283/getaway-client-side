/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect, useState } from "react";

const useGallery = () => {
  const [gallery1, setGallery1] = useState([]);
  useEffect(() => {
    const url = "https://secret-ridge-18140.herokuapp.com/gallery1";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setGallery1(data));
  }, []);
  return [gallery1, setGallery1];
};

export default useGallery;
