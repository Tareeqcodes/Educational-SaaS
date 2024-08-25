import React from 'react'

const SearchBar = () => {
  return (
    <>
    <div className=" justify-center text-center">
    <input type="text"
    placeholder="Search for courses, faculties, or resources"
     className="search-bar w-full p-2 border mx-auto"
     id="search-bar"
     required
     />
    </div>
    </>
  )
}

export default SearchBar