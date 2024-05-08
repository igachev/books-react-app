import { fireEvent, render, screen } from "@testing-library/react"
import Header from "./Header"

describe("Header Component",() => {

    test("header component should be in the document", async() => {

        render(
            <Header />
        )

        const header = screen.getByTestId('header-component')
        expect(header).toBeInTheDocument()
    })
})