import Book from "./Book"

export default function BookList({
    books
}) {

    return (
        <div className="book-list-container">
            {books.map((book) => {(
                <Book key={book._id} book={book} />
            )})}
        </div>
    )
}