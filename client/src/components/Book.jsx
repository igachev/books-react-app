
export default function Book({
    book
}) {

    return (
        <div className="book">
            <img src={book.imageUrl} alt={book.title} />
            <h3>title: {book.title}</h3>
            <p>author: {book.author}</p>
            <p>year: {book.year}</p>
        </div>
    )
}