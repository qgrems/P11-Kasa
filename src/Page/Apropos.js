
import { Pictureapropos } from '../components/Apropo/pictureApropo';
import { ResumeMap } from '../components/Apropo/resumeMap';
import { AppFooter } from '../components/footer';
import { AppHeader } from '../components/header';

export function Apropos() {
    return (

        <div className="App">
            <AppHeader></AppHeader>
            <Pictureapropos></Pictureapropos>
            <ResumeMap></ResumeMap>
            <AppFooter></AppFooter>
        </div>
    )
}