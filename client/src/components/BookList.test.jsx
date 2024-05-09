
import { fireEvent, render, screen } from "@testing-library/react"
import BookList from "./BookList"


describe("BookList component", () => {

    const bookListMock = [
        {
            "_id": "37283728",
            "title": "Alice's Adventures in Wonderland",
            "author": "Lewis Carroll",
            "resume": "This novel follows the story of a young girl named Alice who falls down a rabbit hole into a fantastical world full of peculiar creatures and bizarre experiences. As she navigates through this strange land, she encounters a series of nonsensical events, including a tea party with a Mad Hatter, a pool of tears, and a trial over stolen tarts. The book is renowned for its playful use of language, logic, and its exploration of the boundaries of reality.",
            "imageUrl": "https://upload.wikimedia.org/wikipedia/en/c/c1/Alice_in_Wonderland_%281951_film%29_poster.jpg",
            "year": 2010,
            "_ownerId": "35c62d76-8152-4626-8712-eeb96381bea8",
            "_createdOn": 1707711147329
        },
        {
            "_id": "83298329",
            "title": "The Lord of the Rings",
            "author": "J. R. R. Tolkien",
            "resume": "This epic high-fantasy novel centers around a modest hobbit who is entrusted with the task of destroying a powerful ring that could enable the dark lord to conquer the world. Accompanied by a diverse group of companions, the hobbit embarks on a perilous journey across Middle-earth, battling evil forces and facing numerous challenges. The narrative, rich in mythology and complex themes of good versus evil, friendship, and heroism, has had a profound influence on the fantasy genre.",
            "imageUrl": "https://upload.wikimedia.org/wikipedia/en/e/e9/First_Single_Volume_Edition_of_The_Lord_of_the_Rings.gif",
            "year": 1991,
            "_ownerId": "35c62d76-8152-4626-8712-eeb96381bea8",
            "_createdOn": 1707711147456
        },
        {
            "_id": "821928192",
            "title": "Moby Dick",
            "author": "Herman Melville",
            "resume": "The novel is a detailed narrative of a vengeful sea captain's obsessive quest to hunt down a giant white sperm whale that bit off his leg. The captain's relentless pursuit, despite the warnings and concerns of his crew, leads them on a dangerous journey across the seas. The story is a complex exploration of good and evil, obsession, and the nature of reality, filled with rich descriptions of whaling and the sea.",
            "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/4/4c/Moby_Dick_for_Wikicommons.jpg",
            "year": 2001,
            "_ownerId": "35c62d76-8152-4626-8712-eeb96381bea8",
            "_createdOn": 1707754347329
        },
       
    ]

test("should display the list of books", async() => {

    render(<BookList books={bookListMock} updateSelectedBookId={jest.fn()} setPageNumber={jest.fn()} />)
    const allBooks = screen.getAllByTestId("book-component")
    expect(allBooks.length).toBe(bookListMock.length)
    screen.debug()
})

test("should have only 2 buttons if we have property setPageNumber", async() => {

    render(<BookList books={bookListMock} updateSelectedBookId={jest.fn()} setPageNumber={jest.fn()} />)
    const allButtons = screen.getAllByRole('button')
    expect(allButtons.length).toBe(2)

})

test("button names should be: 'Previous Page' and 'Next Page'", async() => {
    render(<BookList books={bookListMock} updateSelectedBookId={jest.fn()} setPageNumber={jest.fn()} />)

    const previousPageButton = screen.getByRole("button",{name: "Previous Page"})
    const nextPageButton = screen.getByRole("button",{name: "Next Page"})

    expect(previousPageButton).toBeInTheDocument()
    expect(nextPageButton).toBeInTheDocument()
})

test("clicking Previous Page btn should call function setPageNumber()", async() => {
    const setPageNumberMock = jest.fn()

    render(<BookList books={bookListMock} updateSelectedBookId={jest.fn()} setPageNumber={setPageNumberMock} />)
    
    const previousPageButton = screen.getByRole("button",{name: "Previous Page"})
    fireEvent.click(previousPageButton)
    expect(setPageNumberMock).toHaveBeenCalledTimes(1)
    
})

test("clicking Next Page btn should call function setPageNumber()", async() => {
    const setPageNumberMock = jest.fn()

    render(<BookList books={bookListMock} updateSelectedBookId={jest.fn()} setPageNumber={setPageNumberMock} />)
    
    const nextPageButton = screen.getByRole("button",{name: "Next Page"})
    fireEvent.click(nextPageButton)
    expect(setPageNumberMock).toHaveBeenCalledTimes(1)
    
})

test("should not display buttons if property setPageNumber is missing", async() => {
    render(<BookList books={bookListMock} updateSelectedBookId={jest.fn()} />)
    const allButtons = screen.queryAllByRole('button')
    expect(allButtons.length).toBe(0)
})

})