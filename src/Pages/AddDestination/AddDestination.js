import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import "./AddDestination.css";

// Adding A service
const AddDestination = () => {
  // console.log("AddDestination");
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    // console.log(data);
    axios
      .post("https://secret-ridge-18140.herokuapp.com/destinations", data)
      .then((res) => {
        console.log(res);
        if (res.data.insertedId) {
          alert("Successfully Added the Destination");
          reset();
        }
      });
  };
  return (
    <div style={{ backgroundColor: "#f6f6f6f6", paddingBottom: "3rem" }}>
      <div className="inner">
        <img
          src="https://getaway.qodeinteractive.com/wp-content/uploads/2017/09/faq-title-img.jpg"
          alt="banner"
        />
      </div>
      <h2 style={{ paddingTop: "4rem" }}>
        {" "}
        <b>Add a Destination</b>{" "}
      </h2>
      <div className="addDestination ">
        {/* Form to Updata destination Data */}
        <form onSubmit={handleSubmit(onSubmit)}>
          <input {...register("name")} placeholder="Name of Destination" />
          <input {...register("title")} placeholder="Title of Destination" />
          <textarea
            {...register("description")}
            placeholder="Description of Destination"
          />
          <textarea
            {...register("municipality")}
            placeholder="Municipality of Destination"
          />
          <input
            {...register("cover")}
            placeholder="Cover of Destination card cover image (img-url)"
          />
          <input
            {...register("banner")}
            placeholder="Banner of Destination details page banner (img-url)"
          />
          <fieldset>
            <legend>Images for description</legend>
            <input
              {...register("images.img_1")}
              placeholder="Images of Destination details page description (img-1-url)"
            />
            <input
              {...register("images.img_2")}
              placeholder="Images of Destination details page description (img-2-url)"
            />
            <input
              {...register("images.img_3")}
              placeholder="Images of Destination details page description (img-3-url)"
            />
          </fieldset>

          {/* Images For Gallery */}
          <fieldset>
            <legend>Images for Gallery</legend>
            <input
              {...register("gallery.img_1")}
              placeholder="Image of Destination details page gallery (img-1-url)"
            />
            <input
              {...register("gallery.img_2")}
              placeholder="Image of Destination details page gallery (img-2-url)"
            />
            <input
              {...register("gallery.img_3")}
              placeholder="Image of Destination details page gallery (img-3-url)"
            />
            <input
              {...register("gallery.img_4")}
              placeholder="Image of Destination details page gallery (img-4-url)"
            />
            <input
              {...register("gallery.img_5")}
              placeholder="Image of Destination details page gallery (img-5-url)"
            />
            <input
              {...register("gallery.img_6")}
              placeholder="Image of Destination details page gallery (img-6-url)"
            />
            <input
              {...register("gallery.img_7")}
              placeholder="Image of Destination details page gallery (img-7-url)"
            />
            <input
              {...register("gallery.img_8")}
              placeholder="Image of Destination details page gallery (img-8-url)"
            />
          </fieldset>

          <input type="submit" style={{ backgroundColor: "lightyellow" }} />
        </form>
      </div>
    </div>
  );
};

export default AddDestination;
