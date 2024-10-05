import '../styles/login.css';
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = ( {setUser} ) => {
	const navigate = useNavigate();

	const [username, setUsername] = useState('axelbdip');
	const [password, setPassword] = useState('melash18');

	const API_URL = 'http://localhost:3000/api/v1';

	const api = axios.create({
		baseURL: API_URL,
	});

	// Función para iniciar sesión
	const handleLogin = async (e) => {
		e.preventDefault();

		try {
			const response = await api.post('/users/login', { username, password });
			console.log(response.data.data.user)

			const loggedInUser = response.data.data.user;
			setUser(loggedInUser);

			const role = response.data.data.user.role;
			if(role == 'admin') navigate("/panel-admin")
			else if(role == 'delegado') navigate("/panel-delegate")
			else navigate("/panel-guest")
		} catch (err) {
			if (err.response && err.response.status === 401) {
				// Esto significa que el error es un 400 y probablemente es un problema con el login
				alert('Usuario y/o contraseña incorrectos');
			} else {
				// Para cualquier otro tipo de error
				alert('Ocurrió un error inesperado:', err);
			}
		}
	};

	return (
		<div className="cnt-login">
			<form className="form" onSubmit={handleLogin}>
				<p className="form-title">Accedé a tu cuenta</p>
				<div className="input-container">
					<input
						type="text"
						placeholder="Nombre de usuario"
						value={username}
						onChange={(e) => setUsername(e.target.value)}
						required
					/>
				</div>
				<div className="input-container">
					<input
						type="password"
						placeholder="Contraseña"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						required
					/>
				</div>
				<button type="submit" className="submit">Acceder</button>
				<p className="signup-link"> ¿Olvidaste tu contraseña? <a href="">Recuperar contraseña</a></p>
			</form>
		</div>
	);
};

export default Login;