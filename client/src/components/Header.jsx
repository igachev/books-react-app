
export default function Header({children}) {

    return (
        <div className="header-container" data-testid="header-component">
            {children}
        </div>
    )
}