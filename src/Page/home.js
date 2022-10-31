import { Gallery } from '../components/Accueil/galery'
import { AppHeader } from '../components/header';
import { Picturemain } from '../components/Accueil/picturemain';
import { AppFooter } from '../components/footer';

export function Home() {
    return (

        <div className="App">
            <AppHeader></AppHeader>
            <Picturemain></Picturemain>
            <Gallery></Gallery>
            <AppFooter></AppFooter>
        </div>
    )
}