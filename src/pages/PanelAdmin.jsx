import CardPagesTarget from '../components/CardPagesTarget'
import '../styles/card-pagesTarget.css'

const PanelAdmin = ({user}) => {
    
    return (
        <section className="cnt-panelAdmin">
            <div className="header">
                <h1>Panel de Administrador</h1>
                <span>Bienvenido {user.first_name} {user.last_name}</h3>
            </div>
            <div className="cards">
                <CardPagesTarget title="Usuarios" description="Explicación de usuarios"/>
                <CardPagesTarget title="Clubes" description="Explicación de clubes"/>
                <CardPagesTarget title="Mercado de pases" description="Explicación de pases"/>
                <CardPagesTarget title="Sanciones" description="Explicación de sanciones"/>
                <CardPagesTarget title="Historial campeones" description="Explicación de campeones"/>
                <CardPagesTarget title="Configuración liga" description="Explicación de config"/>
            </div>
        </section>
    );
}

export default PanelAdmin;