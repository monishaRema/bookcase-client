import React from "react";
import { MdComment } from "react-icons/md";
import SingleReview from "./SingleReview";

const DisplayReview = ({ reviews, setReviews }) => {
  return (
    <div className="p-5 border border-[#00ed6460] rounded my-15">
      <h2 className="flex items-center gap-4 mb-5 text-accent">
        <MdComment className="text-3xl mt-2" />
        <span className="text-2xl md:text-3xl font-bold">
          Reviews ({reviews.length})
        </span>
      </h2>
      {reviews.length === 0 && (
        <div className=" font-medium text-gray-400 italic mt-4">
          <p className="">
            <span>No reviews yet.</span> Be the first to share your thoughts
            about this book!
          </p>
        </div>
      )}
      {reviews.length > 0 &&
        reviews.map((review) => (
          <SingleReview
            key={review._id}
            review={review}
            reviews={reviews}
            setReviews={setReviews}
          ></SingleReview>
        ))}
    </div>
  );
};

export default DisplayReview;
