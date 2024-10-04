import '../styles/login.css';

const Login = () => {
	return (
		<div className="cnt-login">
			<form className="form">
				<p className="form-title">Accedé a tu cuenta</p>
				<div className="input-container">
					<input type="text" placeholder="Nombre de usuario"/>
				</div>
				<div className="input-container">
					<input type="password" placeholder="Contraseña"/>
				</div>
				<button type="submit" className="submit">Acceder</button>
				<p className="signup-link"> ¿Olvidaste tu contraseña? <a href="">Recuperar contraseña</a></p>
			</form>
		</div>
	);
};

export default Login;