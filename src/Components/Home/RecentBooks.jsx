import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { motion } from "motion/react";
import { baseUrl } from "../../Libs/Utility";
import Book from "../Book/Book";
import axios from "axios";
import Spinner from "../../Pages/Spinner";

const RecentBooks = () => {
  const [latestBook, setLatestBook] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`${baseUrl}/recent-books/`)
      .then((result) => {
        setLatestBook(result.data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

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
  if (loading) {
    return <Spinner></Spinner>;
  }

  return (
    <motion.section className="py-25 bg-gradient-to-b from-secondary to-primary">
      <div className="container mx-auto px-5">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          <motion.h2
            key={0}
            variants={cardVariants}
            className="text-3xl md:text-5xl text-center mb-5 font-bold"
          >
            Recently added to Shelf
          </motion.h2>
          <motion.p
            key={1}
            variants={cardVariants}
            className="text-gray-300 mb-10 max-w-2xl mx-auto text-center text-lg"
          >
            Discover the most popular books loved by readers. Explore trending
            titles across genres and find your next great read.
          </motion.p>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3"
        >
          {latestBook.length > 0 &&
            latestBook.map((book) => (
              <motion.div key={book._id} variants={cardVariants}>
                <Book book={book} />
              </motion.div>
            ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default RecentBooks;
