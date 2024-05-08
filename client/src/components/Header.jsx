import React from "react";


export default function Header({children}) {
    
    if (React.Children.count(children) < 2) {
        throw new Error("Header component requires at least 2 children.");
    }

    return (
        <div className="header-container" data-testid="header-component">
            {children}
        </div>
    )
}