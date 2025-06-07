import React from 'react';
import { use } from 'react';
import { format } from "date-fns";

import { AuthContext } from '../../Contex/AuthContex';
import { FaUser } from 'react-icons/fa';
import { MdAccessTime } from 'react-icons/md';
const SingleReview = ({review}) => {
      const {user} = use(AuthContext)
    
        const email = user?.email;
    return (
       <div className='flex flex-col gap-5 bg-primary rounded mb-5 p-5' key={review._id}>
                <p className='text-base text-gray-300'>
                    {review.review_text}
                </p>
                <div className='flex gap-10'>
                    <p className="flex items-center gap-2">
                                    <FaUser className="text-accent text-xl" />
                                    <span className="text-gray-400 capitalize">
                                      {
                                        review?.user_name
                                      }
                                    </span>
                                  </p>

                                  <p className="flex items-center gap-2">
                                    <MdAccessTime className="text-accent text-2xl" />
                                    <span className="text-gray-400 capitalize">
                                       
                                      {
                                         format(review?.created_at, "dd MMM, yy")
                                        
                                      }
                                    </span>
                                  </p>
                </div>
                {
                    review.user_email == email && (
                    <div className='flex gap-5 border-t border-[#00ed6440] pt-5'>
                        <button className='btn btn-warning'>
                                Delete
                        </button>
                        <button className='btn btn-accent'>
                                Edit
                        </button>
                    </div>)
                }

            </div>
    );
};

export default SingleReview;