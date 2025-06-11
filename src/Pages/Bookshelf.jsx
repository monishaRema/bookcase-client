import { Helmet } from "@dr.pogodin/react-helmet";
import React from "react";
import { useLoaderData } from "react-router";
import Book from "../Components/Book/Book";

const Bookshelf = () => {
  const books = useLoaderData();

  return (
    <section className="register py-25">
         <Helmet>
          <title>Book Case | Bookshelf</title>
        </Helmet>
      <div className="container mx-auto px-5">
       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {
                books.length > 0 && books.map(book => <Book key={book._id} book={book}></Book>)
            }
       </div>
      </div>
    </section>
  );
};

export default Bookshelf;
