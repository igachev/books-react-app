import Search from "./Search";

export default function Navbar({
    setBooks,
    setError,
    setIsLoading
}) {

    return (
        <div className="navbar-container">
           <Search setBooks={setBooks} setError={setError} setIsLoading={setIsLoading} />
        </div>
    )
}