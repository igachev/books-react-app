
export default function Book({
    book,
    updateSelectedBookId
}) {


    return (
        <div className="book" onClick={() => updateSelectedBookId(book._id)} data-testid="book-component">
            <img src={book.imageUrl} alt={book.title} />
            <h3>title: {book.title}</h3>
            <p>author: {book.author}</p>
            <p>year: {book.year}</p>
        </div>
    )
}