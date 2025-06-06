import { Helmet } from "@dr.pogodin/react-helmet";
import React, { use } from "react";
import { AuthContext } from "../Contex/AuthContex";
import { GiBookshelf } from "react-icons/gi";
import axios from "axios";
import { baseUrl } from "../Libs/Utility";
import Swal from "sweetalert2";
import { PiBookOpenBold } from "react-icons/pi";
import { IoShareSharp } from "react-icons/io5";
import { MdLibraryBooks } from "react-icons/md";



const AddBook = () => {
  const { user } = use(AuthContext);
  const handleAddBook = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    data.upvotes = parseInt(data.upvotes)
    data.user_email = user?.email;
    data.user_name = user?.displayName
    axios
      .post(`${baseUrl}/book`, data)
      .then((result) => {
        if (result.data.insertedId) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "You have added a book successfully",
            showConfirmButton: false,
            timer: 1500,
          });
          form.reset();
        }
      })
      .catch();
  };
  return (
    <section className="register pb-25 pt-45">
      <div className="container mx-auto px-5">
        <Helmet>
          <title>Book Case | Add Book</title>
        </Helmet>

         <div className="mb-20 max-w-[900px] mx-auto">
              <div className="img-box bg-gradient-to-l from-secondary to-accent rounded-full w-[120px] h-[120px] mx-auto flex justify-center items-center mb-10">
                  <PiBookOpenBold className="size-15" />
              </div>
              <h1 className="text-center text-3xl md:text-4xl font-semibold mb-10">Add Your Book</h1>
              <p className="text-center text-xl mb-10 ">Share your literary journey with our community! Adding books to your digital <br /> bookshelf helps you:</p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-5 ">

                <div className="box-1 border border-accent rounded  py-4 px-2">
                  <div className="img-box bg-gradient-to-r from-secondary to-accent  rounded-xl w-[60px] h-[60px] mx-auto flex justify-center items-center mb-5 ">
                  <PiBookOpenBold className="size-7" />
              </div>
              <h3 className="text-center text-xl  font-semibold mb-4">Track Progress</h3>
              <p className="text-center">Monitor your reading journey and set goals</p>
                </div>
                
                <div className="box-2 border border-accent rounded  py-5 px-3">
                  <div className="img-box bg-primary  rounded-xl w-[60px] h-[60px] mx-auto flex justify-center items-center mb-5 ">
                  <IoShareSharp  className="size-7" />
              </div>
              <h3 className="text-center text-xl  font-semibold mb-4">Share Reviews</h3>
              <p className="text-center">Help others discover amazing books</p>
                </div>
                
                <div className="box-3 border border-accent rounded  py-5 px-3">
                  <div className="img-box bg-gradient-to-l from-secondary to-accent  rounded-xl w-[60px] h-[60px] mx-auto flex justify-center items-center mb-5 ">
                  <MdLibraryBooks  className="size-7" />
              </div>
              <h3 className="text-center text-xl  font-semibold mb-4">Build Library</h3>
              <p className="text-center">Create your personal digital collection</p>
                </div>
                
              </div>
            </div>

        <div className="max-w-5xl mx-auto bg-primary text-gray-50 rounded-lg  gap-5 items-center overflow-hidden border-2 border-[#00ed6440] accent-shadow">
          <div className="form-box w-full  p-6 md:p-10 ">
            <form onSubmit={handleAddBook}>
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
                  >
                    <option value="fiction" className="bg-[#0e1b36] text-white">
                      Fiction
                    </option>
                    <option value="Sci-Fi" className="bg-[#0e1b36] text-white">
                      Sci-Fi
                    </option>
                    <option value="romance" className="bg-[#0e1b36] text-white">
                      Romance
                    </option>
                    <option value="history" className="bg-[#0e1b36] text-white">
                      History
                    </option>
                    <option value="fantasy" className="bg-[#0e1b36] text-white">
                      Fantasy
                    </option>
                    <option
                      value="motivation"
                      className="bg-[#0e1b36] text-white"
                    >
                      Motivation
                    </option>
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
                    required
                  >
                    <option
                      value="want-to-read"
                      className="bg-[#0e1b36] text-white"
                    >
                      Want to read
                    </option>
                    <option value="reading" className="bg-[#0e1b36] text-white">
                      Reading
                    </option>
                    <option value="read" className="bg-[#0e1b36] text-white">
                      Read
                    </option>
                  </select>
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-5">
                <div className="form-group mb-5 w-full md:w-1/2">
                  <label htmlFor="user_email" className="block mb-2">
                    User Name
                  </label>
                  <input
                    type="text"
                    id="user_email"
                    name="user_email"
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
                  required
                ></textarea>
              </div>

              <div className="flex justify-center pt-5">
                <button
                  type="submit"
                  className="gradient-btn"
                >
                  <GiBookshelf size={24} />

                  <span>Add Book to Shelf</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AddBook;
