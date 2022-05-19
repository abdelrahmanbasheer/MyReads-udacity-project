import React from 'react'
import Book from './Book'
const BookShelf = ({container,books,ctg,changeShelf}) => {
 const bookCtg=books.filter((book)=>book.shelf===ctg)
  return (
    <div className="bookshelf">
    <h2 className="bookshelf-title">{container}</h2>
    <div className="bookshelf-books">
    <ol className="books-grid">
        {bookCtg.map((book)=>
 <Book key={book.id} book={book} changeShelf={changeShelf}></Book>

        )}
         </ol>
    </div>
    </div>
  )
}

export default BookShelf