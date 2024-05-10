
import { fireEvent, render, screen } from "@testing-library/react"
import Book from "./Book"

describe("Book Component", () => {

const mockBook = {
    "_id": "83298329",
    "title": "The Lord of the Rings",
    "author": "J. R. R. Tolkien",
    "resume": "This epic high-fantasy novel centers around a modest hobbit who is entrusted with the task of destroying a powerful ring that could enable the dark lord to conquer the world. Accompanied by a diverse group of companions, the hobbit embarks on a perilous journey across Middle-earth, battling evil forces and facing numerous challenges. The narrative, rich in mythology and complex themes of good versus evil, friendship, and heroism, has had a profound influence on the fantasy genre.",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/en/e/e9/First_Single_Volume_Edition_of_The_Lord_of_the_Rings.gif",
    "year": 1991,
    "_ownerId": "35c62d76-8152-4626-8712-eeb96381bea8",
    "_createdOn": 1707711147456
}
const mockUpdateSelectedBookId = jest.fn()

test("should display image,title,author,year of the book", async() => {

    render(<Book book={mockBook} updateSelectedBookId={mockUpdateSelectedBookId} />)

    const imageElement = await screen.findByRole("img")
    const titleValue = await screen.findByText(`title: ${mockBook.title}`)
    const authorValue = await screen.findByText(`author: ${mockBook.author}`)
    const yearValue = await screen.findByText(`year: ${mockBook.year}`)

    expect(imageElement.getAttribute('src')).toEqual(mockBook.imageUrl)
    expect(titleValue.textContent).toContain(mockBook.title)
    expect(authorValue.textContent).toContain(mockBook.author)
    expect(yearValue.textContent).toContain(mockBook.year.toString())
})

test("should call updateSelectedBookId() when user clicks on specific book", async() => {

    render(<Book book={mockBook} updateSelectedBookId={mockUpdateSelectedBookId} />)

    const clickedBook = await screen.findByTestId('book-component')
    fireEvent.click(clickedBook)
    expect(mockUpdateSelectedBookId).toHaveBeenCalledTimes(1)
    expect(mockUpdateSelectedBookId).toHaveBeenCalledWith(mockBook._id)
})

})
