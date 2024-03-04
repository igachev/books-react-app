import { useEffect, useState } from "react"
import * as bookService from '../services/bookService'
import Loader from '../components/Loader.jsx'
import StarRating from "./StarRating.jsx"


export default function BookDetails({
    selectedBookId,
    addReadBook,
    readBookError
}) {

    const [book,setBook] = useState({})
    const [isLoading,setIsLoading] = useState(false)
    const [error,setError] = useState("")

    async function getBook() {
        try {
            setIsLoading(true)
            setError("")
            const result = await bookService.getBook(selectedBookId)
            setBook(result)
        } catch (err) {
            console.log(err)
            setError(err.message)
        }
        finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        getBook()
    },[selectedBookId])

    let bookDetails = <>
    {isLoading && !error && <Loader />}

    {!isLoading && error && <p>Error:{error}</p>}
    
    {!isLoading && !error && (
            <div className="book-details-container">
            <img src={book.imageUrl} alt={book.title} />
            <h3>Title: {book.title}</h3>
            <h5>Author: {book.author}</h5>
            <h6>Year: {book.year}</h6>
            <p>{book.resume}</p>
            <StarRating maxRating={5} book={book} addReadBook={addReadBook} />
            {readBookError ? <p>{readBookError}</p> : null}
            
        </div>
        )}
        
    </>

    return (
       bookDetails
    )
}