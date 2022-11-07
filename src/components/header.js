import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo.jpg';

export function AppHeader() {
    let location = useLocation()
    return (
        <header className="App-header">
            <div className='App-container'>
                <img src={logo} className="App-logo" alt="logo" />
                <nav className='App-link'>
                    {
                        (location.pathname === "/") ?
                            <>
                                <Link to="/" className='app-link_accueil app-link_accueil_sousligne '>Accueil</Link>
                                <Link to="/Apropos" className='app-link_aPropos'>A Propos</Link>
                            </> : ""
                    }
                    {
                        (location.pathname === "/Apropos") ?
                            <>
                                <Link to="/" className='app-link_accueil  '>Accueil</Link>
                                <Link to="/Apropos" className='app-link_aPropos app-link_accueil_sousligne'>A Propos</Link>
                            </> : ""
                    }
                    {
                        (location.pathname !== "/Apropos" && location.pathname !== "/") ?
                            <>
                                <Link to="/" className='app-link_accueil  '>Accueil</Link>
                                <Link to="/Apropos" className='app-link_aPropos'>A Propos</Link>
                            </> : ""
                    }
                </nav>
            </div>
        </header>
    )
}