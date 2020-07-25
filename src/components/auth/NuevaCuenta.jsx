import React, { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AlertasContext from '../../context/alertas/AlertasContext';
import AuthContext from '../../context/autenticacion/AuthContext';

const NuevaCuenta = (props) => {

    //Constex alertas
    const alertasContext = useContext(AlertasContext);
    const { alerta, handleMostrarAlerta } = alertasContext;

    //Context Auth
    const authContext = useContext(AuthContext);
    const { autenticado, mensaje, handleRegistrarUser } = authContext;

    //Escuchar los diferentes estados despues de dar click en el boton registrar
    useEffect(() => {

        if (autenticado) {
            props.history.push('/proyectos');
        }

        if (mensaje) {
            const { msg, categoria } = mensaje;
            handleMostrarAlerta(msg, categoria);
        }
        // eslint-disable-next-line
    }, [mensaje, autenticado, props.history]);

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

        //Validar campos vacios
        if (nombre.trim() === '' ||
            email.trim() === '' ||
            password.trim() === '' ||
            repeatpassword.trim() === '') {
            handleMostrarAlerta('Todos los campos son obligatorios', 'alerta-error');
            return;
        }

        if (password.length < 6) {
            handleMostrarAlerta('La constraseña debe ser minimo de 6 caracteres', 'alerta-error');
            return;
        }

        if (password !== repeatpassword) {
            handleMostrarAlerta('Las constraseñas deben ser iguales', 'alerta-error');
            return;
        }

        //Enviar al servicio
        handleRegistrarUser({
            nombre,
            email,
            password
        });
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
                            placeholder="Repite tu Password"
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