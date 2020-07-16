import React, { useReducer } from 'react';
import ProyectoContext from './ProyectoContext';
import ProyectoReducer from './ProyectoReducer';
import { v4 } from 'uuid';

import {
    FORMULARIO_PROYECTO,
    GET_PROYECTOS,
    AGREGAR_PROYECTOS,
    ERROR_FORMULARIO,
    PROYECTO_ACTUAL,
    ELIMINAR_PROYECTO
} from '../../types';

const ProyectoState = props => {

    const proyectos = [
        { id: 1, nombre: 'Prueba1' },
        { id: 2, nombre: 'Prueba2' },
        { id: 3, nombre: 'Prueba3' }
    ];

    const initialState = {
        formulario: false,
        proyectos: [],
        errorFormulario: false,
        proyectoActual: null
    }

    //Dispatch para ejecutar las acciones
    const [state, dispatch] = useReducer(ProyectoReducer, initialState);

    //CRUD
    const handleMostrarFormulario = () => {
        dispatch({
            type: FORMULARIO_PROYECTO
        });
    }

    //obtner los proyectos
    const handleObtenerProyectos = () => {
        dispatch({
            type: GET_PROYECTOS,
            payload: proyectos
        })
    }

    //agregar nuevo proyecto
    const handleAgregarProyecto = proyecto => {
        proyecto.id = v4()

        dispatch({
            type: AGREGAR_PROYECTOS,
            payload: proyecto
        })
    }

    //mostrar error de formulario
    const handleErrorFormulario = () => {
        dispatch({
            type: ERROR_FORMULARIO
        })
    }

    //Seleccionar proyecto
    const handleProyectoActual = proyecto => {
        dispatch({
            type: PROYECTO_ACTUAL,
            payload: proyecto
        })
    }

    //Eliminar Proyecto
    const handleEliminarProyecto = () => {
        dispatch({
            type: ELIMINAR_PROYECTO            
        })
    }

    return (
        <ProyectoContext.Provider
            value={{
                formulario: state.formulario,
                proyectos: state.proyectos,
                errorFormulario: state.errorFormulario,
                proyectoActual: state.proyectoActual,
                handleMostrarFormulario,
                handleObtenerProyectos,
                handleAgregarProyecto,
                handleErrorFormulario,
                handleProyectoActual,
                handleEliminarProyecto
            }}>
            {props.children}
        </ProyectoContext.Provider>
    )
}

export default ProyectoState;