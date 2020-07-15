
import { FORMULARIO_PROYECTO, GET_PROYECTOS } from '../../types';

export default (state, action) => {
    switch (action.type) {
        case FORMULARIO_PROYECTO:
            return {
                ...state,
                formulario: true
            }
        case GET_PROYECTOS:
            return {
                ...state,
                proyectos: action.payload
            }
        default:
            return state;
    }
}