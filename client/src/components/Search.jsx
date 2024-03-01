
import { useEffect, useState } from 'react'
import * as bookService from '../services/bookService.js'

export default function Search({
    setBooks,
    setError,
    setIsLoading
}) {

    const [searchValue,setSearchValue] = useState("")

    async function searchBooks() {
        try {
            setError("")
            setIsLoading(true)
            const result = await bookService.searchBooks(searchValue)
            if(result.length === 0) {
               setError("No such books!")
               return
            }
            else {
                console.log(result)
            setBooks(result)
            }
        } catch (err) {
            console.log(err)
            setError(err.message)
        }
        finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        searchBooks()
    },[searchValue])

    return (
        <div className="search-container">
            <input type="text" placeholder="Search books..." value={searchValue} onInput={(e) => setSearchValue(e.target.value)} />
            <span>Books Found:</span>
        </div>
    )
}