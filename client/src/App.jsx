import { useState } from 'react'

import './App.css'
import Header from './components/Header'
import Logo from './components/Logo'
import Navbar from './components/NavBar'

function App() {
  
  const [books,setBooks] = useState([])

  return (
    <div className='container'>
      <Header>
        <Logo />
        <Navbar />
      </Header>
    </div>
  )
}

export default App
