import { useState } from 'react'

import './App.css'
import Header from './components/Header'
import Logo from './components/Logo'
import Navbar from './components/NavBar'
import List from './components/List'
import Main from './components/Main'

function App() {
  
  const [books,setBooks] = useState([])

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
