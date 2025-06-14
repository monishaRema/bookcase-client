import { Helmet } from "@dr.pogodin/react-helmet";
import React from "react";
import { useLoaderData, useNavigate } from "react-router";
import {
  FaBookReader,
  FaEnvelope,
  FaLongArrowAltRight,
  FaUser,
  FaUserEdit,
} from "react-icons/fa";
import { TbCategory } from "react-icons/tb";
import { SlLike } from "react-icons/sl";
import { MdOutlineMenuBook, MdViewCompact } from "react-icons/md";
import { BiSolidLike } from "react-icons/bi";
import { use } from "react";
import { AuthContext } from "../Contex/AuthContex";
import Swal from "sweetalert2";
import axios from "axios";
import { baseUrl } from "../Libs/Utility";
import { useState } from "react";
import Review from "../Components/Review/Review";
import { useEffect } from "react";
import DisplayReview from "../Components/Review/DisplayReview";
import UseAxiosSecure from "../Hooks/UseAxiosSecure";
import { motion } from "motion/react";

const BookDetails = () => {
  const book = useLoaderData();
  const [upvote, setUpvote] = useState(parseInt(book.upvotes));
  const [readingStatus, setReadingStatus] = useState(book?.reading_status);
  const [reviews, setReviews] = useState([]);
  const { user } = use(AuthContext);
  const navigate = useNavigate();
  const axiosSecure = UseAxiosSecure();

  useEffect(() => {
    axios.get(`${baseUrl}/review/${book._id}`).then((result) => {
      setReviews(result.data);
    });
  }, [book._id]);

  const handleUpvote = (id) => {
    if (!user?.email) {
      Swal.fire({
        title: "Kindly login first to upvote the book",
        confirmButtonColor: "#142850",
      });
      return navigate("/login");
    }
    if (user?.email !== book.user_email) {
      axiosSecure.patch(`/upvote/${id}`).then((result) => {
        if (result.data.modifiedCount) {
          Swal.fire({
            title: "You have voted successfuly",
            position: "center",
            icon: "success",
            showConfirmButton: false,
            timer: 1500,
          });
          setUpvote((prev) => prev + 1);
        }
      });
    } else {
      Swal.fire({
        title: "You can not upvote your own book",
        confirmButtonColor: "#142850",
      });
    }
  };

  let statusNext = "";

  if (readingStatus == "want-to-read") {
    statusNext = "reading";
  } else if (readingStatus == "reading") {
    statusNext = "read";
  }

  const handleReadingStatus = (id, status) => {
    const data = { reading_status: statusNext };
    if (readingStatus == "read") {
      return Swal.fire({
        title: "You have read the book already",
        position: "center",
        icon: "error",
        showConfirmButton: false,
        timer: 1500,
      });
    }
    axiosSecure.patch(`/book/status/${id}`, data).then((result) => {
      setReadingStatus(status);
      Swal.fire({
        title: "You have updated the progress successfuly",
        position: "center",
        icon: "success",
        showConfirmButton: false,
        timer: 1500,
      });
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
    <section className="register py-25 ">
      <Helmet>
        <title>Book Case | Book Details</title>
      </Helmet>

      <div className="container mx-auto px-5">
        <div className="flex flex-col sm:flex-row items-start gap-10 sm:relative">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
            className="book-info w-full  md:w-6/12 lg:w-4/12 sm:sticky sm:top-0 rounded p-5 border border-[#00ed6440]"
          >
            <motion.div
              variants={cardVariants}
              className="img-box w-full overflow-hidden  "
            >
              <img
                src={book?.cover_photo}
                alt={book?.book_title}
                className="h-[300px] md:h-[350px] object-contain rounded"
              />
            </motion.div>
            <div className="content-box w-full mt-10">
              <motion.h1
                variants={cardVariants}
                className="text-3xl font-semibold mb-5"
              >
                {book?.book_title}
              </motion.h1>
              <div className="flex flex-col gap-5 mb-5 ">
                <motion.div
                  variants={cardVariants}
                  className="flex items-center justify-between gap-2"
                >
                  <div className="flex items-center gap-2">
                    <FaUserEdit className="text-accent text-2xl" />
                    <span className="text-gray-300 capitalize">Author :</span>
                  </div>
                  <span className="text-gray-300 capitalize">
                    {book?.book_author}
                  </span>
                </motion.div>
                <motion.div
                  variants={cardVariants}
                  className="flex items-center justify-between gap-2"
                >
                  <div className="flex items-center gap-2">
                    <TbCategory className="text-accent text-2xl" />
                    <span className="text-gray-300 capitalize">Category :</span>
                  </div>
                  <span className="text-gray-300 capitalize">
                    {book?.book_category}
                  </span>
                </motion.div>

                <motion.div
                  variants={cardVariants}
                  className="flex items-center justify-between gap-2"
                >
                  <div className="flex items-center gap-2">
                    <MdOutlineMenuBook className="text-accent text-2xl" />
                    <span className="text-gray-300 capitalize">
                      Total Pages :
                    </span>
                  </div>
                  <span className="text-gray-300 capitalize">
                    {book?.total_pages}
                  </span>
                </motion.div>
                <motion.div
                  variants={cardVariants}
                  className="flex items-center justify-between gap-2 flex-wrap"
                >
                  <div className="flex items-center gap-2">
                    <FaUser className="text-accent text-xl" />
                    <span className="text-gray-300 capitalize">Added By :</span>
                  </div>
                  <span className="text-gray-300 capitalize">
                    {book?.user_name.split(" ")[0] +
                      " " +
                      book?.user_name.split(" ")[1]}
                  </span>
                </motion.div>
                <motion.div
                  variants={cardVariants}
                  className="flex items-center justify-between gap-2 flex-wrap"
                >
                  <div className="flex items-center gap-2">
                    <FaEnvelope className="text-accent text-xl" />
                    <span className="text-gray-300 capitalize">
                      User Email :
                    </span>
                  </div>
                  <span className="text-gray-300 capitalize">
                    {book?.user_email}
                  </span>
                </motion.div>

                <motion.div
                  variants={cardVariants}
                  className="flex items-center justify-between gap-2"
                >
                  <div className="flex items-center gap-2">
                    <FaBookReader className="text-accent text-2xl" />
                    <span className="text-gray-300 capitalize">
                      Reading Status :
                    </span>
                  </div>

                  <span className="text-gray-300 capitalize">
                    {readingStatus}
                  </span>
                </motion.div>

                <motion.div
                  variants={cardVariants}
                  className="flex items-center justify-between gap-2 flex-wrap"
                >
                  <div className="flex items-center gap-2">
                    <FaBookReader className="text-accent text-2xl" />
                    <span className="text-gray-300 capitalize">Progress :</span>
                  </div>
                  {readingStatus !== "read" ? (
                    <div className="flex gap-2 items-center flex-wrap">
                      <span className="text-sm text-gray-400 capitalize">
                        {readingStatus}
                      </span>
                      <FaLongArrowAltRight className="text-accent"></FaLongArrowAltRight>

                      <span className="text-accent text-sm capitalize">
                        {statusNext}
                      </span>
                      <button
                        className="badge bg-white"
                        onClick={() =>
                          handleReadingStatus(book._id, statusNext)
                        }
                      >
                        Update
                      </button>
                    </div>
                  ) : (
                    <div className="flex gap-2 items-center">
                      <span className="badge badge-success capitalize">
                        {readingStatus}
                      </span>
                    </div>
                  )}
                </motion.div>

                <motion.div
                  variants={cardVariants}
                  className="flex items-center justify-between gap-2"
                >
                  <div className="flex items-center gap-2">
                    <SlLike className="text-accent text-2xl" />
                    <span className="text-gray-300 capitalize">Upvotes :</span>
                  </div>

                  <span className="text-gray-300 capitalize">{upvote}</span>
                </motion.div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
            className="book-details w-full md:w-6/12 lg:w-8/12"
          >
            <div className="rounded p-5 border border-[#00ed6440] mb-10">
              <motion.h3
                variants={cardVariants}
                className=" flex items-center gap-2"
              >
                <MdViewCompact className="text-accent text-3xl" />
                <span className="text-xl md:text-2xl text-accent font-semibold">
                  Book Overview
                </span>
              </motion.h3>
              <motion.p
                variants={cardVariants}
                className="text-base text-gray-400 mt-5"
              >
                {book?.book_overview}
              </motion.p>
              <motion.div variants={cardVariants} className="mt-10">
                <button
                  className="btn px-8 btn-lg btn-accent bg-gradient-to-t from-secondary to-accent text-white hover:border-secondary flex items-center gap-3"
                  onClick={() => handleUpvote(book?._id)}
                >
                  <BiSolidLike size={24} />
                  <span className="">Upvote</span>
                </button>
              </motion.div>
            </div>
            <motion.div variants={cardVariants}>
              <DisplayReview
                reviews={reviews}
                setReviews={setReviews}
                bookId={book?._id}
              ></DisplayReview>
            </motion.div>

            <motion.div variants={cardVariants}>
              <Review
                bookId={book?._id}
                user_email={book?.user_email}
                reviews={reviews}
                setReviews={setReviews}
              ></Review>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BookDetails;
