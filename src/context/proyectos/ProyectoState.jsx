import React, { useReducer } from 'react';
import ProyectoContext from './ProyectoContext';
import ProyectoReducer from './ProyectoReducer';

import {
    FORMULARIO_PROYECTO,
    GET_PROYECTOS
} from '../../types';

const ProyectoState = props => {

    const proyectos = [
        { id: 1, nombre: 'Prueba1' },
        { id: 2, nombre: 'Prueba2' },
        { id: 3, nombre: 'Prueba3' }
    ];

    const initialState = {
        formulario: false,
        proyectos: []
    }

    //Dispatch para ejecutar las acciones
    const [state, dispatch] = useReducer(ProyectoReducer, initialState);

    //CRUD

    const handleMostrarFormulario = () => {
        dispatch({
            type: FORMULARIO_PROYECTO
        });
    }

    const handleObtenerProyectos = () => {
        dispatch({
            type: GET_PROYECTOS,
            payload: proyectos
        })
    }

    return (
        <ProyectoContext.Provider
            value={{
                formulario: state.formulario,
                proyectos: state.proyectos,
                handleMostrarFormulario,
                handleObtenerProyectos
            }}>
            {props.children}
        </ProyectoContext.Provider>
    )
}

export default ProyectoState;