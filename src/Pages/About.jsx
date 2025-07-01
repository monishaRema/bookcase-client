import React from "react";
import { motion } from "framer-motion";
import { FaUsers, FaStar, FaBookOpen, FaCheckCircle } from "react-icons/fa";
import Lottie from "lottie-react";
import readingAnimation from "../assets/Lottie//reading.json"; 
import { Link } from "react-router";
// import your logo if needed

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.22 } }
};
const item = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: "easeOut" } }
};

const features = [
  {
    icon: <FaBookOpen className="text-accent text-6xl mb-5" />,
    title: "Organize Your Reads",
    desc: "Track books you've finished, are reading, or want to read. No more scattered lists."
  },
  {
    icon: <FaUsers className="text-accent text-6xl mb-5" />,
    title: "Social by Design",
    desc: "Reviews, upvotes, and real-time updates—reading becomes a community experience."
  },
  {
    icon: <FaStar className="text-accent text-6xl mb-5" />,
    title: "Stay Motivated",
    desc: "Visual progress, dashboards, and stats keep your journey exciting and rewarding."
  },
  {
    icon: <FaCheckCircle className="text-accent text-6xl mb-5" />,
    title: "Instant Book Management",
    desc: "Add, edit, and review in real time. Everything updates—no page reloads, ever."
  }
];

const About = () => {
  return (
    <motion.section
      className="py-20 min-h-screen bg-gradient-to-b from-[#06041b] to-secondary text-gray-100"
      initial="hidden"
      animate="show"
      variants={container}
    >
      <div className="container mx-auto px-5 flex flex-col gap-25">
        {/* Top: Hero / Mission */}
        <motion.div
          className="flex flex-col md:flex-row gap-10 items-center"
          variants={item}
        >
          {/* Animation / Visual */}
          <div className="w-full md:w-1/2 flex justify-center">
            <Lottie animationData={readingAnimation} loop className="max-w-md w-full" />
          
          </div>
          {/* Main Mission */}
          <div className="w-full md:w-1/2 text-center md:text-start">
            <motion.h1
              className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight "
              variants={item}
            >
              About <span className="text-accent">Book Case</span>
            </motion.h1>
            <motion.p
              className="text-base md:text-lg text-gray-400 mb-7 max-w-2xl mx-auto md:mx-0"
              variants={item}
            >
              Your digital bookshelf—organized, interactive, and social.
              Empower every reader to track, share, and celebrate their journey through a modern, connected platform.
            </motion.p>
            <motion.div variants={item} className="inline-block">
              <a
                href="/"
                className="gradient-btn"
              >
                Explore Book Case
              </a>
            </motion.div>
          </div>
        </motion.div>
        {/* Features / Why Us */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center"
          variants={container}
        >
          {features.map((f, i) => (
            <motion.div
              key={i}
              variants={item}
              className="bg-[#18122B]/60 p-7 rounded-2xl border border-gray-800 shadow-lg hover:shadow-xl transition-all flex flex-col items-center"
            >
              {f.icon}
              <h3 className="font-bold text-xl md:text-2xl mb-5 text-white">{f.title}</h3>
              <p className="text-gray-400 text-base">{f.desc}</p>
            </motion.div>
          ))}
        </motion.div>
        {/* Community / Social Proof */}
        <motion.div
          className="mt-15 flex flex-col items-center"
          variants={item}
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-center  mb-5">Built for the Community</h2>
          <p className="max-w-2xl text-center text-gray-400 mb-5">
            Book Case bridges the gap between personal logging and social discovery.
            <span className="block mt-1 text-violet-400 font-semibold">
              Discover, connect, and stay inspired.
            </span>
          </p>
           <motion.div variants={item} className="inline-block">
              <Link
               to={'/register'}
                className="gradient-btn"
              >
                Get Started
              </Link>
            </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default About;
