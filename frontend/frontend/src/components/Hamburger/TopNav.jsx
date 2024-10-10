import { Link } from 'react-router-dom';
import { AiOutlineSearch} from 'react-icons/ai';

const TopNav = () => {
  return (
    <nav className="fixed top-0 w-full bg-gray-800 text-white p-4 flex justify-between items-center z-50 md:hidden">
      {/* Logo */}
      <h1 className="text-2xl font-bold">Edusphere</h1>
      
      {/* Icons - Search, Notifications, Profile */}
      <div className="flex space-x-4">
        <button>
          <AiOutlineSearch size={24} />
        </button>
        <Link className="bg-green-500 text-white py-1 px-2 items-center text-center rounded" to="/Auth">
          Login
          </Link> 
      </div>
    </nav>
  );
};

export default TopNav;
