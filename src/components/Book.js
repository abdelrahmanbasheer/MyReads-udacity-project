import React from 'react'


const Book = ({book,changeShelf}) => {
  const updateShelf=(event)=>{
changeShelf(book,event.target.value)
  }
  return (
      <li>
   <div className="book">

            <div className="book-top">
              <div
                className="book-cover"
                style={{
                  width: 128,
                  height: 188,
                  backgroundImage:
                  (book.imageLinks) ? 
                  `url(${book.imageLinks.thumbnail})`
                  : `url(${'./icons/image-not-found.svg'})`
                }}
              ></div>
              <div className="book-shelf-changer">
                <select defaultValue={book.shelf ? book.shelf :book.shelf="none"} onChange={updateShelf} >
                  <option value="move" disabled>
                    Move to...
                  </option>
                  <option value="currentlyReading">
                    Currently Reading
                  </option>
                  <option value="wantToRead">Want to Read</option>
                  <option value="read">Read</option>
                  <option value="none">None</option>
                </select>
              </div>
            </div>
            <div className="book-title">{book.title}</div>
            <div className="book-authors">{book.authors}</div>
          </div>
        </li>
  )
}

export default Book