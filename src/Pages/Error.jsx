import { Helmet } from "@dr.pogodin/react-helmet";
import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router";
import { motion } from "motion/react";
import Lottie from "lottie-react";
import ErrorLottie from "../assets/Lottie/Error.json"

const Error = () => {
  return (
    <section className="register py-25 ">
      <Helmet>
        <title>Book Case | 404</title>
      </Helmet>
      <div className="container mx-auto px-5 text-center">
        <div className="max-w-3xl mx-auto">
               <Lottie
              style={{ width: "100%", height: "100%" }}
              animationData={ErrorLottie}
              loop={true}
              ></Lottie>
              </div>

        <p className="text-xl mt-10 mb-5 text-gray-300">
          <span>Oops! Page not found </span><br /> The page you're looking for seems doesn't exist. 
        </p>
        <div className="flex justify-center">
          <Link to="/" className="gradient-btn flex items-center gap-3">
            <FaArrowLeft className="text-xl" />
            <span> Go Back Home</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Error;
