const CardUser = ({ user }) => {
    return (
        <tr>
            <td>{user.id}</td>
            <td>{user.last_name}, {user.first_name}</td>
            <td>{user.username}</td>
            <td>{user.email}</td>
            <td>{user.role}</td>
            <td><button>Ver - Editar - Eliminar</button></td>
        </tr>
    );
}

export default CardUser;
