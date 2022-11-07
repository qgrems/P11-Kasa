import React from "react";
import { AppFooter } from "../components/footer";
import { AppHeader } from "../components/header";
import { ErrorNotFound } from "../components/pagenotFound/error";
export function PageNotFound() {
    return (
        <div className="App">
            <AppHeader></AppHeader>
            <ErrorNotFound></ErrorNotFound>
            <AppFooter></AppFooter>
        </div>
    )

}