import React, { useReducer } from 'react';
import ProyectoContext from './ProyectoContext';
import ProyectoReducer from './ProyectoReducer';
import clienteAxios from '../../config/axios';

import {
    FORMULARIO_PROYECTO,
    GET_PROYECTOS,
    AGREGAR_PROYECTOS,
    ERROR_FORMULARIO,
    PROYECTO_ACTUAL,
    ELIMINAR_PROYECTO,
    PROYECTO_ERROR
} from '../../types';

const ProyectoState = props => {

    const initialState = {
        formulario: false,
        proyectos: [],
        errorFormulario: false,
        proyectoActual: null,
        mensaje: null,
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
    const handleObtenerProyectos = async () => {
        try {
            const resultado = await clienteAxios.get('api/proyectos');
        
            dispatch({
                type: GET_PROYECTOS,
                payload: resultado.data.proyectos
            });
        } catch (error) {
            const alerta = {
                msg: error.response.data.msg,
                categoria: 'alerta-error'
            }

            dispatch({
                type: PROYECTO_ERROR,
                payload: alerta
            });
        }
    }

    //agregar nuevo proyecto
    const handleAgregarProyecto = async proyecto => {
        try {
            const resultado = await clienteAxios.post('api/proyectos', proyecto);

            dispatch({
                type: AGREGAR_PROYECTOS,
                payload: resultado.data.proyecto
            });

        } catch (error) {
            const alerta = {
                msg: error.response.data.msg,
                categoria: 'alerta-error'
            }

            dispatch({
                type: PROYECTO_ERROR,
                payload: alerta
            });
        }
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
    const handleEliminarProyecto = async proyecto_id => {
        try {
            await clienteAxios.delete(`api/proyectos/${proyecto_id}`);

            dispatch({
                type: ELIMINAR_PROYECTO
            });

        } catch (error) {
            const alerta = {
                msg: error.response.data.msg,
                categoria: 'alerta-error'
            }

            dispatch({
                type: PROYECTO_ERROR,
                payload: alerta
            });
        }
    }

    return (
        <ProyectoContext.Provider
            value={{
                formulario: state.formulario,
                proyectos: state.proyectos,
                errorFormulario: state.errorFormulario,
                proyectoActual: state.proyectoActual,
                mensaje: state.mensaje,
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