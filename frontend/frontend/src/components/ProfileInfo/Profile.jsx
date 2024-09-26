import React, { useEffect, useState } from 'react';
import { getAuth, signOut } from "firebase/auth";

const Profile = () => {
  const [user, setUser] = useState(null);
  const auth = getAuth();

  useEffect(() => {
    // Fetch the current user info
    const currentUser = auth.currentUser;
    if (currentUser) {
      setUser(currentUser);
    }
  }, [auth]);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      alert("You have been logged out successfully.");
      // Optionally, you can redirect the user after logout
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  return (
    <div className="profile-page">
      {user ? (
        <div className="user-info">
          <h2>Profile</h2>
          <p><strong>Name:</strong> {user.displayName || "Anonymous"}</p>
          <p><strong>Email:</strong> {user.email}</p>

          <button onClick={handleLogout} className="logout-btn">
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
