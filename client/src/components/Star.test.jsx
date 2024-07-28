import { fireEvent, render, screen } from "@testing-library/react";
import Star from "./Star";

describe("Star component", () => {

    let mockFull = false;
    let mockOnRate = jest.fn()
    let mockOnHoverIn = jest.fn()
    let mockOnHoverOut = jest.fn()

    test("should contain and render Star FontAwesomeIcon", async() => {
        render(<Star 
            full={mockFull=false} 
            onRate={mockOnRate} 
            onHoverIn={mockOnHoverIn} 
            onHoverOut={mockOnHoverOut}
            />)

        const grayStar = await screen.findByTestId('gray-star')
        expect(grayStar).toHaveAttribute('role','img')
        expect(grayStar).toHaveAttribute('data-icon','star')
    })

    test("should display Star with gray color if property full=false",async() => {
        render(<Star 
            full={mockFull=false} 
            onRate={mockOnRate} 
            onHoverIn={mockOnHoverIn} 
            onHoverOut={mockOnHoverOut}
            />)

        const grayStar = screen.queryByTestId('gray-star')
        const yellowStar = screen.queryByTestId('yellow-star')
        expect(grayStar).toBeInTheDocument()
        expect(grayStar).toHaveStyle('color:#d9dbde')
        expect(yellowStar).not.toBeInTheDocument()
    })

    test("should display Star with yellow color if property full=true",async() => {
        render(<Star 
            full={mockFull=true} 
            onRate={mockOnRate} 
            onHoverIn={mockOnHoverIn} 
            onHoverOut={mockOnHoverOut}
            />)

        const grayStar = screen.queryByTestId('gray-star')
        const yellowStar = screen.queryByTestId('yellow-star')
        expect(grayStar).not.toBeInTheDocument()
        expect(yellowStar).toBeInTheDocument()
        expect(yellowStar).toHaveStyle('color:#FFD43B')
    })

    test("when user clicks on a Star component onRate() should be called",async() => {
        render(<Star 
            full={mockFull=false} 
            onRate={mockOnRate} 
            onHoverIn={mockOnHoverIn} 
            onHoverOut={mockOnHoverOut}
            />)

        const starComponent = await screen.findByTestId('star-component')
        expect(starComponent).toBeInTheDocument()
        fireEvent.click(starComponent)
        expect(mockOnRate).toHaveBeenCalledTimes(1)
    })

    test("when user's mouse cursor hovers over Star component onHoverIn() should be called",async() => {
        render(<Star 
            full={mockFull=false} 
            onRate={mockOnRate} 
            onHoverIn={mockOnHoverIn} 
            onHoverOut={mockOnHoverOut}
            />)

        const starComponent = await screen.findByTestId('star-component')
        expect(starComponent).toBeInTheDocument()
        fireEvent.mouseEnter(starComponent)
        expect(mockOnHoverIn).toHaveBeenCalledTimes(1)
    })

    test("when user's mouse cursor hovers out of Star Component onHoverOut() should be called",async() => {
        render(<Star 
            full={mockFull=false} 
            onRate={mockOnRate} 
            onHoverIn={mockOnHoverIn} 
            onHoverOut={mockOnHoverOut}
            />)

        const starComponent = await screen.findByTestId('star-component')
        expect(starComponent).toBeInTheDocument()
        fireEvent.mouseLeave(starComponent)
        expect(mockOnHoverOut).toHaveBeenCalledTimes(1)
    })
})