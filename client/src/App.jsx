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

function App() {
  
  const [books,setBooks] = useState([])
  const [error,setError] = useState("")
  const [selectedBookId,setSelectedBookId] = useState('')

  async function getBooks() {
    try {
      const result = await bookService.getBooks()
     // console.log(result)
      setBooks(result)
    } catch (err) {
     // console.log(err)
      setError(err.message)
    }
  }

 function updateSelectedBookId(id) {
  setSelectedBookId((oldId) => oldId !== id ? id : '')
  }

  useEffect(() => {
    getBooks()
  },[])

  return (
    <div className='container'>

      <Header>
        <Logo />
        <Navbar />
      </Header>

      <Main>

    <List>
    <BookList books={books} updateSelectedBookId={updateSelectedBookId}  />
    </List>

    <List>
      {selectedBookId 
       ? <BookDetails selectedBookId={selectedBookId} />
       : null}
    </List>

      </Main>
    </div>
  )
}

export default App
