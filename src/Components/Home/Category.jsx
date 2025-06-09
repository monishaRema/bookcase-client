import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { baseUrl } from '../../Libs/Utility';
import Spinner from '../../Pages/Spinner';
import { motion } from "motion/react";
import SingleCategory from './SingleCategory';


const Category = () => {
    const [loading,setLoading] = useState(true);
    const [bookCategory,setBookCategory] =useState([])

    useEffect(()=>{
        setLoading(true)
        axios.get(`${baseUrl}/book-category/`)
        .then(result =>{
           setBookCategory(result.data)
           setLoading(false)
        })
        .catch( err =>{
            setLoading(false)
        })

    },[])

    console.log(bookCategory)
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
         Featured Categories
        </motion.h2>
        <p className="text-gray-300 mb-15 max-w-2xl mx-auto text-center text-lg">
          Discover the most popular books loved by readers. Explore trending
          titles across genres and find your next great read.
        </p>
        {loading && <Spinner></Spinner>}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
         {
            bookCategory.length > 0 && bookCategory.map((category,i) => <SingleCategory key={i} category={category}></SingleCategory>)
         }
         
        </div> 
                </div>
        </section>
    );
};

export default Category;