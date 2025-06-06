import React from 'react';
import Banner from '../Components/Header/Banner';

import { Helmet } from '@dr.pogodin/react-helmet';
import PopularBooks from '../Components/Home/PopularBooks';

const Home = () => {
      
    return (
       <>   
            <Helmet>
      <title>Book Case | Home
      </title>
    </Helmet>
       {/* <Banner></Banner> */}
       <PopularBooks></PopularBooks>
       
       </>
    );
};

export default Home;