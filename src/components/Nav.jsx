import '../styles/nav.css';
import { Link } from 'react-router-dom';

const Nav = () => {

    return (
        <nav className='cnt-nav'>
            <div className="logo">Gesliga</div>
            <div className="info-user">
                <div className="cnt-image">
                    <img className='avatar' src="https://i.pinimg.com/474x/3a/13/e8/3a13e8a5ed1a65b919476338f4bf7277.jpg"/>
                </div>
                <div className="cnt-text">
                    <span className='name'>Axel Brian Dip</span>
                    <span className='role'>Administrador</span>
                </div>
                <div className="logout"><Link to="/login">Salir</Link></div>
            </div>
        </nav>
    );
}

export default Nav;
