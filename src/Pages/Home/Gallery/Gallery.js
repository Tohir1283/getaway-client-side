import React from "react";

const Gallery = ({ image }) => {
  return (
    <>
      <div className="inner">
        <img
          src={image.img}
          alt="banner"
          className="img-fluid"
          style={{ maxWidth: "320px" }}
        />
      </div>
    </>
  );
};

export default Gallery;
