import React, { useReducer } from 'react';
import TareaContext from './TareaContext';
import TareaReducer from './TareaReducer';
import { v4 } from 'uuid';

import {
    GET_TAREAS_PROYECTO,
    NUEVA_TAREA_PROYECTO,
    ERROR_TAREA,
    ELIMINAR_TAREA_PROYECTO,
    ESTADO_TAREA_PROYECTO,
    TAREA_PROYECTO_ACTUAL,
    ACTUALIZAR_TAREA_PROYECTO
} from '../../types';

const TareaState = props => {

    const initialState = {
        tareas: [
            { id: 1, nombre: 'Elegir Plataforma', estado: true, proyecto_id: 1 },
            { id: 2, nombre: 'Elegir algo', estado: false, proyecto_id: 2 },
            { id: 3, nombre: 'Elegir color', estado: false, proyecto_id: 3 },
            { id: 4, nombre: 'Elegir lenguaje', estado: true, proyecto_id: 4 },
            { id: 5, nombre: 'Elegir Plataforma 2', estado: true, proyecto_id: 4 },
            { id: 6, nombre: 'Elegir algo 2', estado: false, proyecto_id: 3 },
            { id: 7, nombre: 'Elegir color 2', estado: false, proyecto_id: 2 },
            { id: 8, nombre: 'Elegir lenguaje 2', estado: true, proyecto_id: 1 }
        ],
        tareasProyecto: null,
        errorTarea: false,
        tareaActual: null
    }

    const [state, dispatch] = useReducer(TareaReducer, initialState);

    const handleGetTareas = proyecto_id => {
        dispatch({
            type: GET_TAREAS_PROYECTO,
            payload: proyecto_id
        });
    }

    const handleErrorTarea = () => {
        dispatch({
            type: ERROR_TAREA
        });
    }

    const handleNuevaTarea = tarea => {
        tarea.id = v4();
        dispatch({
            type: NUEVA_TAREA_PROYECTO,
            payload: tarea
        });
    }

    const handleEliminarTarea = tarea_id => {
        dispatch({
            type: ELIMINAR_TAREA_PROYECTO,
            payload: tarea_id
        });
    }

    const handleEstadoTarea = tarea => {
        dispatch({
            type: ESTADO_TAREA_PROYECTO,
            payload: tarea
        });
    }

    const handleSetTareaActual = tarea => {
        dispatch({
            type: TAREA_PROYECTO_ACTUAL,
            payload: tarea
        });
    }

    const handleActualizarTarea = tarea => {
        dispatch({
            type: ACTUALIZAR_TAREA_PROYECTO,
            payload: tarea
        });
    }

    return (
        <TareaContext.Provider
            value={{
                tareas: state.tareas,
                tareasProyecto: state.tareasProyecto,
                errorTarea: state.errorTarea,
                tareaActual: state.tareaActual,
                handleGetTareas,
                handleErrorTarea,
                handleNuevaTarea,
                handleEliminarTarea,
                handleEstadoTarea,
                handleSetTareaActual,
                handleActualizarTarea
            }}
        >
            {props.children}
        </TareaContext.Provider>
    );
}

export default TareaState;
