import { Gallery } from '../components/Accueil/galery'
import { AppHeader } from '../components/header';
import { AppFooter } from '../components/footer';

export function Home() {
    return (
        <div className="App">
            <AppHeader></AppHeader>
            <Gallery></Gallery>
            <AppFooter></AppFooter>
        </div>
    )
}