import React, { use, useEffect, useState } from 'react';
import { AuthContext } from '../Contex/AuthContex';
import axios from 'axios';
import { baseUrl } from '../Libs/Utility';
import SignleBook from '../Components/Book/SignleBook';

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