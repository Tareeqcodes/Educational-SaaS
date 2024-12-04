// import React from 'react'
// import { useState, useEffect } from 'react'
// import { Query } from 'appwrite'
// import { databases } from '../config/appwrite'
// import { useAuth } from '../context/Authcontext'

// const MyRoom =  () => {
//     const [room, setRoom] = useState()
//     const [ error, setError ] = useState(null)
//     const user = useAuth()
//     const userId = user.$id

//     useEffect( () =>{
//       const myRental = async () => {
//         try {
//           const response = await databases.listDocuments(
//               import.meta.env.VITE_DATABASE_ID,
//               import.meta.env.VITE_COLLECTION_ID,
//               [Query.equal('user_id', userId)]
//            );
//            return response
//       } catch (error) {
//           console.log(error)
//       }
//       }
//       myRental()
//     })
    
    
//   return (
//     <div>MyRoom</div>
//   )
// }

// export default MyRoom