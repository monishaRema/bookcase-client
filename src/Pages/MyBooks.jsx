import React, { use, useEffect, useState } from 'react';
import { AuthContext } from '../Contex/AuthContex';
import axios from 'axios';
import { baseUrl } from '../Libs/Utility';
import SignleBook from '../Components/Book/SignleBook';
import { PiBookOpenBold } from "react-icons/pi";
import { IoShareSharp } from "react-icons/io5";
import { MdLibraryBooks } from "react-icons/md";



const MyBooks = () => {
    const [books, setBooks] = useState([])
    const {user} = use(AuthContext)

    useEffect(()=> {
        axios.get(`${baseUrl}/book?email=${user.email}`).then(res => res.data)
        .then( res => {
            setBooks(res)
    })

    }, [])



    return (
       <section className='pb-25 pt-45'>
        <div className="container mx-auto px-5">

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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
 {
     books.length > 0 && books?.map(book => <SignleBook setBooks={setBooks} books={books} key={book._id} book={book}></SignleBook>)
    }
        </div>
    </div>
           
       </section>
    );
};

export default MyBooks;