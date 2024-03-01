import { useEffect, useState } from "react"
import * as bookService from '../services/bookService'

export default function BookDetails({
    selectedBookId
}) {

    const [book,setBook] = useState({})

    async function getBook() {
        try {
            const result = await bookService.getBook(selectedBookId)
            setBook(result)
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        getBook()
    },[selectedBookId])

    return (
        <div className="book-details-container">
            <img src={book.imageUrl} alt={book.title} />
            <h3>Title: {book.title}</h3>
            <h5>Author: {book.author}</h5>
            <h6>Year: {book.year}</h6>
            <p>{book.resume}</p>
        </div>
    )
}