import React from "react";
import { useForm } from "react-hook-form";
import {
  useHistory,
  useLocation,
} from "react-router-dom/cjs/react-router-dom.min";
import useAuth from "../../Hooks/useAuth";
import "./LogIn.css";

const LogIn = () => {
  const { register, handleSubmit } = useForm();
  const { setIsLoading, signInUsingGoogle, setUser } = useAuth();
  const onSubmit = (data) => console.log(data);
  const location = useLocation();
  const history = useHistory();
  const redirect_url = location?.state?.from || "/home";

  const handleGoogleLogIn = () => {
    console.log("clicked");

    signInUsingGoogle()
      .then((res) => {
        setUser(res.user);
        setIsLoading(false);
        history.push(redirect_url);
      })
      .finally(() => {
        // setIsLoading(false);
      });
  };

  return (
    <div className="logInPage">
      <div className="logInSection">
        <form onSubmit={handleSubmit(onSubmit)}>
          <input {...register("email")} placeholder="Enter your email " />
          <input
            type="text"
            {...register("password", { min: 8 })}
            placeholder="Enter your password"
          />
          <input
            type="submit"
            style={{ backgroundColor: "yellow", fontWeight: "bold" }}
          />
        </form>
        <input
          onClick={handleGoogleLogIn}
          type="submit"
          value="Log in with your Google account"
          style={{ backgroundColor: "yellow", fontWeight: "bold" }}
        />
      </div>
    </div>
  );
};

export default LogIn;
