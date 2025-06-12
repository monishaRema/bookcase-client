import React, { use, useEffect, useState } from 'react';
import { AuthContext } from '../Contex/AuthContex';
import axios from 'axios';
import { baseUrl } from "../Libs/Utility.js";
import Spinner from './Spinner.jsx';
import { Link, useNavigate } from 'react-router';
import { FaBook, FaBookOpen, FaBookReader} from "react-icons/fa";
import { LuBookHeart } from "react-icons/lu";
import BookChart from '../Components/BookChart/BookChart.jsx';


const UserProfile = () => {
    // const [loading, setLoading] = useState(true)
    const [books, setBooks] = useState([])

    const {user} = use(AuthContext)
    const navigate = useNavigate();
    if(!user?.email){
        navigate('/login')
    }

  useEffect(() => {
    if (user?.email) {
      axios
        .get(`${baseUrl}/user/books/?email=${user.email}`)
        .then((res) => {
          setBooks(res.data);
        })
        .catch((err) => {
          console.error("Failed to fetch books:", err);
        })
        .finally(() => {
        //   setLoading(false);
        });
    }
  }, [user?.email]);


const reading = books.filter(book => book.reading_status === 'reading').length;

const read = books.filter(book => book.reading_status === 'read').length;
const wantsToRead = books.filter(book => book.reading_status === "want-to-read").length;

    return (
       <section className='py-25 bg-gradient-to-br from-primary via-green-700 to-accent'>
<div className="container mx-auto px-5">
    {
        // loading && <Spinner></Spinner>
    }
        <h1 className='text-3xl md:text-5xl text-center mb-3'>Profile Page</h1>
        <p className='mb-15 text-gray-400 text-base md:text-lg text-center'>Your reading journey at a glance</p>
    <div className="flex flex-col lg:flex-row gap-10">
        <div className="profile-info bg-[#ffffff30] rounded-2xl p-8 border backdrop-blur-lg w-full lg:w-4/12 border-[#00ed6450] flex flex-col items-center justify-center">
            <div className="img-box">
                <img src={user?.photoURL} alt={`${user?.displayName} image`} className='size-20 rounded-full mx-auto' />
            </div>
            <h2 className="text-xl md:text-2xl text-gray-200 text-center mt-5 mb-2">
                {
                    user?.displayName
                }
            </h2>
            <p className="text-gray-400 text-center">
                {
                    user?.email
                }
            </p>
        </div>
        <div className="profile-details w-full lg:w-8/12 bg-[#ffffff30] rounded-2xl p-8 border backdrop-blur-lg border-[#00ed6450]">
                <div className='flex flex-col sm:flex-row justify-between items-center flex-wrap gap-5'>
                    <h2 className="text-3xl md:text-4xl font-semibold">My Bookshelf</h2>
                    <div className="flex gap-5">
         
                        <Link to="/add-book" className="btn btn-info bg-gradient-to-r from-secondary to-[#00A8CC] text-white hover:border-secondary ">Add Book</Link>
                        <Link to="/my-books" className="btn btn-accent bg-gradient-to-r from-secondary to-accent text-white hover:border-secondary ">View All</Link>
                    </div>
                </div>
                <div className="flex flex-wrap gap-5 mt-10">
                    <div className="bg-gradient-to-l from-secondary to-accent rounded-lg hover:scale-105 transition-all duration-300 ease-in-out  p-5 text-center flex-1 flex flex-col justify-center items-center min-w-[180px]">
                            <FaBook size={42}/>
                            <h3 className='mb-3 text-5xl'>{books && books.length}</h3>
                            <p className='text-base text-gray-300'>Total Books</p>
                    </div>
                    <div className="bg-gradient-to-r from-secondary to-[#00A8CC] rounded-lg hover:scale-105 transition-all duration-300 ease-in-out  p-5 text-center flex-1 flex flex-col justify-center items-center min-w-[180px]">
                            <FaBookOpen size={42} />
                            <h3 className='text-5xl mb-3'>{read}</h3>
                            <p className='text-base text-gray-300'>Books Read</p>
                    </div>
                    <div className="bg-gradient-to-r from-secondary to-accent rounded-lg hover:scale-105 transition-all duration-300 ease-in-out  p-5 text-center flex-1 flex flex-col justify-center items-center min-w-[180px]">
                            <FaBookReader size={42} />
                            <h3 className='mb-3 text-5xl'>{reading}</h3>
                            <p className='text-base text-gray-300'>Books Reading</p>
                    </div>
                    <div className="bg-gradient-to-r from-secondary to-[#00A8CC] rounded-lg hover:scale-105 transition-all duration-300 ease-in-out  p-5 text-center flex-1 flex flex-col justify-center items-center min-w-[180px]">
                            <LuBookHeart size={42}/>
                            <h3 className='mb-5 text-5xl'>{wantsToRead}</h3>
                            <p className='text-base text-gray-200'>Wish to Read</p>
                    </div>
                </div>
        </div>
    </div>
    <div className='bg-[#ffffff30] backdrop-blur-lg rounded-3xl px-0 py-5 border border-[#00ed6490] mt-15'>
        <BookChart user_email={user.email}></BookChart>
    </div>

</div>
       </section>
    );
};

export default UserProfile;