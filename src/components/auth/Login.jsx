import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {

    const [login, setLogin] = useState({
        email: '',
        password: ''
    });

    const { email, password } = login;

    const handleLogin = e => {
        setLogin({
            ...login,
            [e.target.name]: e.target.value
        });
    };

    const handleForm = e => {
        e.preventDefault();
    };

    return (
        <div className="form-usuario">
            <div className="contenedor-form sombra-dark">
                <h1>
                    Inicia Sesión
                </h1>

                <form
                    onSubmit={handleForm}
                >
                    <div className="campo-form">
                        <label htmlFor="email">E-mail</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Tu E-mail"
                            value={email}
                            onChange={handleLogin}
                        />
                    </div>

                    <div className="campo-form">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Tu Password"
                            value={password}
                            onChange={handleLogin}
                        />
                    </div>

                    <div className="campo-form">
                        <input
                            type="submit"
                            className="btn btn-primario btn-block"
                            value="Inicciar Sesión"
                        />
                    </div>
                </form>

                <Link to={'/nueva-cuenta'} className="enlace-cuenta">
                    Crear Cuenta
                </Link>
            </div>
        </div>
    );
}

export default Login;