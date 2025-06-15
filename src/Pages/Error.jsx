import { Helmet } from "@dr.pogodin/react-helmet";
import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router";
import { motion } from "motion/react";
import Lottie from "lottie-react";
import ErrorLottie from "../assets/Lottie/Error.json";

const Error = () => {
  return (
    <section className="register ">
      <Helmet>
        <title>Book Case | 404</title>
      </Helmet>
      <div className="container mx-auto px-5 text-center md:text-start">
        <div className="flex flex-col-reverse md:flex-row gap-10 items-center">
          <div className="mb-15 md:mb-0">
            <h1 className="text-3xl md:text-5xl mb-5 font-bold">
              Oops! Page not found{" "}
            </h1>
            <p className="text-base md:text-lg mb-5 text-gray-400">
              The page you're looking for seems doesn't exist.
            </p>
            <div className="flex justify-center md:justify-start">
              <Link to="/" className="gradient-btn flex items-center gap-3">
                <FaArrowLeft className="text-xl" />
                <span> Go Back Home</span>
              </Link>
            </div>
          </div>
          <div className="max-w-2xl mx-auto">
            <Lottie
              style={{ width: "100%", height: "70%" }}
              animationData={ErrorLottie}
              loop={true}
            ></Lottie>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Error;
