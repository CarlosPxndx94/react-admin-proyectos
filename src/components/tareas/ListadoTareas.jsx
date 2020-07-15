import React, { Fragment } from 'react';
import Tarea from './Tarea';

const ListadoTareas = () => {

    const tareasProyecto = [
        { id: 1, nombre: 'Elegir Plataforma', estado: true },
        { id: 2, nombre: 'Elegir algo', estado: false },
        { id: 3, nombre: 'Elegir color', estado: false },
        { id: 4, nombre: 'Elegir lenguaje', estado: true }
    ];

    return (
        <Fragment>
            <h2>Proyecto: Nombre Proyecto</h2>

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
                className="btn btn-primario"
            >Eliminar Proyecto &times;</button>
        </Fragment>
    );
}

export default ListadoTareas;