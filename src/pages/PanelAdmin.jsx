import CardPagesTarget from '../components/CardPagesTarget'
import '../styles/card-pagesTarget.css'

const PanelAdmin = ({user}) => {
    
    return (
        <section className="cnt-panelAdmin">
            <div className="header">
                <h1>Panel de Administrador</h1>
                <span>Bienvenido</span>
            </div>
            <div className="cards">
                <CardPagesTarget target="users" title="Usuarios" description="Explicación de usuarios"/>
                <CardPagesTarget target="clubs" title="Clubes" description="Explicación de clubes"/>
                <CardPagesTarget target="passes" title="Mercado de pases" description="Explicación de pases"/>
                <CardPagesTarget target="sanctions" title="Sanciones" description="Explicación de sanciones"/>
                <CardPagesTarget target="champions" title="Historial campeones" description="Explicación de campeones"/>
                <CardPagesTarget target="config-league" title="Configuración liga" description="Explicación de config"/>
            </div>
        </section>
    );
}

export default PanelAdmin;