
import Book from "./Book"

export default function BookList({
    books,
    updateSelectedBookId,
    setPageNumber
}) {

    function nextPage() {
        setPageNumber((currentPage) => books.length === 4 ? currentPage + 1 : currentPage)
    }

    function previousPage() {
        setPageNumber((currentPage) => currentPage > 0 ? currentPage - 1 : currentPage)
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
                {setPageNumber ? 
                <>
                <button className="details-btn" onClick={previousPage} style={ {marginRight:"5px"} }>Previous Page</button>
                <button className="details-btn" onClick={nextPage}>Next Page</button>
                </>
                : null}
            </div>

        </div>
    )
}