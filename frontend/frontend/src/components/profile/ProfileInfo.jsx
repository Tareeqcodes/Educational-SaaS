import React from 'react'
import {useAuth} from '../../../app/context/Authcontext'

const ProfileInfo = () => {
    const {user, loading, signOut} = useAuth;

    if (loading) return <p>Loading...</p>;

    if (!user) return <p>No user is logged in</p>;
  
    return (
      <div className='bg-white text-black items-center justify-center text-center m-20'>
        <h2>User Profile</h2>
        
        <p><strong>Email:</strong> {user.email}</p>

        <button className='bg-green-500 p-3' onClick={signOut}>
            SignOut
        </button>
        
      </div>
    );
}

export default ProfileInfo