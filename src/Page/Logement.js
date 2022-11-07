
import { AppFooter } from '../components/footer';
import { AppHeader } from '../components/header';
import { LogementDescription } from '../components/Logement/alldescription';
import { Pictures } from '../components/Logement/logementId';
import "../styles/logement.css"

export function Logement() {
    return (

        <div className="App">
            <AppHeader></AppHeader>
            <Pictures></Pictures>
            <LogementDescription></LogementDescription>
            <AppFooter></AppFooter>
        </div>
    )
}