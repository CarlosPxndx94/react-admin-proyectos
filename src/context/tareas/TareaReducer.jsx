import {
    GET_TAREAS_PROYECTO,
    ERROR_TAREA,
    NUEVA_TAREA_PROYECTO,
    ELIMINAR_TAREA_PROYECTO,
    ESTADO_TAREA_PROYECTO,
    TAREA_PROYECTO_ACTUAL,
    ACTUALIZAR_TAREA_PROYECTO
} from '../../types';

export default (state, action) => {
    switch (action.type) {
        case GET_TAREAS_PROYECTO:
            return {
                ...state,
                tareasProyecto: state.tareas.filter(tarea => tarea.proyecto_id === action.payload)
            }
        case NUEVA_TAREA_PROYECTO:
            return {
                ...state,
                tareas: [action.payload, ...state.tareas],
                errorTarea: false
            }
        case ERROR_TAREA:
            return {
                ...state,
                errorTarea: true
            }
        case ELIMINAR_TAREA_PROYECTO:
            return {
                ...state,
                tareas: state.tareas.filter(tarea => tarea.id !== action.payload)
            }
        case ESTADO_TAREA_PROYECTO:
        case ACTUALIZAR_TAREA_PROYECTO:
            console.log(action.payload);
            return {
                ...state,
                tareas: state.tareas.map(tarea => tarea.id === action.payload.id ? action.payload : tarea),
                errorTarea: false,
                tareaActual: null
            }
        case TAREA_PROYECTO_ACTUAL:
            return {
                ...state,
                tareaActual: action.payload
            }
        default:
            return state;
    }
}