import React from 'react';
import { useEffect } from "react";
import { useState } from "react";
import { motion } from "motion/react";
import { baseUrl } from "../../Libs/Utility";
import Book from "../Book/Book";
import axios from 'axios';
import Spinner from '../../Pages/Spinner';

const RecentBooks = () => {

     const [latestBook, setLatestBook] = useState([]);
    const [loading, setLoading] = useState(true);

 useEffect(()=>{
      axios.get(`${baseUrl}/recent-books/`)
   .then((result) => {
        setLatestBook(result.data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
 }, [])
    return (
        <section className='py-25 bg-gradient-to-b from-secondary to-primary'>
                <div className="container mx-auto px-5">
          <motion.h2
          animate={{
            color: ["#00ed64", "#fff", "#142850"],
          }}
          transition={{
            duration: 4,
            delay: 1,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="text-3xl md:text-5xl text-center mb-5 font-bold"
        >
          Recently added to Shelf
        </motion.h2>
        <p className="text-gray-300 mb-10 max-w-2xl mx-auto text-center text-lg">
          Discover the most popular books loved by readers. Explore trending
          titles across genres and find your next great read.
        </p>
        {loading && <Spinner></Spinner>}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
          {
            latestBook.length > 0 && latestBook.map( book => <Book key={book._id} book={book}></Book>)
          }
         
        </div> 
                </div>
        </section>
    );
};

export default RecentBooks;