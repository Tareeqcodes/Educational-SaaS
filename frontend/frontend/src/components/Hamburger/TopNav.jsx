import { Link } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';
import logo from '../../assets/images/logo.svg'
import { useAuth } from '../../../app/context/Authcontext';

const TopNav = () => {
  const { user } = useAuth(); 
  
  return (
    <nav className="fixed flex md:hidden top-0 w-full bg-gray-100 justify-between items-center text-center z-50 px-3">
      <Link to='/'>
         <img src={logo} alt="logo" className='h-12 w- ml-1'/>
         </Link>
         {user ? (
           <Link to="/profile" className="bg-blue-500 text-white py-1 px-2 rounded">
            <FaUser />
          </Link>
          ): (
            <Link className="bg-green-500 text-white py-1 px-2 rounded" to="/Auth">
             Login
             </Link>
          )}
    </nav>
  );
};

export default TopNav;
