
import { fireEvent, render, screen } from "@testing-library/react"
import StarRating from "./StarRating";

describe("StarRating component", () => {

   let mockMaxRating = 5;
   let mockAddReadBook = jest.fn()
   let mockBook = {
        "_id": "821928192",
        "title": "Moby Dick",
        "author": "Herman Melville",
        "resume": "The novel is a detailed narrative of a vengeful sea captain's obsessive quest to hunt down a giant white sperm whale that bit off his leg. The captain's relentless pursuit, despite the warnings and concerns of his crew, leads them on a dangerous journey across the seas. The story is a complex exploration of good and evil, obsession, and the nature of reality, filled with rich descriptions of whaling and the sea.",
        "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/4/4c/Moby_Dick_for_Wikicommons.jpg",
        "year": 2001,
        "_ownerId": "35c62d76-8152-4626-8712-eeb96381bea8",
        "_createdOn": 1707754347329
   }

    test("number of created Star components should be equal to maxRating", async() => {
        render(<StarRating maxRating={mockMaxRating} addReadBook={mockAddReadBook} book={mockBook} />)

        const allStarComponents = await screen.findAllByTestId('star-component')
        expect(allStarComponents.length).toBe(mockMaxRating)
    })

    test("should have button with name 'Add as Read'", async() => {
        render(<StarRating maxRating={mockMaxRating} addReadBook={mockAddReadBook} book={mockBook} />)
        const addAsReadButton = screen.getByRole("button",{name:'Add as Read'})
        expect(addAsReadButton).toBeInTheDocument()
    })

    test("clicking 'Add as Read' button should call addReadBook()", async() => {
        render(<StarRating maxRating={mockMaxRating} addReadBook={mockAddReadBook} book={mockBook} />)
        const addAsReadButton = screen.getByRole("button",{name:'Add as Read'})
        fireEvent.click(addAsReadButton)
        expect(mockAddReadBook).toHaveBeenCalledTimes(1)
    })
})