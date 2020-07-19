import React, { useContext } from 'react';
import ProyectoContext from '../../context/proyectos/ProyectoContext';
import TareaContext from '../../context/tareas/TareaContext';


const Tareas = ({ tarea }) => {

    const proyectosContext = useContext(ProyectoContext);
    const { proyectoActual } = proyectosContext;

    const tareasConstext = useContext(TareaContext);
    const {
        handleEliminarTarea,
        handleGetTareas,
        handleEstadoTarea,
        handleSetTareaActual
    } = tareasConstext;

    const { id, nombre, estado } = tarea;

    const clickEliminarTarea = tarea_id => {
        handleEliminarTarea(tarea_id);
        handleGetTareas(proyectoActual.id);
    };

    const clickEstadoTarea = tarea => {
        if (tarea.estado) {
            tarea.estado = false;
        } else {
            tarea.estado = true;
        }
        handleEstadoTarea(tarea);
    }

    const handleCargarTarea = tarea => {
        handleSetTareaActual(tarea);
    }

    return (
        <li className="tarea sombre">
            <p>{nombre}</p>

            <div className="estado">
                {estado
                    ?
                    (
                        <button
                            type="button"
                            className="completo"
                            onClick={() => clickEstadoTarea(tarea)}
                        >Completado</button>
                    )
                    :
                    (
                        <button
                            type="button"
                            className="incompleto"
                            onClick={() => clickEstadoTarea(tarea)}
                        >Incompleto</button>
                    )
                }
            </div>

            <div className="acciones">
                <button
                    type="button"
                    className="btn btn-primario"
                    onClick={() => handleCargarTarea(tarea)}
                >Editar</button>

                <button
                    type="button"
                    className="btn btn-secundario"
                    onClick={() => clickEliminarTarea(id)}
                >Eliminar</button>
            </div>
        </li>
    );
}

export default Tareas;