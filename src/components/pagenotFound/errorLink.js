import { Link } from 'react-router-dom';
export function ErrorNotFoundBackAccueil() {

    return (
        <nav className='containerBack'>
            <Link to="/" className='error-back'>Retourner sur la page d'accueil</Link>
        </nav>
    )
}