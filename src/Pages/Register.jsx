import React, { use, useState } from "react";
import { AuthContext } from "../Contex/AuthContex";
import { Link, Navigate, useLocation, useNavigate } from "react-router";
import { Helmet } from "@dr.pogodin/react-helmet";
import { LuEye, LuEyeClosed } from "react-icons/lu";
import Swal from "sweetalert2";
import { FaGoogle } from "react-icons/fa";
import Lottie from "lottie-react";
import RegisterLottie from "../assets/Lottie/register-lottie.json";
import axios from "axios";
import { baseUrl } from "../Libs/Utility";
import { motion } from "framer-motion";

const Register = () => {
  const { CreateUser, setUser, UpdateUser, GoogleSignIn, user } =
    use(AuthContext);
  const [errorMessage, setErrorMessage] = useState("");
  const [showpassword, setShowPassword] = useState(false);
  const location = useLocation();
  const locationState = location.state;
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

              if (locationState) {
                navigate(locationState);
              } else {
                navigate("/");
              }
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

              if (locationState) {
                navigate(locationState);
              } else {
                navigate("/");
              }
            }
          })
          .catch((err) => setErrorMessage(err.message));
      })
      .catch((err) => setErrorMessage(err.message));
  };

  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.18,
        ease:"linear"
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, x: -50 },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section className="register pb-25 pt-45">
      <div className="container mx-auto px-5">
        <Helmet>
          <title>Book Case | Register</title>
        </Helmet>

        <motion.div className="max-w-5xl mx-auto flex flex-col-reverse md:flex-row bg-primary text-gray-100 shadow-lg rounded-2xl gap-5 items-center overflow-hidden border-2 border-[#6745EB20]">
          <motion.div
            initial="hidden"
            animate="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
            className="form-box w-full md:w-1/2 p-6 md:p-10"
          >
            <form onSubmit={handleRegister}>
              <motion.h2
                variants={cardVariants}
                className="text-3xl md:text-4xl font-bold mb-1 text-white"
              >
                Register
              </motion.h2>
              <motion.p variants={cardVariants} className="mb-7 text-base md:text-xl text-gray-400">
                Start your reading journey with Book Case
              </motion.p>

              {/* Form Fields */}
              <motion.div variants={cardVariants} className="form-group mb-5">
                <label htmlFor="name" className="block mb-2 text-base md:text-xl">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full p-3 border border-gray-700 rounded focus:border-accent outline-none  text-sm md:text-lg"
                  placeholder="Enter your name"
                  required
                />
              </motion.div>

              <motion.div variants={cardVariants} className="form-group mb-5">
                <label htmlFor="email" className="block mb-2  text-base md:text-xl">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full p-3 border border-gray-700 rounded focus:border-accent outline-none  text-sm md:text-lg"
                  placeholder="Enter your email"
                  required
                />
              </motion.div>

              <motion.div variants={cardVariants} className="form-group mb-5">
                <label htmlFor="photoURL" className="block mb-2  text-base md:text-xl">
                  Photo URL
                </label>
                <input
                  type="text"
                  id="photo"
                  name="photoUrl"
                  className="w-full p-3 border border-gray-700 rounded focus:border-accent outline-none  text-sm md:text-lg"
                  placeholder="Enter your photo URL"
                  required
                />
              </motion.div>

              <motion.div
                variants={cardVariants}
                className="form-group mb-5 relative"
              >
                <label htmlFor="password" className="block mb-2  text-base md:text-xl">
                  Password
                </label>
                <input
                  type={showpassword ? "text" : "password"}
                  id="password"
                  name="password"
                  className="w-full p-3 border border-gray-700 rounded focus:border-accent outline-none text-sm md:text-lg"
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
                    <LuEye size={24} />
                  ) : (
                    <LuEyeClosed size={24} />
                  )}
                </button>
              </motion.div>

              {errorMessage && (
                <motion.p
                  variants={cardVariants}
                  className="text-red-500 text-sm text-center my-3"
                >
                  {errorMessage}
                </motion.p>
              )}

              <motion.div variants={cardVariants}>
                <motion.button
                  type="submit"
                  className="btn btn-accent text-white block w-full uppercase text-base md:text-lg"
                >
                  REGISTER
                </motion.button>
              </motion.div>
            </form>

            <motion.p
              variants={cardVariants}
              className="font-semibold text-center mt-2 text-base md:text-lg"
            >
              Already Have An Account?{" "}
              <Link
                className="text-violet-400 hover:text-violet-600 text-base md:text-lg"
                to="/login"
              >
                Login
              </Link>
            </motion.p>

            <motion.div
              variants={cardVariants}
              className="flex items-center my-4 gap-2"
            >
              <hr className="flex-grow border-gray-300" />
              <span className="text-gray-400 text-sm">OR</span>
              <hr className="flex-grow border-gray-300" />
            </motion.div>

            <motion.div variants={cardVariants} className="social-login mt-5">
              <button
                onClick={handleGoogle}
                className="bg-[#00b4d8] text-white hover:bg-[#009bd8] w-full flex items-center gap-2 py-2 px-5 text-center rounded-md justify-center"
              >
                <FaGoogle size={20} />
                <span className=" font-medium text-base md:text-lg">
                  Continue With Google
                </span>
              </button>
            </motion.div>
          </motion.div>

          <motion.div className="img-box w-full md:w-1/2 h-auto md:h-[800px]">
            <Lottie
              style={{ width: "100%", height: "100%" }}
              animationData={RegisterLottie}
              loop
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Register;
