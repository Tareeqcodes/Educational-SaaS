import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.svg'


const TopNav = () => {
  
  return (
    <nav className="fixed top-0 w-full bg-gray-100 text-white p-2 flex justify-between items-center z-50 md:hidden">
      <Link to='/'>
         <img src={logo} alt="logo" className='h-12 w-12'/>
         </Link>
      <div className="flex space-x-4">
        
        {/* {user ? (
            <Link to="/profilepage" className="bg-blue-500 text-white py-1 px-2 rounded">
            Profile
          </Link>
          ): (
            <Link className="bg-green-500 text-white py-1 px-2 rounded" to="/Auth">
            Login
          </Link>
          )} */}
      </div>
    </nav>
  );
};

export default TopNav;
