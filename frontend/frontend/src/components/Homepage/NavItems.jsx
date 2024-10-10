import { Link } from 'react-router-dom'

const NavItems = () => {
  return (
    
        <div className='flex flex-row'>
          <Link className="text-white font-bold" to="/">
           Home
          </Link>
         
          <Link className="text-white mx-2 font-bold" to="/pdfs">
          PDFs
          </Link>
          <Link className="text-white mx-2 font-bold" to="/rental">
          Rental
          </Link>
          <Link className="text-white mx-2 font-bold" to="/ma rounderketplace">
          Marketplace
          </Link>
          <Link className="text-white mx-2 font-bold" to="/news">
          News
          </Link>
          <Link className="text-white mx-2 font-bold" to="/profilepage">
          Profile
          </Link> 
        </div>
  )
}

export default NavItems