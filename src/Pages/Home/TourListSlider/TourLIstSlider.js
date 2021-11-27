/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import useTours from "../../../Hooks/useTours";
import Slider from "react-slick";

import TourListSliderCard from "./TourListSliderCard/TourListSliderCard";

const TourLIstSlider = () => {
  const [tourList] = useTours();
  const settings = {
    dots: true,
    infinite: true,
    centerMode: true,
    speed: 1000,
    autoplay: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    swipeToSlide: true,
    pauseOnHover: true,
    autoplaySpeed: 2000,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className="pb-4" style={{ backgroundColor: "#f6f6f6" }}>
        <Slider {...settings} style={{ padding: "1rem" }}>
          {tourList.map((tour) => (
            <TourListSliderCard key={tour._id} tour={tour} />
          ))}
        </Slider>
      </div>
    </>
  );
};

export default TourLIstSlider;
