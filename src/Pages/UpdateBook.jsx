import { Helmet } from "@dr.pogodin/react-helmet";
import React, { use } from "react";
import { AuthContext } from "../Contex/AuthContex";
import { FiEdit } from "react-icons/fi";

import Swal from "sweetalert2";
import { useLoaderData, useNavigate } from "react-router";
import { PiBookOpenBold } from "react-icons/pi";
import UseAxiosSecure from "../Hooks/UseAxiosSecure";
import { motion } from "framer-motion";
const UpdateBook = () => {
  const { user } = use(AuthContext);
  const book = useLoaderData();
  const navigate = useNavigate();
  const axiosSecure = UseAxiosSecure();

  const handleUpdateBook = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    data.upvotes = parseInt(data.upvotes);
    data.user_email = user?.email;
    data.user_name = user?.displayName;

    axiosSecure
      .put(`/book/${book._id}`, data)
      .then((result) => {
        if (result.data.modifiedCount) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "You have updated a book successfully",
            showConfirmButton: false,
            timer: 1500,
          });
          navigate("/my-books");
        }
      })
      .catch();
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.25,
      },
    },
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };
  return (
    <section className="register py-25">
      <div className="container mx-auto px-5">
        <Helmet>
          <title>Book Case | Add Book</title>
        </Helmet>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mb-20 max-w-5xl mx-auto"
        >
          <motion.div
            variants={fadeIn}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="img-box bg-gradient-to-l from-[#001e2b10]  to-accent rounded-full w-[120px] h-[120px] mx-auto flex justify-center items-center mb-10 group"
          >
            <PiBookOpenBold className="size-15 group-hover:rotate-360 transition duration-1000 ease-in-out" />
          </motion.div>
          <motion.h1
            variants={fadeInUp}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center text-3xl md:text-4xl font-semibold mb-10"
          >
            Update Your Book
          </motion.h1>
          <motion.p
            variants={fadeInUp}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center text-xl mb-10 max-w-3xl mx-auto text-gray-400"
          >
            Edit your book information and keep your collection up to date.
            Easily manage details to organize your personal library.
          </motion.p>
        </motion.div>

        <div className="theme-card-wrapper">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="show"
            viewport={{ once: true, amount: 0.2 }}
            className="theme-card-content"
          >
            <motion.h2
              variants={fadeInUp}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="mb-10 text-3xl md:text-4xl font-bold text-accent text-center"
            >
              Book Information
            </motion.h2>
            <motion.form onSubmit={handleUpdateBook}>
              <div className="flex flex-col md:flex-row gap-5">
                <motion.div
                  variants={fadeInUp}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="form-group mb-5 w-full md:w-1/2"
                >
                  <label htmlFor="book_title" className="block mb-2">
                    Book Title *
                  </label>
                  <input
                    type="text"
                    id="book_title"
                    name="book_title"
                    className="theme-input"
                    placeholder="Enter your book title"
                    defaultValue={book?.book_title}
                    required
                  />
                </motion.div>
                <motion.div
                  variants={fadeInUp}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="form-group mb-5 w-full md:w-1/2"
                >
                  <label htmlFor="book_author" className="block mb-2">
                    Book Author *
                  </label>
                  <input
                    type="text"
                    id="book_author"
                    name="book_author"
                    className="theme-input"
                    placeholder="Enter book author"
                    defaultValue={book?.book_author}
                    required
                  />
                </motion.div>
              </div>

              <div className="flex flex-col md:flex-row gap-5">
                <motion.div
                  variants={fadeInUp}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="form-group mb-5 w-full md:w-1/2"
                >
                  <label htmlFor="cover_photo" className="block mb-2">
                    Cover photo URL *
                  </label>
                  <input
                    type="url"
                    id="cover_photo"
                    name="cover_photo"
                    className="theme-input"
                    placeholder="Enter book cover photo URL"
                    defaultValue={book?.cover_photo}
                    required
                  />
                </motion.div>
                <motion.div
                  variants={fadeInUp}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="form-group mb-5 w-full md:w-1/2"
                >
                  <label htmlFor="total_pages" className="block mb-2">
                    Total Pages *
                  </label>
                  <input
                    type="number"
                    id="total_pages"
                    name="total_pages"
                    className="theme-input"
                    placeholder="Enter book author"
                    defaultValue={book?.total_pages}
                    required
                  />
                </motion.div>
              </div>

              <div className="flex flex-col md:flex-row gap-5">
                <motion.div
                  variants={fadeInUp}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="form-group mb-5 w-full md:w-1/2"
                >
                  <label htmlFor="book_category" className="block mb-2">
                    Book Category *
                  </label>

                  <select
                    id="book_category"
                    name="book_category"
                    className="theme-select"
                    required
                    defaultValue={book?.book_category}
                  >
                    <option value="fiction" className="bg-primary text-white">
                      Fiction
                    </option>
                    <option value="Sci-Fi" className="bg-primary text-white">
                      Sci-Fi
                    </option>
                    <option value="romance" className="bg-primary text-white">
                      Romance
                    </option>
                    <option value="history" className="bg-primary text-white">
                      History
                    </option>
                    <option value="fantasy" className="bg-primary text-white">
                      Fantasy
                    </option>
                    <option
                      value="motivation"
                      className="bg-primary text-white"
                    >
                      Motivation
                    </option>
                  </select>
                </motion.div>
                <motion.div
                  variants={fadeInUp}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="form-group mb-5 w-full md:w-1/2"
                >
                  <label htmlFor="reading_status" className="block mb-2">
                    Reading Status *
                  </label>

                  <select
                    id="reading_status"
                    name="reading_status"
                    className="theme-select"
                    defaultValue={book?.reading_status}
                    required
                  >
                    <option
                      value="want-to-read"
                      className="bg-primary text-white"
                    >
                      Want to read
                    </option>
                    <option value="reading" className="bg-primary text-white">
                      Reading
                    </option>
                    <option value="read" className="bg-primary text-white">
                      Read
                    </option>
                  </select>
                </motion.div>
              </div>

              <div className="flex flex-col md:flex-row gap-5">
                <motion.div
                  variants={fadeInUp}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="form-group mb-5 w-full md:w-1/2"
                >
                  <label htmlFor="user_name" className="block mb-2">
                    User Name
                  </label>
                  <input
                    type="text"
                    id="user_name"
                    name="user_name"
                    className="theme-input cursor-not-allowed"
                    defaultValue={user?.email}
                    required
                    readOnly
                  />
                </motion.div>
                <motion.div
                  variants={fadeInUp}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="form-group mb-5 w-full md:w-1/2"
                >
                  <label htmlFor="user_name" className="block mb-2">
                    User Name
                  </label>
                  <input
                    type="text"
                    id="user_name"
                    name="user_name"
                    className="theme-input cursor-not-allowed"
                    defaultValue={user?.displayName}
                    required
                    readOnly
                  />
                </motion.div>
              </div>
              <motion.div
                variants={fadeInUp}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="form-group mb-5 w-full "
              >
                <label htmlFor="upvotes" className="block mb-2">
                  Upvotes
                </label>
                <input
                  type="number"
                  id="upvotes"
                  name="upvotes"
                  className="theme-input cursor-not-allowed"
                  defaultValue={0}
                  required
                  readOnly
                />
              </motion.div>

              <motion.div
                variants={fadeInUp}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="form-group mb-5 w-full "
              >
                <label htmlFor="book_overview" className="block mb-2">
                  Book Overview *
                </label>
                <textarea
                  type="text"
                  id="book_overview"
                  name="book_overview"
                  className="theme-input h-32"
                  placeholder="Enter your book overview"
                  defaultValue={book?.book_overview}
                  required
                ></textarea>
              </motion.div>

              <motion.div
                variants={fadeInUp}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="flex justify-center pt-5"
              >
                <button
                  type="submit"
                  className="btn px-8 btn-lg btn-accent bg-gradient-to-r from-secondary to-accent text-white hover:border-secondary flex items-center gap-3"
                >
                  <FiEdit size={24} />

                  <span>Update Book Info</span>
                </button>
              </motion.div>
            </motion.form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default UpdateBook;
