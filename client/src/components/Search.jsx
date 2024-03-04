
import { useEffect, useRef, useState } from 'react'
import * as bookService from '../services/bookService.js'
import { useKeyDownEvent } from '../services/useKeyDownEvent.js'

export default function Search({
    setBooks,
    setError,
    setIsLoading
}) {

    const [searchValue,setSearchValue] = useState("")
    const [booksFound, setBooksFound] = useState(0)
    const inputSearchRef = useRef(null)
    const controller = new AbortController()

    async function searchBooks() {
        try {
            setError("")
            setIsLoading(true)
           const result = await bookService.searchBooks(searchValue,controller)

           setBooksFound((books) => books !== result.length ? result.length : books)

            if(result.length === 0) {
               setError("No such books!")
               return
            }

            else {
            setBooks(result)
            }

        } catch (err) {
            console.log(err)
           if(err.name !== "AbortError") {
            setError(err.message)
           }
        }
        
        finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        searchBooks();
        return () => {
            controller.abort()
        }
    },[searchValue])

   useKeyDownEvent("Enter",function() {
    const activeElement = document.activeElement;
    inputSearchRef.current.focus()
    if(activeElement !== inputSearchRef.current) {
        setSearchValue("")
    }
   })

    return (
        <div className="search-container">
            <input 
            type="text" 
            placeholder="Search books..."
            ref={inputSearchRef} 
            value={searchValue} 
            onInput={(e) => setSearchValue(e.target.value)} />
            <span>Books Found: {booksFound}</span>
        </div>
    )
}