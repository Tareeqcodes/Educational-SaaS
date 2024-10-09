import React, { useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import LecturersProfile from './LecturersProfile'; // Import your LecturersProfile component

const Profile = () => {
  const [user, setUser] = useState(null);
  const [role, setRole] = useState(null); // State to store user role
  const auth = getAuth();
  const db = getFirestore();
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch the current user info
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        setUser(currentUser);

        // Fetch the role from Firestore
        const userDocRef = doc(db, 'users', currentUser.uid);
        const userDoc = await getDoc(userDocRef);
        if (userDoc.exists()) {
          const userData = userDoc.data();
          setRole(userData.role); // Set the role from Firestore
        }
      } else {
        setUser(null);
        navigate('/login');
      }
    });

    return () => unsubscribe();
  }, [auth, db, navigate]);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      alert("You have been logged out successfully.");
      navigate('/');
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  return (
    <div className="profile-page py-32 items-center text-center justify-center">
      {user ? (
        <div className="user-info">
          <h2>Profile</h2>
          <p><strong>Email:</strong> {user.email}</p>

          {/* Check the user's role and conditionally render the LecturersProfile */}
          {role === 'lecturer' ? (
            <LecturersProfile /> // Show the lecturer's profile with upload options
          ) : (
            <p>Welcome, {user.email}! You are logged in as a {role}.</p>
          )}

          <button
            onClick={handleLogout}
            className="logout-btn bg-orange-400 font-semibold text-xl font-mono border border-orange-500 py-1 px-2 my-5 rounded-lg items-center justify-center"
          >
            Logout
          </button>
        </div>
      ) : (
        <p>Loading user info...</p>
      )}
    </div>
  );
};

export default Profile;
