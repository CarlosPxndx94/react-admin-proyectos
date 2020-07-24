import React, { useReducer } from 'react';
import AlertasContext from './AlertasContext';
import AlertasReducer from './AlertasReducer';

import {
    MOSTRAR_ALERTA,
    OCULTAR_ALERTA
} from '../../types';

const AlertasState = props => {

    const initialState = {
        alerta: null
    }

    //Dispatch para ejecutar las acciones
    const [state, dispatch] = useReducer(AlertasReducer, initialState);

    //Funciones
    const handleMostrarAlerta = (msg, categoria) => {
        dispatch({
            type: MOSTRAR_ALERTA,
            payload: {
                msg,
                categoria
            }
        });

        setTimeout(() => {
            dispatch({
                type: OCULTAR_ALERTA
            });
        }, 5000);
    }

    return (
        <AlertasContext.Provider
            value={{
                alerta: state.alerta,
                handleMostrarAlerta
            }}
        >
            {props.children}
        </AlertasContext.Provider>
    )
}

export default AlertasState;