import { useEffect } from "react";
import { useState } from "react";

import { baseUrl } from "../../Libs/Utility";
import Book from "../Book/Book";

const Banner = () => {

 const [latestBook, setLatestBook] = useState([]);

 useEffect(()=>{
      fetch(`${baseUrl}/all-books`)
      .then( res => res.json())
      .then(data => setLatestBook(data))
 }, [])
  
  return (
    <section className="pb-25 pt-45">
      <div className="container mx-auto px-5">
        <h1 className="text-3xl md:text-4xl mb-5">Recently Added Books</h1>
        <p className="text-xl mb-10">See what the community has been adding to their shelves</p>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
          {
            latestBook.length > 0 && latestBook.map( book => <Book key={book._id} book={book}></Book>)
          }
         
        </div>
      </div>
    </section>
  );
};

export default Banner;
