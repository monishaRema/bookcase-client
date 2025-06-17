import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { baseUrl } from "../../Libs/Utility";
import Spinner from "../../Pages/Spinner";
import { motion } from "motion/react";
import SingleCategory from "./SingleCategory";
import Swal from "sweetalert2";

const Category = () => {
  const [loading, setLoading] = useState(true);
  const [bookCategory, setBookCategory] = useState([]);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`${baseUrl}/book-category/`)
      .then((result) => {
        setBookCategory(result.data);
        setLoading(false);
      })
      .catch((err) => {
         setLoading(false);
      });
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
    <motion.section className="py-25 bg-gradient-to-b from-[#06041b] to-secondary">
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
            className="text-4xl md:text-5xl text-center mb-5 font-bold leading-15 md:leading-10"
          >
            Featured Categories
          </motion.h2>
          <motion.p
            key={1}
            variants={cardVariants}
            className="text-gray-300 mb-15 max-w-2xl mx-auto text-center theme-p "
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
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          {bookCategory.length > 0 &&
            bookCategory.map((category, i) => (
              <motion.div key={i} variants={cardVariants}>
                <SingleCategory category={category} />
              </motion.div>
            ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Category;
