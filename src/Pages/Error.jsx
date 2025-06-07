import { Helmet } from "@dr.pogodin/react-helmet";
import React from "react";
import { FaArrowLeft } from "react-icons/fa";


const Error = () => {
  return (
    <section className="register pb-25 pt-45">
      <Helmet>
        <title>Book Case | 404</title>
      </Helmet>
      <div className="container mx-auto px-5 text-center">
        <h1 className="text-center text-3xl md:text-4xl">Oops!</h1>
        <p>404 - Page Not Found</p>

      <div className="flex justify-center">

        <button className="gradient-btn flex items-center gap-3">
          <FaArrowLeft className="text-xl"/>
          <span> Go Back Home</span>
         
          </button>
      </div>
      </div>
    </section>
  );
};

export default Error;
