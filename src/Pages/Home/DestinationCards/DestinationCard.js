import useDestinations from "../../../Hooks/useDestinations";
import Slider from "react-slick";
import "./DestinationCard.css";
import { Link } from "react-router-dom";

const DestinationCard = () => {
  const settings = {
    dots: true,
    infinite: true,
    centerMode: true,
    speed: 1000,
    autoplay: true,
    slidesToShow: 5,
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

  const [destinations] = useDestinations();

  return (
    <>
      <div className="pb-4" style={{ backgroundColor: "#f6f6f6" }}>
        <Slider {...settings} style={{ padding: "1rem" }}>
          {destinations.map((destination) => (
            <div className="carousel-container m-5" key={destination._id}>
              <Link to={`/destinations/${destination._id}`}>
                <div className="inner">
                  <img
                    src={destination.cover}
                    alt={destination.name}
                    className="carousel-image img-fluid"
                  />
                </div>
              </Link>
              <div className="carousel-details">
                <h4>{destination.name}</h4>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default DestinationCard;
