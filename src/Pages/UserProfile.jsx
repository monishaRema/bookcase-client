import React, { use, useEffect, useState } from "react";
import { AuthContext } from "../Contex/AuthContex";

import Spinner from "./Spinner.jsx";
import { Link, useNavigate } from "react-router";
import { FaBook, FaBookOpen, FaBookReader } from "react-icons/fa";
import { LuBookHeart } from "react-icons/lu";
import BookChart from "../Components/BookChart/BookChart.jsx";
import UseAxiosSecure from "../Hooks/UseAxiosSecure.jsx";
import UserAvator from "../assets/userAvator.png";
import { motion } from "framer-motion";

const UserProfile = () => {
  const [loading, setLoading] = useState(true);
  const [books, setBooks] = useState([]);

  const { user } = use(AuthContext);
  const axiosSecure = UseAxiosSecure();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) return;
    if (!user.email) {
      navigate("/login");
    }
  }, [user, navigate]);

  useEffect(() => {
    if (user?.email) {
      setLoading(true);
      axiosSecure
        .get(`/user/books/?email=${user.email}`)
        .then((res) => {
          setBooks(res.data);
          setLoading(false);
        })
        .catch((err) => {
          console.error("Error fetching books:", err);
          setLoading(false);
        });
    }
  }, [user?.email, axiosSecure]);

  const reading = books.filter(
    (book) => book.reading_status === "reading"
  ).length;

  const read = books.filter((book) => book.reading_status === "read").length;
  const wantsToRead = books.filter(
    (book) => book.reading_status === "want-to-read"
  ).length;

  const photoUrl = user && user.photoURL ? user.photoURL : UserAvator;

  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.25,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, x: 100 },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.7,
        ease: "easeInOut",
      },
    },
  };
    const cardVariantsAlt = {
    hidden: { opacity: 0, x: -100 },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.7,
        ease: "easeInOut",
      },
    },
  };

if(loading){
  return <Spinner></Spinner>
}
  return (
    <section className="py-25 bg-gradient-to-bl from-primary via-[#6645eb4f] via-35% to-secondary">
      <div className="container mx-auto px-5">
        
        <h1 className="text-4xl md:text-5xl text-center mb-3">Profile Page</h1>
        <p className="mb-15 text-gray-400 text-base md:text-lg text-center">
          Your reading journey at a glance
        </p>
        <motion.div
         initial="hidden"
          animate="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        className="flex flex-col lg:flex-row gap-10">

          <motion.div variants={cardVariantsAlt} className="profile-info bg-[#55555521] rounded-2xl p-8 border-2 backdrop-blur-2xl w-full lg:w-4/12 border-[#663ef840] flex flex-col items-center justify-center">
            <div className="img-box">
              <img
                src={photoUrl}
                alt={`${user?.displayName} image`}
                className="size-20 rounded-full mx-auto object-cover"
              />
            </div>
            <h2 className="text-xl md:text-2xl text-gray-200 text-center mt-5 mb-2">
              {user?.displayName}
            </h2>
            <p className="text-gray-400 text-center">{user?.email}</p>
          </motion.div>
          <motion.div variants={cardVariants}
            className="profile-details w-full lg:w-8/12 bg-[#55555521] rounded-2xl p-8 border-2 backdrop-blur-2xl border-[#663ef840]"
          >
            <motion.div
              className="flex flex-col sm:flex-row justify-between items-center flex-wrap gap-5"
            >
              <h2 className="text-3xl md:text-4xl font-semibold">
                My Bookshelf
              </h2>
              <div className="flex gap-5">
                <Link
                  to="/add-book"
                  className="btn btn-info bg-gradient-to-r from-secondary to-[#00A8CC] text-white hover:border-secondary "
                >
                  Add Book
                </Link>
                <Link
                  to="/my-books"
                  className="btn btn-accent bg-gradient-to-r from-secondary to-accent text-white hover:border-secondary "
                >
                  View All
                </Link>
              </div>
            </motion.div>
            <motion.div
              className="flex flex-wrap gap-5 mt-10"
            >
              <motion.div className="bg-gradient-to-l from-secondary to-accent rounded-lg hover:scale-105 transition-all duration-300 ease-in-out  p-5 text-center flex-1 flex flex-col justify-center items-center min-w-[180px]">
                <FaBook size={42} />
                <h3 className="mb-3 text-5xl">{books && books.length}</h3>
                <p className="text-base text-gray-300">Total Books</p>
              </motion.div>
              <motion.div className="bg-gradient-to-r from-secondary to-[#09878b] rounded-lg hover:scale-105 transition-all duration-300 ease-in-out  p-5 text-center flex-1 flex flex-col justify-center items-center min-w-[180px]">
                <FaBookOpen size={42} />
                <h3 className="text-5xl mb-3">{read}</h3>
                <p className="text-base text-gray-300">Books Read</p>
              </motion.div>
              <motion.div className="bg-gradient-to-r from-secondary to-violet-700 rounded-lg hover:scale-105 transition-all duration-300 ease-in-out  p-5 text-center flex-1 flex flex-col justify-center items-center min-w-[180px]">
                <FaBookReader size={42} />
                <h3 className="mb-3 text-5xl">{reading}</h3>
                <p className="text-base text-gray-300">Books Reading</p>
              </motion.div>
              <motion.div className="bg-gradient-to-r from-secondary to-[#1686ee] rounded-lg hover:scale-105 transition-all duration-300 ease-in-out  p-5 text-center flex-1 flex flex-col justify-center items-center min-w-[180px]">
                <LuBookHeart size={42} />
                <h3 className="mb-5 text-5xl">{wantsToRead}</h3>
                <p className="text-base text-gray-200">Wish to Read</p>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
        <div className="bg-[#55555521] backdrop-blur-2xl rounded-3xl px-0 py-5 border-2 border-[#663ef840] mt-15">
          <BookChart user_email={user.email}></BookChart>
        </div>
      </div>
    </section>
  );
};

export default UserProfile;
