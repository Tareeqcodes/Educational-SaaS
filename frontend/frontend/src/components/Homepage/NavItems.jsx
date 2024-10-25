import { Link } from 'react-router-dom'

const NavItems = () => {
  return (
    
        <div className='flex flex-row'>
          <Link className="px-3 font-bold" to="/">
           Home
          </Link>
          <Link className="px-3 font-bold" to="/pdfs">
          PDFs
          </Link>
          <Link className="px-3 font-bold" to="/rental">
          Rental
          </Link>
          <Link className="px-3 font-bold" to="/marketplace">
          Marketplace
          </Link>
        </div>
  )
}

export default NavItems