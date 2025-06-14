import React from 'react';
import Banner from '../Components/Header/Banner';
import { Helmet } from '@dr.pogodin/react-helmet';
import PopularBooks from '../Components/Home/PopularBooks';
import RecentBooks from '../Components/Home/RecentBooks';
import Category from '../Components/Home/Category';
import CTA from '../Components/Home/CTA';

const Home = () => {
      
    return (
       <>   
            <Helmet>
      <title>Book Case | Home
      </title>
    </Helmet>
       <Banner></Banner>
       <PopularBooks></PopularBooks>
       <Category></Category>
       <CTA></CTA>
       <RecentBooks></RecentBooks>
       
       </>
    );
};

export default Home;