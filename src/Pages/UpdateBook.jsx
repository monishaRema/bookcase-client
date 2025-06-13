import { Helmet } from "@dr.pogodin/react-helmet";
import React, { use } from "react";
import { AuthContext } from "../Contex/AuthContex";
import { FiEdit } from "react-icons/fi";

import Swal from "sweetalert2";
import { useLoaderData, useNavigate } from "react-router";
import { PiBookOpenBold } from "react-icons/pi";
import UseAxiosSecure from "../Hooks/UseAxiosSecure";

const UpdateBook = () => {
  const { user } = use(AuthContext);
  const book = useLoaderData()
  const navigate = useNavigate();
  const axiosSecure = UseAxiosSecure()


  const handleUpdateBook = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    data.upvotes = parseInt(data.upvotes)
    data.user_email = user?.email;
    data.user_name = user?.displayName

      axiosSecure.put(`/book/${book._id}`, data)
      .then((result) => {
         if (result.data.modifiedCount) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "You have updated a book successfully",
            showConfirmButton: false,
            timer: 1500,
          });
          navigate('/my-books');
        }
      })
      .catch();
  };
    return (
           <section className="register py-25">
      <div className="container mx-auto px-5">
        <Helmet>
          <title>Book Case | Add Book</title>
        </Helmet>

  <div className="mb-20 max-w-5xl mx-auto">
              <div className="img-box bg-gradient-to-l from-[#001e2b10]  to-accent rounded-full w-[120px] h-[120px] mx-auto flex justify-center items-center mb-10 group">
                  <PiBookOpenBold className="size-15 group-hover:rotate-360 transition duration-1000 ease-in-out" />
              </div>
              <h1 className="text-center text-3xl md:text-4xl font-semibold mb-10">Update Your Book</h1>
              <p className="text-center text-xl mb-10 max-w-3xl mx-auto text-gray-400">Edit your book information and keep your collection up to date. Easily manage details to organize your personal library.</p>
         
          </div>


        <div className="max-w-5xl mx-auto bg-primary text-gray-50 rounded-lg  gap-5 items-center overflow-hidden border-2 border-[#00ed6440] accent-shadow">
          
          <div className="form-box w-full  p-6 md:p-10 ">
            <h2 className="mb-10 text-3xl md:text-4xl font-bold text-accent text-center">Book Information</h2>
            <form onSubmit={handleUpdateBook}>
              <div className="flex flex-col md:flex-row gap-5">
                <div className="form-group mb-5 w-full md:w-1/2">
                  <label htmlFor="book_title" className="block mb-2">
                    Book Title *
                  </label>
                  <input
                    type="text"
                    id="book_title"
                    name="book_title"
                    className="theme-input"
                    placeholder="Enter your book title"
                    defaultValue={book?.book_title}
                    required
                  />
                </div>
                <div className="form-group mb-5 w-full md:w-1/2">
                  <label htmlFor="book_author" className="block mb-2">
                    Book Author *
                  </label>
                  <input
                    type="text"
                    id="book_author"
                    name="book_author"
                    className="theme-input"
                    placeholder="Enter book author"
                    defaultValue={book?.book_author}
                    required
                  />
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-5">
                <div className="form-group mb-5 w-full md:w-1/2">
                  <label htmlFor="cover_photo" className="block mb-2">
                    Cover photo URL *
                  </label>
                  <input
                    type="url"
                    id="cover_photo"
                    name="cover_photo"
                    className="theme-input"
                    placeholder="Enter book cover photo URL"
                     defaultValue={book?.cover_photo}
                    required
                  />
                </div>
                <div className="form-group mb-5 w-full md:w-1/2">
                  <label htmlFor="total_pages" className="block mb-2">
                    Total Pages *
                  </label>
                  <input
                    type="number"
                    id="total_pages"
                    name="total_pages"
                    className="theme-input"
                    placeholder="Enter book author"
                     defaultValue={book?.total_pages}
                    required
                  />
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-5">
                <div className="form-group mb-5 w-full md:w-1/2">
                  <label htmlFor="book_category" className="block mb-2">
                    Book Category *
                  </label>

                  <select
                    id="book_category"
                    name="book_category"
                    className="theme-select"
                    required
                    defaultValue={book?.book_category}
                  >
                    <option value="fiction" className="bg-[#0e1b36] text-white">Fiction</option>
                    <option value="Sci-Fi" className="bg-[#0e1b36] text-white">Sci-Fi</option>
                    <option value="romance" className="bg-[#0e1b36] text-white">Romance</option>
                    <option value="history" className="bg-[#0e1b36] text-white">History</option>
                    <option value="fantasy" className="bg-[#0e1b36] text-white">Fantasy</option>
                    <option value="motivation" className="bg-[#0e1b36] text-white">Motivation</option>
                  </select>
                </div>
                <div className="form-group mb-5 w-full md:w-1/2">
                  <label htmlFor="reading_status" className="block mb-2">
                    Reading Status *
                  </label>

                  <select
                    id="reading_status"
                    name="reading_status"
                    className="theme-select"
                    defaultValue={book?.reading_status}
                    required
                  >
                    <option value="want-to-read" className="bg-[#0e1b36] text-white">Want to read</option>
                    <option value="reading" className="bg-[#0e1b36] text-white">Reading</option>
                    <option value="read" className="bg-[#0e1b36] text-white">Read</option>
                 
                  </select>
                </div>
             
              </div>

               <div className="flex flex-col md:flex-row gap-5">
                <div className="form-group mb-5 w-full md:w-1/2">
                  <label htmlFor="user_name" className="block mb-2">
                    User Name
                  </label>
                  <input
                    type="text"
                    id="user_name"
                    name="user_name"
                    className="theme-input cursor-not-allowed"
                    defaultValue={user?.email}
                    required
                    readOnly
                  />
                </div>
                <div className="form-group mb-5 w-full md:w-1/2">
                  <label htmlFor="user_name" className="block mb-2">
                    User Name
                  </label>
                  <input
                    type="text"
                    id="user_name"
                    name="user_name"
                    className="theme-input cursor-not-allowed"
                    defaultValue={user?.displayName}
                    required
                    readOnly
                  />
                </div>
              
              </div>
              <div className="form-group mb-5 w-full ">
                  <label htmlFor="upvotes" className="block mb-2">
                   Upvotes
                  </label>
                  <input
                    type="number"
                    id="upvotes"
                    name="upvotes"
                    className="theme-input cursor-not-allowed"
                    defaultValue={0}
                    required
                    readOnly
                  />
                </div>

                 <div className="form-group mb-5 w-full ">
                  <label htmlFor="book_overview" className="block mb-2">
                   Book Overview *
                  </label>
                 <textarea
                    type="text"
                    id="book_overview"
                    name="book_overview"
                    className="theme-input h-32"
                    placeholder="Enter your book overview"
                    defaultValue={book?.book_overview}
                    required
                 >

                 </textarea>
                </div>

              <div className="flex justify-center pt-5">
                <button
                  type="submit"
                  className="btn px-8 btn-lg btn-accent bg-gradient-to-r from-secondary to-accent text-white hover:border-secondary flex items-center gap-3"
                >
                    <FiEdit   size={24}/>

                  <span>Update Book Info</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
    );
};

export default UpdateBook;