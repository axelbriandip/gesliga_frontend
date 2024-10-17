import { useDispatch, useSelector } from 'react-redux';
import '../styles/nav.css';
import { useNavigate } from 'react-router-dom';
import { setUserLogged } from '../store/slices/user.slice';

const Nav = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    
    const handleLogout = () => {
        dispatch(setUserLogged(null))
        navigate('/login');
    }

	const userLogged = useSelector((state) => state.users.userLogged)

    return (
        <nav className='cnt-nav'>
            <div className="logo">Gesliga</div>

            {/* Renderiza info-user solo si userLogged no es null */}
            {userLogged ? (
                <div className="info-user">
                    <div className="cnt-image">
                        <img className='avatar' src="https://i.pinimg.com/474x/3a/13/e8/3a13e8a5ed1a65b919476338f4bf7277.jpg" alt="avatar" />
                    </div>
                    <div className="cnt-text">
                        {/* Muestra el nombre y el rol desde el estado de Redux */}
                        <span className='name'>{userLogged.first_name} {userLogged.last_name}</span>
                        <span className='role'>{userLogged.role}</span>
                    </div>
                    <div className="logout">
                        <a onClick={handleLogout}>Salir</a>
                    </div>
                </div>
            ) : (
                <div className="login">
                    {/* Si no hay usuario logueado, quizás podrías mostrar un enlace de login */}
                    {/* <a onClick={() => navigate('/login')}>Iniciar sesión</a> */}
                </div>
            )}
        </nav>
    );
}

export default Nav;
