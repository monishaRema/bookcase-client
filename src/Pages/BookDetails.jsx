import React from 'react';
import { useLoaderData } from 'react-router';

const BookDetails = () => {
    const book = useLoaderData();
    console.log(book)
    return (
           <section className="register pb-25 pt-45">
             <Helmet>
          <title>Book Case | Login</title>
        </Helmet>
      <div className="container mx-auto px-5"></div>
      </section>
       
    );
};

export default BookDetails;