import { Helmet } from "@dr.pogodin/react-helmet";
import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import Book from "../Components/Book/Book";
import axios from "axios";
import { baseUrl } from "../Libs/Utility";
import Spinner from "./Spinner";

const Bookshelf = () => {
  const initialBooks = useLoaderData();
  const [loading, setLoading] = useState(true);
  const [books, setBooks] = useState(initialBooks);
  const [searchTerm, setSearchTerm] = useState("");
  const [readingStatus, setReadingStatus] = useState("");

  useEffect(() => {
    setLoading(true);
    const data = {
      params: {
        title: searchTerm,
        reading_status: readingStatus,
      },
    };
    axios
      .get(`${baseUrl}/all-books`, data)
      .then((res) => {
        setBooks(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, [searchTerm, readingStatus]);

  return (
    <section className="register py-25">
      <Helmet>
        <title>Book Case | Bookshelf</title>
      </Helmet>
      <div className="container mx-auto px-5">
        <div className="flex flex-col lg:flex-row gap-5 mb-10">
          <div className="w-full lg:w-9/12">
            <input
              type="text"
              name="search"
              className="w-full rounded-lg outline-0 border border-[#00ed6440] focus:border-accent px-5 py-3"
              placeholder="Search"
              defaultValue={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="w-full lg:w-3/12">
            <select
              onChange={(e) => setReadingStatus(e.target.value)}
              className="w-full rounded-lg outline-0 border border-[#00ed6440] focus:border-accent px-5 py-3 bg-transparent text-gray-100"
              defaultValue=""
            >
              <option className="bg-primary tex-white" value="">
                Filter By status
              </option>
              <option className="bg-primary tex-white" value="">
                All Status
              </option>
              <option className="bg-primary tex-white" value="read">
                Read
              </option>
              <option className="bg-primary tex-white" value="reading">
                Reading
              </option>
              <option className="bg-primary tex-white" value="want-to-read">
                Want to Read
              </option>
            </select>
          </div>
        </div>
        {books.length <= 0 && (
          <div className="mt-20 flex flex-col items-center justify-center text-center text-gray-100">
            <h2 className="text-3xl lg:text-4xl font-semibold mb-2">
              No book found
            </h2>
            <p className="text-md text-gray-400">
              Try searching for a different title or check your spelling.
            </p>
          </div>
        )}

        {loading ? (
          <Spinner></Spinner>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {books.length > 0 &&
              books.map((book) => <Book key={book._id} book={book}></Book>)}
          </div>
        )}
      </div>
    </section>
  );
};

export default Bookshelf;
