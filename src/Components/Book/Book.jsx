import React from "react";
import { FaUserEdit } from "react-icons/fa";
import { Link } from "react-router";
import { TbCategory } from "react-icons/tb";
import { SlLike } from "react-icons/sl";
import { CiViewBoard } from "react-icons/ci";
import { motion } from "motion/react";



const Book = ({ book }) => {


  return (
    <div className="card theme-card flex flex-col gap-5 justify-between">
      <div className="gap-3 items-center">
        <div className="img-box overflow-hidden rounded  h-52 flex justify-center mb-5">
          <img
            src={book?.cover_photo}
            alt={book?.book_title}
            className="max-w-full"
          />
        </div>
        <div className="w-12/12">
        <h3 className="card-heading text-center">{book.book_title}</h3>
        <p className="flex item-center gap-2 justify-center pb-5 border-b border-[#ad82fc30] text-sm md:text-base"><span className="text-gray-400">By :</span> <span className="text-violet-400"> {book?.book_author}</span></p>
        </div>
      </div>
      <div className="flex gap-5 justify-between">
        <p className="flex items-center gap-2">
            <TbCategory className="text-accent text-xl md:text-2xl" />
            <span className="text-gray-100 capitalize text-sm md:text-base">{book?.book_category}</span>
        </p>
         <p className="flex items-center gap-2">
            <SlLike className="text-accent text-xl md:text-2xl" />
            <span className="text-gray-100 capitalize">{book?.upvotes}</span>
        </p>
      </div>

      <Link className="gradient-btn flex items-center gap-3" to={`/book-details/${book?._id}`}>
        <CiViewBoard  size={24}/>
        <span className="">View Book</span>
      </Link>
    </div>
  );
};

export default Book;
