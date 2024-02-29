
export default function Main({children}) {

    return (
        <div className="main-container">
            <p>Available Books</p>
            <p>Read Books</p>
            {children}
        </div>
    )
}