import React from "react";
import { use } from "react";
import { MdOutlineAddComment, MdRateReview } from "react-icons/md";
import { AuthContext } from "../../Contex/AuthContex";
import Swal from "sweetalert2";
import { useNavigate } from "react-router";
import UseAxiosSecure from "../../Hooks/UseAxiosSecure";

const Review = ({ bookId, setReviews }) => {
  const { user } = use(AuthContext);
  const navigate = useNavigate();
   const axiosSecure = UseAxiosSecure();


  const handleReview = (e) => {
    e.preventDefault();
    const form = e.target
    const formReview = e.target.review.value;

    if (!user || !user.email) {
      Swal.fire({
        text: "Please login first to post a review",
        showCancelButton: false,
        confirmButtonColor: "#00ed64",
      });
      return navigate("/login");
    }
    if (formReview.length >= 30) {
      const data = {
        book_id: bookId,
        user_email: user?.email,
        user_name: user?.displayName,
        review_text: formReview,
        created_at: new Date().toISOString(),
      };

      axiosSecure.post(`/review`, data).then((result) => {
        if (result.data.status == 400) {
          Swal.fire({
            position: "center center",
            icon: "warning",
            title: "Sorry you have already reviewed this book",
            showConfirmButton: false,
            timer: 1500,
          });
          return form.reset();
        }
        if (result.data.insertedId) {
          Swal.fire({
            position: "center center",
            icon: "success",
            title: "You posted a review successfully",
            showConfirmButton: false,
            timer: 2000,
          });
          axiosSecure.get(`/review/${bookId}`).then((result) => {
            setReviews(result.data);
            
          });
          form.reset()
        }
      });
    } else {
      Swal.fire({
        text: "Please enter at least 30 charecter for review",
        showCancelButton: false,
        confirmButtonColor: "#00ed64",
      });
    }
  };
  return (
    <div className="p-5 border border-[#00ed6460] rounded">
      <h2 className="flex items-center gap-4 mb-5 text-accent">
        <MdRateReview className="text-3xl mt-2" />
        <span className="text-2xl md:text-3xl font-bold">Write a Review</span>
      </h2>
      <form action="" onSubmit={handleReview}>
        <textarea
          type="text"
          id="review"
          name="review"
          className="theme-input h-32 mb-5"
          placeholder="Write a book review"
          required
        ></textarea>
        <button
          type="submit"
          className="btn px-8 btn-lg btn-accent bg-gradient-to-t from-secondary to-accent text-white hover:border-secondary flex items-center gap-3"
        >
          <MdOutlineAddComment size={24} />

          <span>Post Review</span>
        </button>
      </form>
    </div>
  );
};

export default Review;
