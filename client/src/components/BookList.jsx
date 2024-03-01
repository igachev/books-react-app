import Book from "./Book"

export default function BookList({
    books,
    updateSelectedBookId
}) {

    return (
        <div className="book-list-container">
            {books.map((book) => (
                <Book 
                key={book._id} 
                book={book}  
                updateSelectedBookId={updateSelectedBookId} 
                />
            ))}
        </div>
    )
}