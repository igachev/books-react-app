import { useEffect, useState } from "react"
import * as bookService from '../services/bookService'
import Loader from '../components/Loader.jsx'

export default function BookDetails({
    selectedBookId,
}) {

    const [book,setBook] = useState({})
    const [isLoading,setIsLoading] = useState(false)

    async function getBook() {
        try {
            setIsLoading(true)
            const result = await bookService.getBook(selectedBookId)
            setBook(result)
        } catch (err) {
            console.log(err)
        }
        finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        getBook()
    },[selectedBookId])

    return (
        isLoading 
        ? <Loader />
        : (
            <div className="book-details-container">
            <img src={book.imageUrl} alt={book.title} />
            <h3>Title: {book.title}</h3>
            <h5>Author: {book.author}</h5>
            <h6>Year: {book.year}</h6>
            <p>{book.resume}</p>
        </div>
        )
        
    )
}