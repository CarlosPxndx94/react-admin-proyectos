import React, { useReducer } from 'react';
import TareaContext from './TareaContext';
import TareaReducer from './TareaReducer';
import clienteAxios from '../../config/axios';

import {
    GET_TAREAS_PROYECTO,
    NUEVA_TAREA_PROYECTO,
    ERROR_TAREA,
    ELIMINAR_TAREA_PROYECTO,    
    TAREA_PROYECTO_ACTUAL,
    ACTUALIZAR_TAREA_PROYECTO,
    TAREA_ERROR
} from '../../types';

const TareaState = props => {

    const initialState = {
        tareasProyecto: [],
        errorTarea: false,
        tareaActual: null,
        mensaje: null
    }

    const [state, dispatch] = useReducer(TareaReducer, initialState);

    const handleGetTareas = async proyecto => {

        try {
            const resultado = await clienteAxios.get('api/tareas', { params: { proyecto } });

            dispatch({
                type: GET_TAREAS_PROYECTO,
                payload: resultado.data.tareas
            });
        } catch (error) {
            console.log(error.response);
            const alerta = {
                msg: error.response.data.msg,
                categoria: 'alerta-error'
            }

            dispatch({
                type: TAREA_ERROR,
                payload: alerta
            });
        }
    }

    const handleErrorTarea = () => {
        dispatch({
            type: ERROR_TAREA
        });
    }

    const handleNuevaTarea = async tarea => {

        try {
            const resultado = await clienteAxios.post('api/tareas', tarea);

            dispatch({
                type: NUEVA_TAREA_PROYECTO,
                payload: resultado.data.tarea
            });

        } catch (error) {
            const alerta = {
                msg: error.response.data.msg,
                categoria: 'alerta-error'
            }

            dispatch({
                type: TAREA_ERROR,
                payload: alerta
            });
        }
    }

    const handleEliminarTarea = async (id, proyecto) => {

        try {
            await clienteAxios.delete('api/tareas', {
                params: {
                    id,
                    proyecto
                }
            });

            dispatch({
                type: ELIMINAR_TAREA_PROYECTO,
                payload: id
            });

        } catch (error) {
            const alerta = {
                msg: error.response.data.msg,
                categoria: 'alerta-error'
            }

            dispatch({
                type: TAREA_ERROR,
                payload: alerta
            });
        }
    }

    const handleSetTareaActual = tarea => {
        dispatch({
            type: TAREA_PROYECTO_ACTUAL,
            payload: tarea
        });
    }

    const handleActualizarTarea = async tarea => {

        try {
            const resultado = await clienteAxios.put('api/tareas', tarea);
            
            dispatch({
                type: ACTUALIZAR_TAREA_PROYECTO,
                payload: resultado.data.tarea
            });

        } catch (error) {
            const alerta = {
                msg: error.response.data.msg,
                categoria: 'alerta-error'
            }

            dispatch({
                type: TAREA_ERROR,
                payload: alerta
            });
        }
    }

    return (
        <TareaContext.Provider
            value={{
                tareasProyecto: state.tareasProyecto,
                errorTarea: state.errorTarea,
                tareaActual: state.tareaActual,
                handleGetTareas,
                handleErrorTarea,
                handleNuevaTarea,
                handleEliminarTarea,
                handleSetTareaActual,
                handleActualizarTarea
            }}
        >
            {props.children}
        </TareaContext.Provider>
    );
}

export default TareaState;
