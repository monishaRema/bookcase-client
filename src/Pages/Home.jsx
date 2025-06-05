import React from 'react';
import Banner from '../Components/Header/Banner';

import { Helmet } from '@dr.pogodin/react-helmet';

const Home = () => {
      
    return (
       <>   
            <Helmet>
      <title>Book Case | Home
      </title>
    </Helmet>
       <Banner></Banner>
       
       </>
    );
};

export default Home;