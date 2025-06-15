import React from 'react';
import { Helmet } from '@dr.pogodin/react-helmet';
import PopularBooks from '../Components/Home/PopularBooks';
import RecentBooks from '../Components/Home/RecentBooks';
import Category from '../Components/Home/Category';
import CTA from '../Components/Home/CTA';
import Hero from '../Components/Header/Hero';

const Home = () => {
      
    return (
       <>   
            <Helmet>
      <title>Book Case | Home
      </title>
    </Helmet>
       <Hero></Hero>
       <PopularBooks></PopularBooks>
       <Category></Category>
       <CTA></CTA>
       <RecentBooks></RecentBooks>
       
       </>
    );
};

export default Home;