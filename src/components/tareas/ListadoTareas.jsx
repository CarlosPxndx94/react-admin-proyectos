import React, { Fragment, useContext } from 'react';
import Tarea from './Tarea';
import ProyectoContext from '../../context/proyectos/ProyectoContext'

const ListadoTareas = () => {

    const proyectosContext = useContext(ProyectoContext);
    const { proyectoActual, handleEliminarProyecto } = proyectosContext;

    if (!proyectoActual) return <h2>Selecciona un proyecto</h2>;

    const { id, nombre } = proyectoActual;

    const tareasProyecto = [
        { id: 1, nombre: 'Elegir Plataforma', estado: true },
        { id: 2, nombre: 'Elegir algo', estado: false },
        { id: 3, nombre: 'Elegir color', estado: false },
        { id: 4, nombre: 'Elegir lenguaje', estado: true }
    ];



    return (
        <Fragment>
            <h2>Proyecto: {nombre}</h2>

            <ul className="listado-tareas">

                {tareasProyecto.length === 0
                    ?
                    (
                        <li className="tarea">
                            <p>No hay tareas</p>
                        </li>
                    )
                    :

                    tareasProyecto.map(tarea => (
                        <Tarea
                            key={tarea.id}
                            tarea={tarea}
                        />
                    ))

                }
            </ul>

            <button
                type="button"
                className="btn btn-eliminar"
                onClick={() => handleEliminarProyecto()}
            >Eliminar Proyecto &times;</button>
        </Fragment>
    );
}

export default ListadoTareas;