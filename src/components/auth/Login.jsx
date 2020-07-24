import React, { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AlertasContext from '../../context/alertas/AlertasContext';
import AuthContext from '../../context/autenticacion/AuthContext';

const Login = (props) => {

    //Constex alertas
    const alertasContext = useContext(AlertasContext);
    const { alerta, handleMostrarAlerta } = alertasContext;

    //Context Auth
    const authContext = useContext(AuthContext);
    const { autenticado, mensaje, handleLogin } = authContext;

    //Escuchar los diferentes estados despues de dar click en el boton login
    useEffect(() => {
        if (autenticado) {
            props.history.push('/proyectos');
        }

        if (mensaje) {
            const { msg, categoria } = mensaje;
            handleMostrarAlerta(msg, categoria);
        }
    }, [mensaje, autenticado, props.history]);

    const [login, setLogin] = useState({
        email: '',
        password: ''
    });

    const { email, password } = login;

    const handleChangeLogin = e => {
        setLogin({
            ...login,
            [e.target.name]: e.target.value
        });
    };

    const handleForm = e => {
        e.preventDefault();

        if (email.trim() === '' ||
            password.trim === '') {
            handleMostrarAlerta('Todos los campos son obligatorios', 'alerta-error');
            return;
        }

        handleLogin({ email, password });
    };

    return (
        <div className="form-usuario">
            {alerta
                ?
                <div
                    className={`alerta ${alerta.categoria}`}
                >{alerta.msg}</div>
                :
                null
            }
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
                            onChange={handleChangeLogin}
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
                            onChange={handleChangeLogin}
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