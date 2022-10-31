import React from "react";
import { AppFooter } from "../components/footer";
import { AppHeader } from "../components/header";
import { ErrorNotFound } from "../components/pagenotFound/error";

import { ErrorNotFoundBackAccueil } from "../components/pagenotFound/errorLink";
export function PageNotFound() {
    return (
        <div className="App">
            <AppHeader></AppHeader>
            <ErrorNotFound></ErrorNotFound>
            <ErrorNotFoundBackAccueil></ErrorNotFoundBackAccueil>
            <AppFooter></AppFooter>
        </div>
    )

}