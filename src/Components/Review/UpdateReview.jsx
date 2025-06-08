import axios from "axios";
import React from "react";
import { FiEdit } from "react-icons/fi";
import { baseUrl } from "../../Libs/Utility";
import Swal from "sweetalert2";

const UpdateReview = ({ id, review_text, isModalOpen, setIsModalOpen,setReviews }) => {
  const open = isModalOpen ? "modal-open" : "";

  const editReview = (e) => {
    e.preventDefault();
    const form = e.target;
    const review = form.review.value;
    axios.patch(`${baseUrl}/review/${id}`, { review }).then((result) => {
      if (result.data.modifiedCount) {
        setIsModalOpen(false);
        Swal.fire({
          text: "Your review has been updated.",
          icon: "success",
        });
        setReviews(prevReviews =>
        prevReviews.map(result =>
          result._id === id ? { ...result, review_text: review } : result
        ))
      }
    });
  };
  return (
    <dialog id="" className={`modal  ${open}`}>
      <div className="modal-box bg-primary">
        <h2 className="text-3xl text-accent mb-5 font-bold">Your Review</h2>
        <form onSubmit={editReview}>
          <textarea
            name="review"
            id=""
            className="h-30 w-full border theme-input mb-5"
            defaultValue={review_text}
          ></textarea>
          <button
            type="submit"
            className="btn px-5 btn-accent bg-gradient-to-t from-secondary to-accent text-white hover:border-secondary flex items-center gap-3"
          >
            <FiEdit size={20} />

            <span className="text-base">Update Review</span>
          </button>
        </form>
        <button
          onClick={() => setIsModalOpen(false)}
          className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
        >
          ✕
        </button>
      </div>
    </dialog>
  );
};

export default UpdateReview;
