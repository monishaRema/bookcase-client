import axios from "axios";
import React from "react";
import { Link } from "react-router";
import { FaBookReader, FaUserEdit } from "react-icons/fa";
import { TbCategory } from "react-icons/tb";
import { SlLike } from "react-icons/sl";
import Swal from "sweetalert2";
import { baseUrl } from "../../Libs/Utility";
import { MdOutlineMenuBook } from "react-icons/md";


const SignleBook = ({ book, setBooks, books }) => {
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#00A8CC",
      confirmButtonText: "Delete it",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`${baseUrl}/book/${id}`)
          .then((result) => {
            if (result.data.deletedCount) {
                const remainingBooks = books.filter(book => book._id !==id)
                setBooks(remainingBooks)

              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
            }
          })
          .catch((err) => {
            console.log(err);
          });
      }
    });
  };
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
          <div className="flex gap-6 flex-wrap justify-between">
            <p className="flex items-center gap-2">
                <TbCategory className="text-accent text-2xl" />
                <span className="text-gray-100 capitalize">{book?.book_category}</span>
            </p>
                   <p className="flex items-center gap-2">
                <MdOutlineMenuBook className="text-accent text-2xl" />
                <span className="text-gray-100 capitalize">{book?.total_pages}</span>
            </p>
              
          </div>
          
      <div className="flex gap-6 flex-wrap justify-between border-t border-[#00ed6440] pt-5">
  
             <p className="flex items-center gap-2">
                <FaBookReader className="text-accent text-2xl" />
                <span className="text-gray-100 capitalize">{book?.reading_status}</span>
            </p>
          
                <p className="flex items-center gap-2">
                <SlLike className="text-accent text-2xl" />
                <span className="text-gray-100 capitalize">{book?.upvotes}</span>
            </p>
          </div>
      <div className="flex gap-2 ">
        <Link
          className="btn btn-accent flex-1"
          to={`/book-details/${book?._id}`}
        >
          View
        </Link>
        <Link
          className="btn bg-[#00b4d8] border-[#00b4d8] text-white hover:bg-[#009bd8] flex-1"
          to={`/update-book/${book?._id}`}
        >
          Update
        </Link>
        <button
          className="btn btn-warning flex-1"
          onClick={() => handleDelete(book?._id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default SignleBook;
