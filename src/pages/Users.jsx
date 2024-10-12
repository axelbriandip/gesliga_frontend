import '../styles/users.css'

const Users = () => {
    
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