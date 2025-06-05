import React, { use, useEffect, useState } from 'react';
import { AuthContext } from '../Contex/AuthContex';
import axios from 'axios';
import { baseUrl } from '../Libs/Utility';
import SignleBook from '../Components/Book/SignleBook';

const MyBooks = () => {
    const [book, setBook] = useState([])
    const {user} = use(AuthContext)

    useEffect(()=> {
        axios.get(`${baseUrl}/book?email=${user.email}`).then(res => res.data)
        .then( res => {
            setBook(res)
    })

    }, [])

console.log(book)

    return (
       <section className='pb-25 pt-45'>
        <div className="container mx-auto px-5">

        <div className="grid grid-cols-1 sm:grid-col-2 lg:grid-cols-3 gap-5">
 {
     book.length > 0 && book?.map(book => <SignleBook key={book._id} book={book}></SignleBook>)
    }
        </div>
    </div>
           
       </section>
    );
};

export default MyBooks;