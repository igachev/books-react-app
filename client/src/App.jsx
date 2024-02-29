import { useEffect, useState } from 'react'

import './App.css'
import Header from './components/Header'
import Logo from './components/Logo'
import Navbar from './components/NavBar'
import List from './components/List'
import Main from './components/Main'
import * as bookService from './services/bookService.js'

function App() {
  
  const [books,setBooks] = useState([])
  const [error,setError] = useState("")

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

    </List>

      </Main>
    </div>
  )
}

export default App
