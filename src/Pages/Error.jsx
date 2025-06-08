import { Helmet } from "@dr.pogodin/react-helmet";
import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router";
import { motion } from "motion/react";

const Error = () => {
  return (
    <section className="register pb-25 pt-45">
      <Helmet>
        <title>Book Case | 404</title>
      </Helmet>
      <div className="container mx-auto px-5 text-center">
        <motion.h1
          initial={{ y: 0, opacity: 0.5, scale: 0.95 }}
          animate={{
            y: [-5, -20, -5],
            opacity: [0.5, 1, 0.5],
            scale: [0.95, 1, 0.95],
            color: ["#00ED6399", "#00ED64", "#FFFFFF", "#00ED6399"]
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut",
          }}
          className="text-center text-[120px] mb-10"
        >
          404
        </motion.h1>

        <p className="text-xl mb-10">
          Oops! Page not found <br /> The page you're looking for seems to have
          wandered off into the digital void.{" "}
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
