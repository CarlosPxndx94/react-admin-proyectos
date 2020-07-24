import React, { useContext, useEffect } from 'react';
import AuthContext from '../../context/autenticacion/AuthContext';

const Barra = () => {

    //Context Auth
    const authContext = useContext(AuthContext);
    const { user, handleUserAutenticado, hanldleCerrarSesion } = authContext;

    useEffect(() => {
        handleUserAutenticado();
    }, []);

    return (
        <header className="app-header">
            {user
                ?
                <p className="nombre-usuario">
                    Hola <span>{user.nombre}</span>
                </p>
                :
                null
            }

            <nav className="nav-principal">
                <button
                    className="btn btn-blank cerrar-sesion"
                    onClick={() => hanldleCerrarSesion()}
                >
                    Cerrar Sesión
                </button>
            </nav>
        </header>
    );
}

export default Barra;