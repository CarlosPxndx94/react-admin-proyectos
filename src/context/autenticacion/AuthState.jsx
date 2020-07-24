import React, { useReducer } from 'react';
import AuthContext from './AuthContext';
import AuthReducer from './AuthReducer';
import clienteAxios from '../../config/axios';
import tokenAuth from '../../config/tokenAuth';

import {
    REGISTRO_EXITOSO,
    REGISTRO_ERROR,
    OBTENER_USUARIO,
    LOGIN_EXITOSO,
    LOGIN_ERROR,
    CERRAR_SESION
} from '../../types'

const AuthState = props => {

    const initialState = {
        token: localStorage.getItem('token'),
        autenticado: null,
        user: null,
        mensaje: null,
        cargando: true
    }

    //dispatch
    const [state, dispatch] = useReducer(AuthReducer, initialState);

    //Funciones

    const handleRegistrarUser = async datos => {
        try {
            const respuesta = await clienteAxios.post('/api/users', datos);
            console.log(respuesta.data);

            dispatch({
                type: REGISTRO_EXITOSO,
                payload: respuesta.data
            });

            //Obtener User
            handleUserAutenticado();

        } catch (error) {
            //console.log(error.response.data.msg);
            const alerta = {
                msg: error.response.data.msg,
                categoria: 'alerta-error'
            }

            dispatch({
                type: REGISTRO_ERROR,
                payload: alerta
            });
        }
    }

    const handleUserAutenticado = async () => {
        const token = localStorage.getItem('token');

        if (token) {
            tokenAuth(token);
        }

        try {
            const respuesta = await clienteAxios.get('/api/auth');

            dispatch({
                type: OBTENER_USUARIO,
                payload: respuesta.data.user
            });

        } catch (error) {
            dispatch({
                type: LOGIN_ERROR
            });
        }
    }

    //login
    const handleLogin = async datos => {
        try {
            const respuesta = await clienteAxios.post('api/auth', datos);

            dispatch({
                type: LOGIN_EXITOSO,
                payload: respuesta.data
            });

            handleUserAutenticado();

        } catch (error) {

            let alerta = {
                msg: error.response.data.msg,
                categoria: 'alerta-error'
            }
            if (error.response.data.errores) {
                alerta.msg = error.response.data.errores[0].msg;
            }

            dispatch({
                type: LOGIN_ERROR,
                payload: alerta
            });
        }
    }

    const hanldleCerrarSesion = () => {
        dispatch({
            type: CERRAR_SESION
        });
    }

    return (
        <AuthContext.Provider
            value={{
                token: state.token,
                autenticado: state.autenticado,
                user: state.user,
                mensaje: state.mensaje,
                cargando: state.cargando,
                handleRegistrarUser,
                handleUserAutenticado,
                handleLogin,
                hanldleCerrarSesion
            }}
        >
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthState;