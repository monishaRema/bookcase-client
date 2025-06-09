import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';

const BookCard = ({ data, index, total }) => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.9]);
  const inView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      className="book-card"
      style={{ scale, zIndex: total - index }}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <img src={data.image} alt={data.title} className="book-card-img" />
      <div className="book-card-content">
        <h2>{data.title}</h2>
        <p>{data.desc}</p>
      </div>
    </motion.div>
  );
};

export default BookCard;
