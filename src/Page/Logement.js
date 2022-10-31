
import { AppFooter } from '../components/footer';
import { AppHeader } from '../components/header';
import { LogementDescription } from '../components/Logement/alldescription';
import { Pictures } from '../components/Logement/logementId';
import { DataTitle } from '../components/Logement/titlemap';
import "../styles/logement.css"

export function Logement() {
    return (

        <div className="App">
            <AppHeader></AppHeader>
            <Pictures></Pictures>
            <DataTitle></DataTitle>
            <LogementDescription></LogementDescription>
            <AppFooter></AppFooter>
        </div>
    )
}