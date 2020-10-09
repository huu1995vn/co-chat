import React from "react";
import Menu from "./menu";

export default ({ children }) => {

    return (
        <header>
            {children}
            <Menu />
        </header>
    )
}
