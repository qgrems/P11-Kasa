import { Link } from 'react-router-dom';
import logo from '../assets/logo.jpg';

export function AppHeader() {
    return (
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <nav className='App-link'>
                <Link to="/" className='app-link_accueil'>Accueil</Link>
                <Link to="/Apropos" className='app-link_aPropos'>A Propos</Link>
            </nav>
        </header>
    )
}