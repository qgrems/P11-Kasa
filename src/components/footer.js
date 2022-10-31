import logo from '../assets/logo192.png';

export function AppFooter() {
    return (
        <footer className="App-Footer">
            <img src={logo} className="App-logo-Footer" alt="logo" />
            <h2 className='footer-text'> © 2020 Kasa. All rights reserved</h2>
        </footer>
    )
}