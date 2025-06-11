import React, { use } from 'react';
import { AuthContext } from '../Contex/AuthContex';

const UserProfile = () => {
    const {user} = use(AuthContext)
    console.log(user)
    if(!user?.email){
        location.reload();
    }


    return (
       <section className='py-25 bg-gradient-to-r from-primary to-green-800'>
<div className="container mx-auto px-5">
    <div className="flex flex-col md:flex-row">
        <div className="profile-info bg-[#00000030] rounded p-5 w-full md:w-4/12">
            <div className="img-box">
                <img src={user?.photoURL} alt={`${user?.displayName} image`} className='size-20 rounded-full mx-auto' />
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