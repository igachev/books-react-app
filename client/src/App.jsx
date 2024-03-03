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
  }

  function addReadBook(book,rating) {
    setReadBooks((b) => [...b,{...book,rating}])
  }

  useEffect(() => {
    getBooks()
  },[])

  useEffect(() => {
    localStorage.setItem("readBooks",JSON.stringify(readBooks))
  },[readBooks])

  return (
    <div className='container'>

      <Header>
        <Logo />
        <Navbar setBooks={setBooks} setError={setError} setIsLoading={setIsLoading} />
      </Header>

      <Main>

    <List>
   {!error && !isLoading && <BookList books={books} updateSelectedBookId={updateSelectedBookId} /> }
   {!error && isLoading && <Loader />}
   {error && !isLoading && <p>Error: {error}</p>}
    </List>

    <List>
      {selectedBookId && <BookDetails selectedBookId={selectedBookId} addReadBook={addReadBook} /> }
      
    </List>

      </Main>
    </div>
  )
}

export default App
