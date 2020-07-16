import React, { useContext } from 'react';
import ProyectoContext from '../../context/proyectos/ProyectoContext'

const Proyecto = ({ proyecto }) => {

    const proyectosContext = useContext(ProyectoContext);
    const { handleProyectoActual } = proyectosContext;

    const { nombre } = proyecto;

    return (
        <li>
            <button
                type="button"
                className="btn btn-blank"
                onClick={() => handleProyectoActual(proyecto)}
            >{nombre}</button>
        </li>
    );
}

export default Proyecto;