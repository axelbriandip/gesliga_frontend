import '../styles/users.css'
import { getUsersThunk } from '../store/slices/user.slice'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Users = () => {
    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(getUsersThunk())
    }, []);

    const userLogged = useSelector((state) => state.users.setUserLogged);
    const usersList = useSelector((state) => state.users.usersList);

    console.log(userLogged);
    console.log(usersList);
    

    return (
        <section className="cnt-users">
            <div className="header">
                <h1>Gestión de usuarios</h1>
                <span>subtítulo</span>
            </div>
            <div className="content">
                <button>Crear usuario</button>
                <button>Barra de búsqueda</button>
            </div>
        </section>
    );
}

export default Users;