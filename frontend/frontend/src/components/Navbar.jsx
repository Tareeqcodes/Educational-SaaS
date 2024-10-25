import React from 'react'
import { Link} from 'react-router-dom';
import NavItems from './Homepage/NavItems';

const Navbar = () => {
  return (
    <>
    <nav
      className="hidden md:flex fixed top-0 left-0 w-full h-16 bg-gray-100 items-center px-4 z-50">
      <div className=" mx-auto flex flex-1 justify-between items-center">
        <h1 className="text-2xl font-bold ml-10 ">Edusphere</h1>
        <NavItems />
          
            <Link className="bg-green-500 text-white py-1 px-2 rounded" to="/Auth">
            Login
          </Link>
         
      </div>
    </nav>
    </>
    
  )
}

export default Navbar



// import React from 'react'
// import { Link} from 'react-router-dom';
// import NavItems from './Homepage/NavItems';

// const Navbar = () => {
//   const { user} = useUser();
//   return (
//     <>
//     <nav
//       className="hidden md:flex fixed top-0 left-0 w-full h-16 bg-gray-100 items-center px-4 z-50">
//       <div className=" mx-auto flex flex-1 justify-between items-center">
//         <h1 className="text-2xl font-bold ml-10 ">Edusphere</h1>
//         <NavItems />
//           {user ? (
//             <Link to="/profilepage" className="bg-blue-500 text-white py-1 px-2 rounded">
//             Profile
//           </Link>
//           ): (
//             <Link className="bg-green-500 text-white py-1 px-2 rounded" to="/Auth">
//             Login
//           </Link>
//           )}
//       </div>
//     </nav>
//     </>
    
//   )
// }

// export default Navbar