import '../styles/login.css';
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { setUserLogged } from '../store/slices/user.slice';

const Login = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const [username, setUsername] = useState('axelbdip');
	const [password, setPassword] = useState('melash18');

	const API_URL = 'http://localhost:3000/api/v1';

	const handleLogin = async (e) => {
		e.preventDefault();

		axios.post(`${API_URL}/users/login`, { username, password })
			.then(res => {
				dispatch(setUserLogged(res.data.data.user));
				alert("User logged")

				const role = res.data.data.user.role;
				if(role == 'admin') navigate("/panel-admin")
				else if(role == 'delegado') navigate("/panel-delegate")
				else navigate("/panel-guest")
			})
			.catch(err => {
				if (err.response && err.response.status === 401) alert('Usuario y/o contraseña incorrectos');
				else alert('Ocurrió un error inesperado:', err);
			})
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