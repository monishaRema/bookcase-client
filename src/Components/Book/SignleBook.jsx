import React from 'react';
import { Link } from 'react-router';

const SignleBook = ({book}) => {
    return (
        <div className='card bg-primary p-5'>
            <h3 className="card-heading">
                {
                    book.book_title
                }
            </h3>
            <div className="flex gap-2">
                <Link className="btn btn-accent flex-1"
                    to={`/book-details/${book?._id}`}
                >
                    View
                </Link>
                <Link className="btn bg-[#00b4d8] border-[#00b4d8] text-white hover:bg-[#009bd8] flex-1"
                 to={`/update-book/${book?._id}`}
                >
                    Update
                </Link>
                  <button className="btn btn-warning flex-1">
                    Delete
                </button>
            </div>
        </div>
    );
};

export default SignleBook;