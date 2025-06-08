
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router";
import { motion } from "framer-motion";


import { Helmet } from "@dr.pogodin/react-helmet";

const Banner = () => {


  
 const slides = [
  {
    id: 1,
    title: "Welcome to Book Case",
    description:
      "Create your personal digital bookshelf. Organize the books you've read, are reading, or plan to read — all in one place.",
    image:
      "https://m.media-amazon.com/images/I/41I7HSpy4dL._SY445_SX342_.jpg",
    cta: "Start Reading",
  },
  {
    id: 2,
    title: "Track Your Reading Journey",
    description:
      "Log your reading progress, update statuses, and keep track of how far you’ve come with each book.",
    image:
      "https://m.media-amazon.com/images/I/716qMFFpSLL._SY522_.jpg",
    cta: "Track Progress",
  },
  {
    id: 3,
    title: "Share Your Thoughts",
    description:
      "Write reviews, rate books, and see what others are saying. Make your reading experience more interactive.",
    image:
      "https://m.media-amazon.com/images/I/416wePldmrL._SY445_SX342_.jpg",
    cta: "Write a Review",
  },
];


  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    arrows: false,
    appendDots: (dots) => (
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 ">
        <ul className="flex mt-3 justify-center space-x-1">{dots}</ul>
      </div>
    ),
    customPaging: () => (
      <div className="w-3 h-3 rounded-full bg-[#6A8C25] dark:bg-white bg-opacity-50"></div>
    ),
    responsive: [
      {
        breakpoint: 1024,
      },
    ],
  };

  const sliderVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.3,

      },
    },
  };

  const sliderElementVariants = {
    hidden: { opacity: 0, y: -40,},
    show: {
      opacity: 1,
    y: 0,
      transition: {
        duration: 0.8,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section className="banner pb-25 pt-45">
      <Helmet>
        <title>Book Case | Home</title>
      </Helmet>
      <div className="container mx-auto px-5">
        <Slider {...settings}>
          {slides.map((slide) => (
            <motion.div key={slide.id}
               initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, amount: 0.5 }}
                    variants={sliderVariants}
            
            className="relative">
              <div
               
              className="flex flex-col-reverse md:flex-row items-center justify-between gap-10">
                <div className="w-full md:w-1/2">
                  <div
                
                    className="max-w-[600px] mx-auto md:mx-0 text-center md:text-left md:pl-5"
                  >
                    <motion.h2
                    key={0}
                    variants={sliderElementVariants}
                    className="text-3xl md:text-5xl font-bold mb-4 text-[#6A8C25] dark:text-white">
                      {slide.title}
                    </motion.h2>
                    <motion.p key={1} variants={sliderElementVariants} className="text-lg md:text-xl mb-10 text-gray-500 dark:text-gray-200">
                      {slide.description}
                    </motion.p>
                   
                     
                  <motion.div key={2} variants={sliderElementVariants}>
                    <Link
                      to={"/register"}
                      className="bg-[#6A8C25] text-white font-medium px-8 py-4 rounded-md hover:bg-[#204e36] dark:hover:bg-yellow-600 transition duration-300 ease-in-out"
                    >
                      {slide.cta}
                    </Link>
                  </motion.div>
                  </div>
                </div>
                <div className="img-box w-full md:w-1/2">
                  <motion.img key={3} variants={sliderElementVariants}
                    src={slide.image}
                    alt={slide.title}
                    className="mx-auto md:mx-0 md:ml-auto max-w-full h-[300px] md:h-[500px] "
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </Slider>
        
        </div>
        </section>
  );
 
};

export default Banner;
