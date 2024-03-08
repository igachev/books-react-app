import { useEffect } from "react"
import Book from "./Book"
import * as bookService from '../services/bookService'

export default function BookList({
    books,
    updateSelectedBookId,
    pageNumber,
    setPageNumber,
    setBooks
}) {

    useEffect(() => {
        bookService.getBooks(pageNumber)
        .then((result) => setBooks(result))
        .catch((err) => console.log(err))
    },[pageNumber])

    function nextPage() {
        setPageNumber((currentPage) => books.length === 4 ? currentPage + 1 : currentPage)
    }

    return (
        <div className="book-list-container">
            {books.map((book) => (
                <Book 
                key={book._id} 
                book={book}  
                updateSelectedBookId={updateSelectedBookId} 
                />
            ))}

            <div>
                {pageNumber >= 0 ? <button className="details-btn" onClick={nextPage}>Next Page</button> : null}
            </div>

        </div>
    )
}