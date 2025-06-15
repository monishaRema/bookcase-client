import { Helmet } from "@dr.pogodin/react-helmet";
import React, { use } from "react";
import { AuthContext } from "../Contex/AuthContex";
import { GiBookshelf } from "react-icons/gi";
import Swal from "sweetalert2";
import { PiBookOpenBold } from "react-icons/pi";
import { IoShareSharp } from "react-icons/io5";
import { MdLibraryBooks } from "react-icons/md";
import { useNavigate } from "react-router";
import UseAxiosSecure from "../Hooks/UseAxiosSecure";
import { motion } from "framer-motion";

const AddBook = () => {
  const { user } = use(AuthContext);
  const navigate = useNavigate();
  const axiosSecure = UseAxiosSecure();

  if (!user.email || !user.displayName) {
    return location.reload();
  }
  const handleAddBook = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    data.upvotes = parseInt(data.upvotes);
    data.user_email = user?.email;
    data.user_name = user?.displayName;
    axiosSecure
      .post(`/book`, data)
      .then((result) => {
        if (result.data.insertedId) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "You have added a book successfully",
            showConfirmButton: false,
            timer: 1500,
          });
          form.reset();
          navigate("/my-books");
        }
      })
      .catch((error) => {
        Swal.fire("Error", "Failed to add book");
      });
  };

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
      <div className="container mx-auto px-5">
        <Helmet>
          <title>Book Case | Add Book</title>
        </Helmet>

        <motion.div
          initial="hidden"
          animate="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className="mb-20 max-w-5xl mx-auto"
        >
          <motion.div
            variants={cardVariants}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="img-box bg-gradient-to-l from-[#001e2b10]  to-accent rounded-full w-[120px] h-[120px] mx-auto flex justify-center items-center mb-10 group"
          >
            <PiBookOpenBold className="size-15 group-hover:rotate-360 transition duration-1000 ease-in-out" />
          </motion.div>
          <motion.h1
            variants={cardVariants}
            transition={{ duration: 0.6 }}
            className="text-center text-3xl md:text-4xl font-semibold mb-10"
          >
            Add Your Book
          </motion.h1>
          <motion.p
            variants={cardVariants}
            transition={{ duration: 0.6 }}
            className="text-center text-xl mb-10 "
          >
            Share your literary journey with our community! Adding books to your
            digital <br /> bookshelf helps you:
          </motion.p>
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-5 "
          >
            <motion.div
              variants={cardVariants}
              transition={{ duration: 0.5 }}
              className="box-1 border border-[#663ef840] rounded  py-8 px-5"
            >
              <div className="img-box bg-gradient-to-l from-primary to-accent  rounded-xl w-[60px] h-[60px] mx-auto flex justify-center items-center mb-5 ">
                <PiBookOpenBold className="size-7" />
              </div>
              <h3 className="text-center text-xl  font-semibold mb-4">
                Track Progress
              </h3>
              <p className="text-center">
                Monitor your reading journey and set goals
              </p>
            </motion.div>

            <motion.div
              variants={cardVariants}
              transition={{ duration: 0.5 }}
              className="box-2 border border-[#663ef840] rounded  py-8 px-5"
            >
              <div className="img-box bg-gradient-to-b from-primary to-accent  rounded-xl w-[60px] h-[60px] mx-auto flex justify-center items-center mb-5 ">
                <IoShareSharp className="size-7" />
              </div>
              <h3 className="text-center text-xl  font-semibold mb-4">
                Share Reviews
              </h3>
              <p className="text-center">Help others discover amazing books</p>
            </motion.div>

            <motion.div
              variants={cardVariants}
              transition={{ duration: 0.5 }}
              className="box-3 border border-[#663ef840] rounded  py-8 px-5"
            >
              <div className="img-box bg-gradient-to-r from-primary to-accent  rounded-xl w-[60px] h-[60px] mx-auto flex justify-center items-center mb-5 ">
                <MdLibraryBooks className="size-7" />
              </div>
              <h3 className="text-center text-xl  font-semibold mb-4">
                Build Library
              </h3>
              <p className="text-center">
                Create your personal digital collection
              </p>
            </motion.div>
          </motion.div>
        </motion.div>

        <div className="theme-card-wrapper">
          <div className="theme-card-content form-box">
            <motion.form
              onSubmit={handleAddBook}
              variants={containerVariants}
              initial="hidden"
             animate="show"
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className="flex flex-col md:flex-row gap-5">
                <motion.div
                    variants={cardVariants}
              transition={{ duration: 0.5 }}
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
                    required
                  />
                </motion.div>
                <motion.div
                    variants={cardVariants}
              transition={{ duration: 0.5 }}
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
                    required
                  />
                </motion.div>
              </div>

              <div className="flex flex-col md:flex-row gap-5">
                <motion.div
                    variants={cardVariants}
              transition={{ duration: 0.5 }}
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
                    required
                  />
                </motion.div>
                <motion.div
                    variants={cardVariants}
              transition={{ duration: 0.5 }}
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
                    required
                  />
                </motion.div>
              </div>

              <div className="flex flex-col md:flex-row gap-5">
                <motion.div
                    variants={cardVariants}
              transition={{ duration: 0.5 }}
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
                    variants={cardVariants}
              transition={{ duration: 0.5 }}
                  className="form-group mb-5 w-full md:w-1/2"
                >
                  <label htmlFor="reading_status" className="block mb-2">
                    Reading Status *
                  </label>

                  <select
                    id="reading_status"
                    name="reading_status"
                    className="theme-select"
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
                    variants={cardVariants}
              transition={{ duration: 0.5 }}
                  className="form-group mb-5 w-full md:w-1/2"
                >
                  <label htmlFor="user_email" className="block mb-2">
                    User Name
                  </label>
                  <input
                    type="text"
                    id="user_email"
                    name="user_email"
                    className="theme-input cursor-not-allowed"
                    defaultValue={user?.email}
                    required
                    readOnly
                  />
                </motion.div>
                <motion.div
                    variants={cardVariants}
              transition={{ duration: 0.5 }}
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
                  variants={cardVariants}
              transition={{ duration: 0.5 }}
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
                  variants={cardVariants}
              transition={{ duration: 0.5 }}
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
                  required
                ></textarea>
              </motion.div>

              <motion.div
                  variants={cardVariants}
              transition={{ duration: 0.5 }}
                className="flex justify-center pt-5"
              >
                <button type="submit" className="gradient-btn">
                  <GiBookshelf size={24} />

                  <span>Add Book to Shelf</span>
                </button>
              </motion.div>
            </motion.form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AddBook;
