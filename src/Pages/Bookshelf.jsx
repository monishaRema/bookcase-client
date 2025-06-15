import { Helmet } from "@dr.pogodin/react-helmet";
import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import Book from "../Components/Book/Book";
import axios from "axios";
import { baseUrl } from "../Libs/Utility";
import Spinner from "./Spinner";
import { motion } from "motion/react";

const Bookshelf = () => {
  const initialBooks = useLoaderData();
  const [loading, setLoading] = useState(true);
  const [books, setBooks] = useState(initialBooks);
  const [searchTerm, setSearchTerm] = useState("");
  const [readingStatus, setReadingStatus] = useState("");

  useEffect(() => {
    setLoading(true);
    const data = {
      params: {
        title: searchTerm,
        reading_status: readingStatus,
      },
    };
    axios
      .get(`${baseUrl}/all-books`, data)
      .then((res) => {
        setBooks(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, [searchTerm, readingStatus]);

  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.25,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section className="register py-25">
      <Helmet>
        <title>Book Case | Bookshelf</title>
      </Helmet>
      <div className="container mx-auto px-5">
        <motion.div
          initial="hidden"
          animate="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className="flex flex-col lg:flex-row gap-5 mb-10"
        >
          <motion.div variants={cardVariants} className="w-full lg:w-9/12">
            <input
              type="text"
              name="search"
              className="w-full  rounded-lg outline-0 border border-[#663ef840] focus:border-accent px-5 py-3"
              placeholder="Search"
              defaultValue={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </motion.div>
          <motion.div variants={cardVariants} className="w-full lg:w-3/12">
            <select
              onChange={(e) => setReadingStatus(e.target.value)}
              className="w-full  rounded-lg outline-0 border border-[#663ef840] focus:border-accent px-5 py-3 bg-transparent text-gray-100"
              defaultValue=""
            >
              <option
                className="bg-primary tex-white  text-xs md:text-base"
                value=""
                selected
                disabled
              >
                Filter By Reading status
              </option>
              <option className="bg-primary tex-white text-xs md:text-base" value="">
                All Status
              </option>
              <option className="bg-primary tex-white text-xs md:text-base" value="read">
                Read
              </option>
              <option className="bg-primary tex-white text-xs md:text-base" value="reading">
                Reading
              </option>
              <option className="bg-primary tex-white text-xs md:text-base" value="want-to-read">
                Want to Read
              </option>
            </select>
          </motion.div>
        </motion.div>
        {books.length <= 0 && (
          <div className="mt-20 flex flex-col items-center justify-center text-center text-gray-100">
            <h2 className="text-3xl lg:text-4xl font-semibold mb-2">
              No book found
            </h2>
            <p className="text-md text-gray-400 theme-p">
              Try searching for a different title or check your spelling.
            </p>
          </div>
        )}

        {loading ? (
          <Spinner></Spinner>
        ) : (
          <motion.div
            initial="hidden"
            animate="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
            className="flex flex-wrap gap-8 justify-center"
          >
            {books.length > 0 &&
              books.map((book) => (
                <motion.div
                  variants={cardVariants}
                  key={book._id}
                  className="w-full md:w-[350px]"
                >
                  <Book book={book} />
                </motion.div>
              ))}
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Bookshelf;
