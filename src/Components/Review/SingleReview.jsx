import React from "react";
import { use } from "react";
import { format } from "date-fns";
import Swal from "sweetalert2";
import { AuthContext } from "../../Contex/AuthContex";
import { FaUser } from "react-icons/fa";
import { MdAccessTime } from "react-icons/md";
import { useState } from "react";
import UpdateReview from "./UpdateReview";
import UseAxiosSecure from "../../Hooks/UseAxiosSecure";

const SingleReview = ({ review ,reviews, setReviews}) => {

  const [isModalOpen, setIsModalOpen] = useState(false)

  const { user } = use(AuthContext);
  const axiosSecure = UseAxiosSecure();
  const email = user?.email;

  const handleDeleteReview = (id)=>{
       Swal.fire({
      text: "Are you sure, delete this Review?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#00A8CC",
      confirmButtonText: "Delete it",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure
          .delete(`/review/${id}`)
          .then((result) => {
            if (result.data.deletedCount) {
                const remainingReview = reviews.filter(review => review._id !==id)
                setReviews(remainingReview)

              Swal.fire({
                title: "Deleted!",
                text: "Your review has been deleted.",
                icon: "success",
              });
            }
          })
          .catch((err) => {
           Swal.fire({
              title : err.message,
              icon: "error",
           })
          });
      }
    });
  }


  return (
    <div
      className="flex flex-col gap-5 bg-primary rounded mb-5 p-5"
      key={review._id}
    >
      <p className="text-base text-gray-300">{review.review_text}</p>
      <div className="flex flex-wrap gap-5">
        <p className="flex items-center gap-2">
          <FaUser className="text-accent text-xl" />
          <span className="text-gray-400 capitalize">{review?.user_name}</span>
        </p>

        <p className="flex items-center gap-2">
          <MdAccessTime className="text-accent text-2xl" />
          <span className="text-gray-400 capitalize">
            {format(review?.created_at, "dd MMM, yy")}
          </span>
        </p>
      </div>
      {review.user_email == email && (
        <div className="flex gap-5 border-t border-[#00ed6440] pt-5">
          <button
          onClick={()=>handleDeleteReview(review._id)}
          className="btn btn-warning">Delete</button>

          <button className="btn btn-accent" onClick={()=>setIsModalOpen(true)}>Edit</button>
            <UpdateReview id={review._id} review_text={review.review_text} isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}
            setReviews={setReviews}
             ></UpdateReview>
        </div>
      )}
    </div>
  );
};

export default SingleReview;
