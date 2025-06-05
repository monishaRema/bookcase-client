import React, { use, useState } from "react";
import { AuthContext } from "../Contex/AuthContex";
import { Link, Navigate, useNavigate } from "react-router";
import { Helmet } from "@dr.pogodin/react-helmet";
import { LuEye, LuEyeClosed } from "react-icons/lu";
import Swal from "sweetalert2";
import { FaGoogle } from "react-icons/fa";
import Lottie from "lottie-react";
import RegisterLottie from "../assets/Lottie/register-lottie.json";
import axios from "axios";
import { baseUrl } from "../Libs/Utility";

const Register = () => {
  const { CreateUser, setUser, UpdateUser, GoogleSignIn, user } =
    use(AuthContext);
  const [errorMessage, setErrorMessage] = useState("");
  const [showpassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  if (user) {
    return <Navigate to="/"></Navigate>;
  }

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const displayName = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photoURL = form.photoUrl.value;

    setErrorMessage("");

    const hasLowercase = /[a-z]/.test(password);
    const hasUppercase = /[A-Z]/.test(password);
    const hasNumber = /[0-9]/.test(password);

    if (password.length < 6) {
      setErrorMessage("Password must be at least 6 characters long.");
      return;
    }
    if (!hasLowercase) {
      setErrorMessage("Password must include at least one lowercase letter.");
      return;
    }
    if (!hasUppercase) {
      setErrorMessage("Password must include at least one uppercase letter.");
      return;
    }
    if (!hasNumber) {
      setErrorMessage("Password must include at least one number.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setErrorMessage("Please enter a valid email address.");
      return;
    }

    const updateProfile = () => {
      const userDetails = {
        displayName,
        photoURL,
      };

      UpdateUser(userDetails);
    };
    CreateUser(email, password)
      .then((currentUser) => {
        setUser(currentUser);
        updateProfile();

        const userData = {
          name: displayName,
          email,
          photo: photoURL,
        };
        axios
          .post(`${baseUrl}/user`, userData)
          .then((res) => {
            console.log(res.data);
            if (res.data.insertedId) {
              Swal.fire({
                position: "center",
                icon: "success",
                title: "You have registered successfully",
                showConfirmButton: false,
                timer: 1500,
              });
              form.reset();

              navigate("/");
            }
          })
          .catch((err) => setErrorMessage(err.message));
      })
      .catch((err) => {
        setErrorMessage(err.message);
      });
  };

  const handleGoogle = () => {
    GoogleSignIn()
      .then((result) => {
        setUser(result.user);
        const userData = {
          name: result.user.displayName,
          email: result.user.email,
          photo: result.user.photoURL,
        };
        axios
          .post(`${baseUrl}/user`, userData)
          .then((res) => {

            if (res.data.success == true) {
              Swal.fire({
                position: "center center",
                icon: "success",
                title: "You have logged in successfully",
                showConfirmButton: false,
                timer: 1500,
              });

              navigate("/");
            }
          })
          .catch((err) => setErrorMessage(err.message));
      })
      .catch((err) => setErrorMessage(err.message));
  };

  return (
    <section className="register pb-25 pt-45">
      <div className="container mx-auto px-5">
        <Helmet>
          <title>Book Case | Register</title>
        </Helmet>

        <div className="max-w-5xl mx-auto flex flex-col-reverse md:flex-row bg-primary text-gray-100 shadow-lg rounded-lg  gap-5 items-center overflow-hidden">
          <div className="form-box w-full md:w-1/2 p-6 md:p-10 ">
            <form onSubmit={handleRegister}>
              <h2 className="text-3xl font-bold mb-1 text-accent">Register</h2>
              <p className="mb-7 text-gray-400">
                Start your reading journey with Book Case
              </p>
              <div className="form-group mb-5">
                <label htmlFor="name" className="block mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full p-3 border border-gray-700 rounded focus:border-accent outline-none"
                  placeholder="Enter your name"
                  required
                />
              </div>

              <div className="form-group mb-5">
                <label htmlFor="email" className="block mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full p-3 border border-gray-700 rounded focus:border-accent outline-none"
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div className="form-group mb-5">
                <label htmlFor="photoURL" className="block mb-2">
                  Photo URL
                </label>
                <input
                  type="text"
                  id="photo"
                  name="photoUrl"
                  className="w-full p-3 border border-gray-700 rounded focus:border-accent outline-none"
                  placeholder="Enter your photo URL"
                  required
                />
              </div>
              <div className="form-group mb-5 relative">
                <label htmlFor="password" className="block mb-2">
                  Password
                </label>
                <input
                  type={showpassword ? "text" : "password"}
                  id="password"
                  name="password"
                  className="w-full p-3 border border-gray-700 rounded focus:border-accent outline-none"
                  placeholder="Enter your password"
                  required
                />

                <button
                  onClick={(e) => {
                    e.preventDefault();
                    setShowPassword(!showpassword);
                  }}
                  className="absolute top-12 right-6 text-accent"
                >
                  {showpassword ? (
                    <LuEye size={24}></LuEye>
                  ) : (
                    <LuEyeClosed size={24}></LuEyeClosed>
                  )}
                </button>
              </div>
              {errorMessage && (
                <p className="text-red-500 text-sm text-center my-3">
                  {errorMessage}
                </p>
              )}
              <button type="submit" className="btn btn-accent block w-full">
                REGISTER
              </button>
            </form>
            <p className="font-semibold text-center mt-2">
              Already Have An Account ?{" "}
              <Link className="text-accent hover:text-green-600" to="/login">
                Login
              </Link>
            </p>
            <div className="flex items-center my-4 gap-2">
              <hr className="flex-grow border-gray-300" />
              <span className="text-gray-400 text-sm">OR</span>
              <hr className="flex-grow border-gray-300" />
            </div>
            <div className="social-login mt-5">
              <button
                onClick={handleGoogle}
                className="bg-[#00b4d8] text-white hover:bg-[#009bd8] w-full flex items-center gap-2 py-2 px-5 text-center rounded-md justify-center"
              >
                <FaGoogle size={20}></FaGoogle>
                <span className="text-base font-medium">
                  Continue With Google
                </span>
              </button>
            </div>
          </div>
          <div className="img-box w-full md:w-1/2 h-auto md:h-[800px]">
            <Lottie
              style={{ width: "100%", height: "100%" }}
              animationData={RegisterLottie}
              loop={true}
            ></Lottie>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
