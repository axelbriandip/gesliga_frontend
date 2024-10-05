const PanelAdmin = ({user}) => {
    
    return (
        <div>
            <h1>Panel de Administrador</h1>
            <h2>¡Bienvenido, {user.first_name} {user.last_name}!</h2>
        </div>
    );
}

export default PanelAdmin;