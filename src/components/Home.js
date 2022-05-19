import React from 'react'
import { Link } from 'react-router-dom'
import BookShelf from './BookShelf'
const Home = ({books,changeShelf}) => {
  return (
    <div className="list-books">
    <div className="list-books-title">
      <h1>MyReads</h1>
    </div>
    <div className="list-books-content">
      <div>
       
        <BookShelf  container="Currently Reading" books={books} ctg="currentlyReading" changeShelf={changeShelf}></BookShelf>
        <BookShelf container="Want To Read" books={books} ctg="wantToRead" changeShelf={changeShelf}></BookShelf>
        <BookShelf container="Read" books={books} ctg="read" changeShelf={changeShelf}></BookShelf>
      
      </div>
    </div>
    <div className="open-search">
      <Link to="/Search" className="open-search" >Add a book</Link>
    </div>
  </div>


  )
}

export default Home