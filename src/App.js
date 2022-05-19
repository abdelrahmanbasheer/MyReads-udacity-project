import "./App.css";
import { useState,useEffect } from "react";
import {Routes,Route,BrowserRouter as Router} from "react-router-dom"
import Home from "./components/Home"; 
import Search from "./components/Search";
import * as BooksAPI from "./BooksAPI";

function App() {
  const [books,setBooks]=useState([]);
  const [query,setQuery]=useState("");
  const [searchBooks,setSearchBooks]=useState([]);
  const[mergedBooks,setMergedBooks]=useState([]);
  const [mapOfIdToBooks,setMapOfIdToBooks]=useState(new Map());
  const [available,setAvailable]=useState(false);
  useEffect(() => {
    const getBooks = async () => {
      const res = await BooksAPI.getAll();
      setBooks(res); 
     setMapOfIdToBooks(createMapOfBooks(res))
    };
  

    getBooks();
  }, []);
  useEffect(()=>{
    let isActive=true;
if(query){
BooksAPI.search(query).then(data=>{
  if(data.error){
  setSearchBooks([])
  setAvailable(false)

}else{
  if(isActive){
    setSearchBooks(data);
    setAvailable(true);
  }

}
})

return()=>{
  isActive=false;
  setSearchBooks([]);
}

}
  },[query])


  const createMapOfBooks =(books)=>{
const map= new Map();
books.map(book=>map.set(book.id,book))
return map;
  }
useEffect(()=>{


const combined =searchBooks.map(book=>{
  if(mapOfIdToBooks.has(book.id)){
    return mapOfIdToBooks.get(book.id);
  }else{
    return book;
  }
})
setMergedBooks(combined);


},[searchBooks])
 const changeShelf= async(book,shelf)=>{
 await BooksAPI.update(book,shelf);
await BooksAPI.getAll().then((res)=>{
  setBooks(res);
});

 }






  return (
  <Router>
    <div className="app">
  <Routes>  
    <Route exact path="/" element={
<Home books={books} changeShelf={changeShelf}></Home>
    }></Route>
<Route path="/Search" element={
  <Search  query={query} setQuery={setQuery} mergedBooks={mergedBooks} changeShelf={changeShelf} searchBooks={searchBooks}available={available}></Search>
}>

</Route>
</Routes>
     </div>
     </Router>
  );
}

export default App;
