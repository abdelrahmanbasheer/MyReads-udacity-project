import React from 'react'
import Book from './Book'


const SearchShelf = ({changeShelf, mergedBooks,available}) => {
  return (
    <div className='bookshelf'>
    <h2 className="bookshelf-title">Search results :</h2>
    <div className="bookshelf-books">
    <ol className="books-grid">
      
    {
    
    available ?
    mergedBooks.map((book)=>
      <Book key={book.id} book={book} changeShelf={changeShelf}></Book>
      )
        

      :
      <div>
        no books found
      </div>
      
      
        
        
        
        }
  
 </ol>
</div>
</div>

  )
}

export default SearchShelf
