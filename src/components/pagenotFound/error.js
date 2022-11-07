import imageError from '../../img/404.png'
import { Link } from 'react-router-dom';
export function ErrorNotFound() {

    return (
        <>
            <div className="error-container">
                <div className='error-placement'>
                    <img src={imageError} className='picture_error' alt='nature' />
                    <div className='text-placement'>
                        <p className="error-text">Oups! La page que vous demandez n'existe pas.</p>
                    </div>
                </div>
            </div>
            <nav className='containerBack'>
                <Link to="/" className='error-back'>Retourner sur la page d'accueil</Link>
            </nav>
        </>

    )
}