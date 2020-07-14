import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const NuevaCuenta = () => {

    const [login, setLogin] = useState({
        nombre: '',
        email: '',
        password: '',
        repeatpassword: ''
    });

    const { nombre, email, password, repeatpassword } = login;

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
                    Crear una cuenta
                </h1>

                <form
                    onSubmit={handleForm}
                >

                    <div className="campo-form">
                        <label htmlFor="nombre">Nombre</label>
                        <input
                            type="text"
                            id="nombre"
                            name="nombre"
                            placeholder="Tu Nombre"
                            value={nombre}
                            onChange={handleLogin}
                        />
                    </div>

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
                        <label htmlFor="repeatpassword">Repetir Password</label>
                        <input
                            type="password"
                            id="repeatpassword"
                            name="repeatpassword"
                            placeholder="Repite yu Password"
                            value={repeatpassword}
                            onChange={handleLogin}
                        />
                    </div>

                    <div className="campo-form">
                        <input
                            type="submit"
                            className="btn btn-primario btn-block"
                            value="Registrarme"
                        />
                    </div>
                </form>

                <Link to={'/'} className="enlace-cuenta">
                    Volver a Iniciar Sesión
                </Link>
            </div>
        </div>
    );
}

export default NuevaCuenta;