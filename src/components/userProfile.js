// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const UserProfilePage = ({ userId }) => {
//   const [userProfile, setUserProfile] = useState(null);

//   useEffect(() => {
//     const fetchUserProfile = async () => {
//       try {
//         const response = await axios.get(`/api/users/${userId}/profile`);
//         setUserProfile(response.data);
//       } catch (error) {
//         // Handle error
//       }
//     };

//     fetchUserProfile();
//   }, [userId]);

//   if (!userProfile) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div>
//       <img src={userProfile.profilePicture} alt="Profile Picture" />
//       <h2>{userProfile.username}</h2>
//       <p>{userProfile.bio}</p>
//       {/* Display other user profile information */}
//     </div>
//   );
// };

// export default UserProfilePage;
