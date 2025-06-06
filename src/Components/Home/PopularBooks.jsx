import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { baseUrl } from '../../Libs/Utility';
import Book from '../Book/Book';

const PopularBooks = () => {

    const [PopularBooks, setPopularBooks] = useState([])
    useEffect(() => {
        axios.get(`${baseUrl}/popular-books/`)
        .then( result => {
   
            setPopularBooks(result.data)
        })
    }, [])
    return (
        <section className="bg-gradient-to-b from-primary to-secondary py-25">
            <div className="container mx-auto px-5">
                <h2 className='text-3xl md:text-5xl text-center mb-5 font-bold'>
                    Popular Books
                </h2>
                <p className='text-gray-300 mb-10 max-w-2xl mx-auto text-center text-lg'> 
                    Discover the most popular books loved by readers.
Explore trending titles across genres and find your next great read.
                </p>
             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
 {
     PopularBooks.length > 0 && PopularBooks?.map(book => <Book key={book._id} book={book}></Book>)
    }
        </div>
            </div>
        </section>
    );
};

export default PopularBooks;