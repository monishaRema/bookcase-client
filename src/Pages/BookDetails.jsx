import { Helmet } from "@dr.pogodin/react-helmet";
import React from "react";
import { useLoaderData } from "react-router";
import { FaBookReader, FaUserEdit } from "react-icons/fa";
import { TbCategory } from "react-icons/tb";
import { SlLike } from "react-icons/sl";
import { MdOutlineMenuBook } from "react-icons/md";
import { BiSolidLike } from "react-icons/bi";
import { use } from "react";
import { AuthContext } from "../Contex/AuthContex";
import Swal from "sweetalert2";
import axios from "axios";
import { baseUrl } from "../Libs/Utility";
import { useState } from "react";
import Review from "../Components/Review/Review";
import { useEffect } from "react";
import DisplayReview from "../Components/Review/DisplayReview";

const BookDetails = () => {
  const book = useLoaderData();
  const [upvote, setUpvote] = useState(parseInt(book.upvotes));
  const [reviews, setReviews] = useState([])
  const { user } = use(AuthContext);

  useEffect(()=>{
    axios.get(`${baseUrl}/review/${book._id}`)
    .then(result =>{
        setReviews(result.data);
    })

  },[book._id])
  const handleUpvote = (id) => {
    if (user.email !== book.user_email) {
    
      axios.patch(`${baseUrl}/upvote/${id}`).then((result) => {
        if (result.data.modifiedCount) {
          Swal.fire({
            title: "You have voted successfuly",
            position: "center",
            icon: "success",
            showConfirmButton: false,
            timer: 1500,
          });
          setUpvote((prev) => prev + 1);
        }
      });
    } else {
      Swal.fire({
        title: "You can not upvote your own book",
        confirmButtonColor: "#142850",
      });
    }
  };

  

  return (
    <section className="register pb-25 pt-45">
      <Helmet>
        <title>Book Case | Book Details</title>
      </Helmet>
      <div className="container mx-auto px-5">

        <div className=" max-w-[1080px] flex flex-col md:flex-row gap-15 items-center">
          <div className="img-box w-full overflow-hidden rounded  md:w-5/12 p-5 border  border-[#00ed6440]">
            <img
              src={book?.cover_photo}
              alt={book?.book_title}
              className="w-full h-[400px] md:h-[550px] object-cover rounded"
            />
          </div>
          <div className="content-box w-full md:w-7/12">
            <h1 className="text-3xl font-semibold mb-5">{book?.book_title}</h1>
            <div className="flex flex-wrap gap-5 mb-5 ">
              <p className="flex items-center gap-2">
                <FaUserEdit className="text-accent text-2xl" />
                <span className="text-gray-300 capitalize">
                  Author : {book?.book_author}
                </span>
              </p>
              <p className="flex items-center gap-2">
                <TbCategory className="text-accent text-2xl" />
                <span className="text-gray-300 capitalize">
                  Category : {book?.book_category}
                </span>
              </p>

              <p className="flex items-center gap-2">
                <MdOutlineMenuBook className="text-accent text-2xl" />
                <span className="text-gray-300 capitalize">
                  Total Pages : {book?.total_pages}
                </span>
              </p>
            </div>
            <div className="flex gap-5  mb-5">
              <p className="flex items-center gap-2">
                <FaBookReader className="text-accent text-2xl" />
                <span className="text-gray-300 capitalize">
                  Reading Status : {book?.reading_status}
                </span>
              </p>

              <p className="flex items-center gap-2">
                <SlLike className="text-accent text-2xl" />
                <span className="text-gray-300 capitalize">
                  Upvotes : {upvote}
                </span>
              </p>
            </div>
            <p className="text-base text-gray-300 mb-5">
              {book?.book_overview}
            </p>
            <button
              className="gradient-btn flex items-center gap-3"
              onClick={() => handleUpvote(book?._id)}
            >
              <BiSolidLike size={24} />
              <span className="">Upvote</span>
            </button>
          </div>
        </div>
        <div className="review-write mt-40">
            <Review bookId={book?._id} user_email={book?.user_email} reviews={reviews} setReviews={setReviews}></Review>
            <DisplayReview reviews={reviews} setReviews={setReviews} bookId={book?._id}></DisplayReview>
        </div>
      </div>
    </section>
  );
};

export default BookDetails;
