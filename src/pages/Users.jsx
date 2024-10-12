import '../styles/users.css'
import { getUsersThunk } from '../store/slices/user.slice'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CardUser from '../components/CardUser';

const Users = () => {
    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(getUsersThunk())
    }, []);

    // const userLogged = useSelector((state) => state.users.setUserLogged);
    const usersList = useSelector((state) => state.users.usersList);    

    return (
        <section className="cnt-users">
            <div className="header">
                <h1>Gestión de usuarios</h1>
                <span>subtítulo</span>
            </div>
            <div className="content">
                <button>Crear usuario</button>
                <button>Barra de búsqueda</button>
                <div className="container-users">
                    <table>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Nombre</th>
                                <th>Usuario</th>
                                <th>Email</th>
                                <th>Rol</th>
                                <th>Opciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                usersList.map(user => {
                                    return <CardUser key={user.id} user={user}/>
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
}

export default Users;