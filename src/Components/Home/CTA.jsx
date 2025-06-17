import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router";
const CTA = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };


  return (
    <motion.section
     variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
    className="py-32 bg-gradient-to-t from-primary via-[#44288f57] to-secondary"
    >
      <div className="max-w-2xl mx-auto px-5">
         <div className="flex flex-col items-center justify-center text-center gap-10">
            <motion.h2   variants={fadeInUp} className="text-white text-4xl md:text-5xl font-semibold leading-15 md:leading-10">
Ready to Start Your Journey?
            </motion.h2>
            <motion.p variants={fadeInUp} className=" text-lg md:text-xl text-gray-300">
                Join thousands of readers who have transformed their reading experience. Your next great book adventure awaits.
            </motion.p>
            <motion.div variants={fadeInUp}>
                <Link to={'/register'} className="gradient-btn">Start Digital Bookshelf</Link>
            </motion.div>
         </div>
      </div>
    </motion.section>
  );
};

export default CTA;
