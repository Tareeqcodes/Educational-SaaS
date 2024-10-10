import { AiOutlineHome,  AiOutlineFilePdf} from 'react-icons/ai';
import { IoNewspaperOutline} from 'react-icons/io5';
import { FaStore, FaBuilding} from "react-icons/fa";
import { Link } from 'react-router-dom';

const BottomNav = () => {
  return (
    <div className='fixed bottom-0 left-0  w-full  flex flex-row bg-black py-5 px-5 gap-6 text-center items-center justify-evenly text-white md:hidden'>
      <div className="flex flex-col">
      <Link to="/">
      <AiOutlineHome className='text-green-600 text-3xl'/>
           <span className='font-semibold text-sm'>Home</span>
          </Link>
      </div>
      <div className="flex flex-col">
        <Link to="pdfs" >
      <AiOutlineFilePdf className="text-white text-3xl" />
       <span className='font-semibold text-sm'>Pdfs</span>
        </Link>
      </div>
      <div className="flex flex-col text-justify">
        <Link to="/rental">
        <FaBuilding className='text-white text-3xl'/>
          <span className='font-semibold text-sm'>Rental</span>
          </Link>
      </div>
      <div className="flex flex-col">
        <Link to="/marketplace">
       <FaStore className="text-green-600 text-3xl" />
       <span className='font-semibold text-sm'>Bukstore</span>
        </Link>
      </div>
      <div className="flex flex-col">
        <Link to="/news">
      <IoNewspaperOutline className='text-white text-3xl' />
       <span className='font-semibold text-sm'>News</span> 
        </Link>
      </div>
    </div>
  )
}

export default BottomNav