import React, { useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';


const Profile = () => {
  const [user, setUser] = useState(null);
  const auth = getAuth();
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch the current user info
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser ){
        setUser(currentUser);
      } else {
        setUser(null);
        navigate('/login');
      }
    });
    return() =>unsubscribe();

  }, [auth, navigate]);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      alert("You have been logged out successfully.");
      navigate('/');
      // Optionally, you can redirect the user after logout
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  return (
    <>
    <div className="profile-page py-32 items-center text-center justify-center">
      {user ? (
        <div className="user-info">
          <h2>Profile</h2>
          <p><strong>Email:</strong> {user.email}</p>

          <button onClick={handleLogout} className="logout-btn bg-orange-400 font-semibold text-xl font-mono border border-orange-500 py-1 px-2 my-5 rounded-lg items-center justify-center">
            Logout
          </button>
        </div>
      ) : (
        <p>Loading user info...</p>
      )}
    </div>
    </>
  );
};

export default Profile;
