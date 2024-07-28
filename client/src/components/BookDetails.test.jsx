import { fireEvent, render, screen } from "@testing-library/react"
import BookDetails from "./BookDetails"
import * as bookService from "../services/bookService"



describe("BookDetails component",() => {

    let mockBookDetails = {
        "_id": "821928192",
        "title": "Moby Dick",
        "author": "Herman Melville",
        "resume": "The novel is a detailed narrative of a vengeful sea captain's obsessive quest to hunt down a giant white sperm whale that bit off his leg. The captain's relentless pursuit, despite the warnings and concerns of his crew, leads them on a dangerous journey across the seas. The story is a complex exploration of good and evil, obsession, and the nature of reality, filled with rich descriptions of whaling and the sea.",
        "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/4/4c/Moby_Dick_for_Wikicommons.jpg",
        "year": 2001,
        "_ownerId": "35c62d76-8152-4626-8712-eeb96381bea8",
        "_createdOn": 1707754347329
    }

    afterEach(() => {    
        jest.clearAllMocks();
      });

    test("should display loading component when book details request is not completed",async() => {
        let mockSelectedBookId = jest.fn()
        let mockAddReadBook = jest.fn()
        let mockReadBookError = ""
        let mockBack = jest.fn()

        render(<BookDetails 
            selectedBookId={mockSelectedBookId} 
            addReadBook={mockAddReadBook} 
            readBookError={mockReadBookError} 
            back={mockBack} />)

            const loader = await screen.findByTestId('loader-component')
            const title = screen.queryByText(new RegExp(mockBookDetails.title))
            const author = screen.queryByText(new RegExp(mockBookDetails.author))
            const year = screen.queryByText(new RegExp(mockBookDetails.year))
            const resume = screen.queryByText(new RegExp(mockBookDetails.resume))
            
            expect(loader).toBeInTheDocument()

            expect(title).not.toBeInTheDocument()
            expect(author).not.toBeInTheDocument()
            expect(year).not.toBeInTheDocument()
            expect(resume).not.toBeInTheDocument()
            
    })

    test("should display error message if there is no such book",async() => {
        let mockSelectedBookId = jest.fn()
        let mockAddReadBook = jest.fn()
        let mockReadBookError = ""
        let mockBack = jest.fn()

        let getBookSpy = jest.spyOn(bookService,"getBook").mockRejectedValue(new Error('Resource not found'))

        render(<BookDetails 
            selectedBookId={mockSelectedBookId} 
            addReadBook={mockAddReadBook} 
            readBookError={mockReadBookError} 
            back={mockBack} />)

        const loader = await screen.findByTestId('loader-component')
        expect(loader).not.toBeInTheDocument()

        const errorMessage = await screen.findByText("Error:Resource not found")
        expect(errorMessage).toBeInTheDocument()
    })

    test("should display correct book details after completed Loading stage", async() => {
        let mockSelectedBookId = jest.fn()
        let mockAddReadBook = jest.fn()
        let mockReadBookError = ""
        let mockBack = jest.fn()

        let getBookSpy = jest.spyOn(bookService,"getBook").mockResolvedValue(mockBookDetails)

        render(<BookDetails 
            selectedBookId={mockSelectedBookId} 
            addReadBook={mockAddReadBook} 
            readBookError={mockReadBookError} 
            back={mockBack} />)

        const loader = await screen.findByTestId('loader-component')
        expect(loader).not.toBeInTheDocument()
        
        const imageElement = await screen.findByRole("img")
        const title = await screen.findByText(new RegExp(mockBookDetails.title))
        const author = await screen.findByText(new RegExp(mockBookDetails.author))
        const year = await screen.findByText(new RegExp(mockBookDetails.year))
        const resume = await screen.findByText(new RegExp(mockBookDetails.resume))

        expect(imageElement.getAttribute('src')).toEqual(mockBookDetails.imageUrl)
        expect(title).toBeInTheDocument()
        expect(author).toBeInTheDocument()
        expect(year).toBeInTheDocument()
        expect(resume).toBeInTheDocument()
        
    })

    test("should call bookService.getBook() only once", async() => {

        let mockSelectedBookId = jest.fn()
        let mockAddReadBook = jest.fn()
        let mockReadBookError = ""
        let mockBack = jest.fn()

        let getBookSpy = jest.spyOn(bookService,"getBook").mockResolvedValue(mockBookDetails)

        render(<BookDetails 
            selectedBookId={mockSelectedBookId} 
            addReadBook={mockAddReadBook} 
            readBookError={mockReadBookError} 
            back={mockBack} />)

        const loader = await screen.findByTestId('loader-component')
        expect(loader).not.toBeInTheDocument()
        expect(getBookSpy).toHaveBeenCalledTimes(1)
    })

    test("should contain and use StarRating component", async() => {

        let mockSelectedBookId = jest.fn()
        let mockAddReadBook = jest.fn()
        let mockReadBookError = ""
        let mockBack = jest.fn()

        let getBookSpy = jest.spyOn(bookService,"getBook").mockResolvedValue(mockBookDetails)

        render(<BookDetails 
            selectedBookId={mockSelectedBookId} 
            addReadBook={mockAddReadBook} 
            readBookError={mockReadBookError} 
            back={mockBack} />)

        const loader = await screen.findByTestId('loader-component')
        expect(loader).not.toBeInTheDocument()

        const starRatingComponent = await screen.findByTestId('star-rating-component')
        expect(starRatingComponent).toBeInTheDocument()
    })

    test("should have button with name 'Back'", async() => {

        let mockSelectedBookId = jest.fn()
        let mockAddReadBook = jest.fn()
        let mockReadBookError = ""
        let mockBack = jest.fn()

        let getBookSpy = jest.spyOn(bookService,"getBook").mockResolvedValue(mockBookDetails)

        render(<BookDetails 
            selectedBookId={mockSelectedBookId} 
            addReadBook={mockAddReadBook} 
            readBookError={mockReadBookError} 
            back={mockBack} />)

        const loader = await screen.findByTestId('loader-component')
        expect(loader).not.toBeInTheDocument()

        const backButton = screen.getByRole('button',{name: 'Back'})
        expect(backButton).toBeInTheDocument()
    })

    test("should call function back() when user clicks on Back button", async() => {

        let mockSelectedBookId = jest.fn()
        let mockAddReadBook = jest.fn()
        let mockReadBookError = ""
        let mockBack = jest.fn()

        let getBookSpy = jest.spyOn(bookService,"getBook").mockResolvedValue(mockBookDetails)

        render(<BookDetails 
            selectedBookId={mockSelectedBookId} 
            addReadBook={mockAddReadBook} 
            readBookError={mockReadBookError} 
            back={mockBack} />)

        const loader = await screen.findByTestId('loader-component')
        expect(loader).not.toBeInTheDocument()
        const backButton = screen.getByRole('button',{name: 'Back'})
        expect(backButton).toBeInTheDocument()
        fireEvent.click(backButton)
        expect(mockBack).toHaveBeenCalledTimes(1)
    })

    test("document title should display current book title", async() => {

        let mockSelectedBookId = jest.fn()
        let mockAddReadBook = jest.fn()
        let mockReadBookError = ""
        let mockBack = jest.fn()

        let getBookSpy = jest.spyOn(bookService,"getBook").mockResolvedValue(mockBookDetails)

        render(<BookDetails 
            selectedBookId={mockSelectedBookId} 
            addReadBook={mockAddReadBook} 
            readBookError={mockReadBookError} 
            back={mockBack} />)

        const loader = await screen.findByTestId('loader-component')
        expect(loader).not.toBeInTheDocument()
        expect(document.title).toBe(mockBookDetails.title)
    })

})