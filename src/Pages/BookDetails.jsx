import { Helmet } from '@dr.pogodin/react-helmet';
import React from 'react';
import { useLoaderData } from 'react-router';
import { FaBookReader, FaUserEdit } from "react-icons/fa";
import { TbCategory } from "react-icons/tb";
import { SlLike } from "react-icons/sl";
import { MdOutlineMenuBook } from "react-icons/md";


const BookDetails = () => {
    const book = useLoaderData();
    console.log(book)
    return (
           <section className="register pb-25 pt-45">
             <Helmet>
          <title>Book Case | Book Details</title>
        </Helmet>
      <div className="container mx-auto px-5">
        <div className=" max-w-[1080px] flex flex-col md:flex-row gap-15 items-center">
            <div className="img-box w-full overflow-hidden rounded  md:w-5/12 p-5 border  border-[#00ed6440]">
            <img src={book?.cover_photo} alt={book?.book_title} className='w-full h-[400px] md:h-[550px] object-cover rounded' />
            </div>
            <div className="content-box w-full md:w-7/12">
                <h1 className='text-3xl font-semibold mb-5'>{book?.book_title}</h1>
                  <div className="flex flex-wrap gap-5 mb-5 ">
                        <p className="flex items-center gap-2">
                            <FaUserEdit className="text-accent text-2xl" />
                            <span className="text-gray-300 capitalize">Author : {book?.book_author}</span>
                        </p>
                        <p className="flex items-center gap-2">
                            <TbCategory className="text-accent text-2xl" />
                            <span className="text-gray-300 capitalize">Category : {book?.book_category}</span>
                        </p>

                           <p className="flex items-center gap-2">
                            <MdOutlineMenuBook  className="text-accent text-2xl" />
                            <span className="text-gray-300 capitalize">Total Pages : {book?.total_pages}</span>
                        </p>
                         
                  </div>
                  <div className="flex gap-5  mb-5">
                        <p className="flex items-center gap-2">
                            <FaBookReader className="text-accent text-2xl" />
                            <span className="text-gray-300 capitalize">Reading Status : {book?.reading_status}</span>
                        </p>
                         
                        <p className="flex items-center gap-2">
                            <SlLike className="text-accent text-2xl" />
                            <span className="text-gray-300 capitalize">Upvotes : {book?.upvotes}</span>
                        </p>
                  </div>
                  <p className="text-base text-gray-300">
                    {book?.book_overview}
                  </p>
            </div>
        </div>


      </div>
      </section>
       
    );
};

export default BookDetails;