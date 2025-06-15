import React, { use, useEffect, useState } from "react";
import { AuthContext } from "../Contex/AuthContex";

import SignleBook from "../Components/Book/SignleBook";
import { SlBookOpen } from "react-icons/sl";
import { Link } from "react-router";
import { FaPlus } from "react-icons/fa";
import Spinner from "./Spinner";
import UseAxiosSecure from "../Hooks/UseAxiosSecure";
import { motion } from "motion/react";
import { Helmet } from "@dr.pogodin/react-helmet";

const MyBooks = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const { user } = use(AuthContext);
  const axiosSecure = UseAxiosSecure();

  useEffect(() => {
    if (!user?.email) return;

    const fetchBooks = async () => {
      try {
        setLoading(true);
        const res = await axiosSecure.get(`/book?email=${user.email}`);
        setBooks(res.data);
      } catch (err) {
        console.error("Failed to fetch books:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchBooks();
  }, [user?.email, axiosSecure]);

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
    <section className="py-25 bg-gradient-r from-primary to-secondary">
      <Helmet>
        <title>Book Case | My Books</title>
      </Helmet>

      {loading ? (
        <Spinner></Spinner>
      ) : (
        <div className="container mx-auto px-5">
          <motion.div
            initial="hidden"
            animate="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
            className="mb-20 max-w-[900px] mx-auto"
          >
            <div className="img-box bg-gradient-to-l from-[#001e2b10]  to-accent rounded-full w-[120px] h-[120px] mx-auto flex justify-center items-center mb-10 group">
              <SlBookOpen className="size-15 group-hover:rotate-360 transition duration-1000 ease-in-out" />
            </div>
            <motion.h1
              key={0}
              variants={cardVariants}
              className="text-center text-4xl md:text-5xl font-semibold mb-5"
            >
              {books.length > 0 ? `My Books` : `No book found in your shelf`}
            </motion.h1>
            <motion.p
              key={1}
              variants={cardVariants}
              className="text-center text-xl max-w-3xl mx-auto mb-5 text-gray-400"
            >
              {books.length > 0
                ? `Manage your personal book collection and track your reading progress.Keep track of what you’ve read and what’s next on your
              reading list.`
                : `Start building your personal library and unlock the full power of your reading journey. Add your first book to begin tracking and sharing your progress.`}
            </motion.p>
            <motion.div
              key={3}
              variants={cardVariants}
              className="flex justify-center"
            >
              <Link
                to="/add-book"
                className="btn btn-lg btn-accent hover:bg-violet-600 flex items-center text-lg text-gray-100"
              >
                <FaPlus size={20} />
                <span>Add Book to Shelf</span>
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            initial="hidden"
            animate="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {books.length > 0 &&
              books?.map((book) => (
                <motion.div key={book._id} variants={cardVariants}>
                  <SignleBook setBooks={setBooks} books={books} book={book} />
                </motion.div>
              ))}
          </motion.div>
        </div>
      )}
    </section>
  );
};

export default MyBooks;
