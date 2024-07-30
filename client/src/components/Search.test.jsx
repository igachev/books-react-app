import { render, screen } from "@testing-library/react"
import Search from "./Search"
import * as bookService from "../services/bookService"
import userEvent from '@testing-library/user-event'

describe("Search component", () => {
    let mockSetBooks = jest.fn()
    let mockSetError = jest.fn()
    let mockSetIsLoading = jest.fn()
    let mockSetPageNumber = jest.fn()

    const mockSearchedBooks = [
        {
        "_id": "83298329",
        "title": "The Lord of the Rings",
        "author": "J. R. R. Tolkien",
        "resume": "This epic high-fantasy novel centers around a modest hobbit who is entrusted with the task of destroying a powerful ring that could enable the dark lord to conquer the world. Accompanied by a diverse group of companions, the hobbit embarks on a perilous journey across Middle-earth, battling evil forces and facing numerous challenges. The narrative, rich in mythology and complex themes of good versus evil, friendship, and heroism, has had a profound influence on the fantasy genre.",
        "imageUrl": "https://upload.wikimedia.org/wikipedia/en/e/e9/First_Single_Volume_Edition_of_The_Lord_of_the_Rings.gif",
        "year": 1991,
        "_ownerId": "35c62d76-8152-4626-8712-eeb96381bea8",
        "_createdOn": 1707711147456
        }
]

    afterEach(() => {    
        jest.clearAllMocks();
      });


test("should have only 1 input field",async() => {

    render(
    <Search
    setBooks={mockSetBooks}
    setError={mockSetError}
    setIsLoading={mockSetIsLoading}
    setPageNumber={mockSetPageNumber}
    />
    )

    const inputFields = screen.getAllByRole('textbox')
    expect(inputFields.length).toBe(1)
})

test("typing in the search input field should call: bookService.searchBooks(),setIsLoading(),setError()",async() => {

    let searchBooksSpy = jest.spyOn(bookService,'searchBooks')
    const user = userEvent.setup()
        render(
            <Search
            setBooks={mockSetBooks}
            setError={mockSetError}
            setIsLoading={mockSetIsLoading}
            setPageNumber={mockSetPageNumber}
            />
        )
    
    let searchInput = await screen.findByTestId('search-input')
    await user.type(searchInput,'lord')
    expect(searchInput.value).toBe("lord")
    expect(searchBooksSpy).toHaveBeenCalled()
    expect(mockSetIsLoading).toHaveBeenCalled()
    expect(mockSetError).toHaveBeenCalled()
})

test("if books.searchBooks() returns an array of founded books the value of 'Books Found:' should be equal to the length of founded books", async() => {

    let searchBooksSpy = jest.spyOn(bookService,'searchBooks').mockResolvedValue(mockSearchedBooks)
    const user = userEvent.setup()

        render(
            <Search
            setBooks={mockSetBooks}
            setError={mockSetError}
            setIsLoading={mockSetIsLoading}
            setPageNumber={mockSetPageNumber}
            />
        )

        let searchInput = await screen.findByTestId('search-input')
        expect(searchBooksSpy).toHaveBeenCalled()
        await user.type(searchInput,'lord')
        const booksFoundText = screen.getByText(`Books Found: ${mockSearchedBooks.length}`)
        expect(booksFoundText).toBeInTheDocument()
})

})