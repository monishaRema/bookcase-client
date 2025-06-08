import React from 'react';
import Banner from '../Components/Header/Banner';

import { Helmet } from '@dr.pogodin/react-helmet';
import PopularBooks from '../Components/Home/PopularBooks';
import RecentBooks from '../Components/Home/RecentBooks';

const Home = () => {
      
    return (
       <>   
            <Helmet>
      <title>Book Case | Home
      </title>
    </Helmet>
       <Banner></Banner>
       <PopularBooks></PopularBooks>
       <RecentBooks></RecentBooks>
       
       </>
    );
};

export default Home;