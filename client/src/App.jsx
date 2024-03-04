import { useEffect, useState } from 'react'

import './App.css'
import Header from './components/Header'
import Logo from './components/Logo'
import Navbar from './components/NavBar'
import List from './components/List'
import Main from './components/Main'
import * as bookService from './services/bookService.js'
import BookList from './components/BookList'
import BookDetails from './components/BookDetails.jsx'
import Loader from './components/Loader.jsx'

function App() {
  
  const [books,setBooks] = useState([])

  const [readBooks,setReadBooks] = useState(() => {
    const booksRead = localStorage.getItem("readBooks");
    if(booksRead && booksRead !== 'undefined') {
      return JSON.parse(booksRead)
    }
    return []
  });

  const [error,setError] = useState("")
  const [readBookError,setReadBookError] = useState("")
  const [selectedBookId,setSelectedBookId] = useState('')
  const [isLoading,setIsLoading] = useState(false)

  async function getBooks() {
    try {
      setIsLoading(true)
      const result = await bookService.getBooks()
     // console.log(result)
      setBooks(result)
    } catch (err) {
     // console.log(err)
      setError(err.message)
    }
    finally {
      setIsLoading(false)
    }
  }

 function updateSelectedBookId(id) {
  setSelectedBookId((oldId) => oldId !== id ? id : '')
  setReadBookError("")
  }

  function addReadBook(book,rating) {
    const isAlreadyAdded = readBooks.find((b) => b._id === book._id)
    console.log(isAlreadyAdded)
    if(!isAlreadyAdded) {
      setReadBooks((b) => [...b,{...book,rating}])
      back()
      setReadBookError("")
    }
    else {
      setReadBookError("You already read that book")
    }
  }

  function back(e) {
    if(e.code === 'Escape') {
      setSelectedBookId("")
    }
    else {
      setSelectedBookId("")
    }
  }

  useEffect(() => {
    getBooks()
  },[])

  useEffect(() => {
    localStorage.setItem("readBooks",JSON.stringify(readBooks))
  },[readBooks])

  useEffect(() => {
    document.addEventListener('keydown',back)
    return (() => {
      document.removeEventListener('keydown',back)
    })
  },[])

  return (
    <div className='container'>

      <Header>
        <Logo />
        <Navbar setBooks={setBooks} setError={setError} setIsLoading={setIsLoading} />
      </Header>

      <Main>

    <List>
      <h2>Available Books</h2>
   {!error && !isLoading && <BookList books={books} updateSelectedBookId={updateSelectedBookId} /> }
   {!error && isLoading && <Loader />}
   {error && !isLoading && <p>Error: {error}</p>}
    </List>

    <List>
      {selectedBookId ? <h2>Book Details</h2> : <h2>Read Books</h2>}
      {
      selectedBookId 
      ? <BookDetails selectedBookId={selectedBookId} addReadBook={addReadBook} readBookError={readBookError} back={back} /> 
      : <BookList books={readBooks} />
      }
      
    </List>

      </Main>
    </div>
  )
}

export default App
