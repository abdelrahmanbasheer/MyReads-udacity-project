import React from 'react'
import { Link } from 'react-router-dom'
import SearchShelf from './SearchShelf'


const Search = ({query ,setQuery,mergedBooks,changeShelf,searchBooks,available}) => {

  
  return (
    <div className="search-books">
    <div className="search-books-bar">
      <Link to="/" className="close-search" >Close</Link>
      <div className="search-books-input-wrapper">
        <input
          type="text"
          placeholder="Search by title, author, or ISBN" value={query}
          onChange={((event)=>{setQuery(event.target.value)})}
        />
      </div>
    </div>
{
 
 
 <SearchShelf mergedBooks={mergedBooks} changeShelf={changeShelf} searchBooks={searchBooks} available={available} > </SearchShelf>
}
  </div>
  )
}

export default Search