import React, { use } from 'react';
import { AuthContext } from '../Contex/AuthContex';

const UserProfile = () => {
    const {user} = use(AuthContext)
    if(!user?.email){
        location.reload();
    }


    return (
       <section className='py-25 bg-gradient-to-r from-primary to-green-800'>
<div className="container mx-auto px-5">
    <div className="flex flex-col md:flex-row">
        <div className="profile-info">
            <div className="img-box">
                <img src={user?.photo_url} alt={`${user?.displayName} image`} />
            </div>
        </div>
        <div className="profile-details">

        </div>
    </div>
</div>
       </section>
    );
};

export default UserProfile;