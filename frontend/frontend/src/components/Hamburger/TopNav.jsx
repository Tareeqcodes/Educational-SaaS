import { Link } from 'react-router-dom';
import { AiOutlineSearch} from 'react-icons/ai';
import { useUser } from '../context/UserContext';

const TopNav = () => {
  const { user } = useUser();
  return (
    <nav className="fixed top-0 w-full bg-gray-800 text-white p-4 flex justify-between items-center z-50 md:hidden">
      <h1 className="text-2xl font-bold">Edusphere</h1>
      <div className="flex space-x-4">
        <button>
          <AiOutlineSearch size={24} />
        </button>
        {user ? (
            <Link to="/profilepage" className="bg-blue-500 text-white py-1 px-2 rounded">
            Profile
          </Link>
          ): (
            <Link className="bg-green-500 text-white py-1 px-2 rounded" to="/Auth">
            Login
          </Link>
          )}
      </div>
    </nav>
  );
};

export default TopNav;
