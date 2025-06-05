import React from "react";
import { FaUserEdit } from "react-icons/fa";
import { Link } from "react-router";
import { TbCategory } from "react-icons/tb";
import { SlLike } from "react-icons/sl";
import { CiViewBoard } from "react-icons/ci";




const Book = ({ book }) => {
  return (
    <div className="card theme-card flex flex-col gap-5 justify-between">
      <div className="flex gap-3 items-center">
        <div className="img-box w-5/12 overflow-hidden rounded  h-36">
          <img
            src={book?.cover_photo}
            alt={book?.book_title}
            className="size-full object-cover"
          />
        </div>
        <div className="w-7/12">
        <h3 className="card-heading">{book.book_title}</h3>
        <p className="flex item-center gap-2"><FaUserEdit className="text-2xl text-accent"></FaUserEdit> <span className="text-gray-100">{book?.book_author}</span></p>
        </div>
      </div>
      <div className="flex gap-5 justify-between">
        <p className="flex items-center gap-2">
            <TbCategory className="text-accent text-2xl" />
            <span className="text-gray-100 capitalize">{book?.book_category}</span>
        </p>
         <p className="flex items-center gap-2">
            <SlLike className="text-accent text-2xl" />
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
