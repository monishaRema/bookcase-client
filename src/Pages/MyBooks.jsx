import React, { use, useEffect, useState } from "react";
import { AuthContext } from "../Contex/AuthContex";
import axios from "axios";
import { baseUrl } from "../Libs/Utility";
import SignleBook from "../Components/Book/SignleBook";
import { SlBookOpen } from "react-icons/sl";
import { Link } from "react-router";
import { FaPlus } from "react-icons/fa";

const MyBooks = () => {
  const [books, setBooks] = useState([]);
  const { user } = use(AuthContext);

  useEffect(() => {
    axios
      .get(`${baseUrl}/book?email=${user.email}`)
      .then((res) => res.data)
      .then((res) => {
        setBooks(res);
      });
  }, []);

  return (
    <section className="pb-25 pt-45">
      <div className="container mx-auto px-5">
        <div className="mb-20 max-w-[900px] mx-auto">
          <div className="img-box bg-gradient-to-l from-[#001e2b10]  to-accent rounded-full w-[120px] h-[120px] mx-auto flex justify-center items-center mb-10 group">
            <SlBookOpen className="size-15 group-hover:rotate-360 transition duration-1000 ease-in-out" />
          </div>
          <h1 className="text-center text-3xl md:text-4xl font-semibold mb-5">
            My Books
          </h1>
          <p className="text-center text-xl max-w-3xl mx-auto mb-5 text-gray-400">
            Manage your personal book collection and track your reading
            progress.Keep track of what you’ve read and what’s next on your
            reading list.
          </p>
          <div className="flex justify-center">
            <Link to="/add-book" className="btn btn-lg btn-accent flex items-center text-lg text-gray-800">
              <FaPlus size={20} />
              <span>Add Book to Shelf</span>
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {books.length > 0 &&
            books?.map((book) => (
              <SignleBook
                setBooks={setBooks}
                books={books}
                key={book._id}
                book={book}
              ></SignleBook>
            ))}
        </div>
      </div>
    </section>
  );
};

export default MyBooks;
