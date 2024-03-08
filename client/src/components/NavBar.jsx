import Search from "./Search";

export default function Navbar({
    setBooks,
    setError,
    setIsLoading,
    setPageNumber
}) {

    return (
        <div className="navbar-container">
           <Search setBooks={setBooks} setPageNumber={setPageNumber} setError={setError} setIsLoading={setIsLoading} />
        </div>
    )
}