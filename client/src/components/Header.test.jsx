import { fireEvent, render, screen } from "@testing-library/react"
import Header from "./Header"
import Logo from "./Logo"
import Navbar from "./NavBar"

describe("Header Component",() => {

    test("header component should be in the document", async() => {

        render(
            <Header>
                <Logo />
                <Navbar setBooks={null} setPageNumber={jest.fn()} setError={jest.fn()} setIsLoading={jest.fn()}/>
            </Header>
        )

        const header = screen.getByTestId('header-component')
        expect(header).toBeInTheDocument()
    })

    test("header component children prop should have at least 2 children", () => {

        // Render Header with children
        render(
            <Header>
                <Logo />
                <Navbar setBooks={null} setPageNumber={jest.fn()} setError={jest.fn()} setIsLoading={jest.fn()}/>
            </Header>
        );

        // Check if Header component is in the document
        const header = screen.getByTestId('header-component');
        const logo = screen.getByTestId('logo-component')
        const navbar = screen.getByTestId('navbar-component')

        expect(header).toBeInTheDocument();
        expect(logo).toBeInTheDocument();
        expect(navbar).toBeInTheDocument();

        // Check if Header component has exactly 2 children
        expect(header.children.length).toBeGreaterThanOrEqual(2);
    });

    test("header component children prop should throw error if there are less than 2 children", () => {

        // Render Header with children
        expect(() =>  render(
            <Header>
                
                <Navbar setBooks={null} setPageNumber={jest.fn()} setError={jest.fn()} setIsLoading={jest.fn()}/>
            </Header>
        )).toThrow(new Error("Header component requires at least 2 children."))

    });
})