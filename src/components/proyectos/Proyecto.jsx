import React, { useContext } from 'react';
import ProyectoContext from '../../context/proyectos/ProyectoContext';
import TareaContext from '../../context/tareas/TareaContext';

const Proyecto = ({ proyecto }) => {

    //Contex proyecto
    const proyectosContext = useContext(ProyectoContext);
    const { handleProyectoActual } = proyectosContext;

    //Contex tarea
    const tareasContext = useContext(TareaContext);
    const { handleGetTareas } = tareasContext;

    const { id, nombre } = proyecto;

    
    const handleSeleccionarProyecto = () => {
        handleProyectoActual(proyecto);
        handleGetTareas(id);
    }

    return (
        <li>
            <button
                type="button"
                className="btn btn-blank"
                onClick={handleSeleccionarProyecto}
            >{nombre}</button>
        </li>
    );
}

export default Proyecto;