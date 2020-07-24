import React, { useContext, useEffect } from 'react';
import { Route, Redirect } from 'react-router-dom';
import AuthContext from '../../context/autenticacion/AuthContext';

const RutaPrivada = ({ component: Component, ...props }) => {

    //Context Auth
    const authContext = useContext(AuthContext);
    const { autenticado, cargando, handleUserAutenticado } = authContext;

    useEffect(() => {
        handleUserAutenticado();
    }, []);


    return (
        <Route
            {...props} render={props => !autenticado && !cargando ?
                (
                    <Redirect
                        to="/"
                    />
                )
                :
                (
                    <Component
                        {...props}
                    />
                )
            }
        />
    );
}

export default RutaPrivada;
