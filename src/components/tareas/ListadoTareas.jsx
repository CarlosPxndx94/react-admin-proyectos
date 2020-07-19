import React, { Fragment, useContext } from 'react';
import Tarea from './Tarea';
import ProyectoContext from '../../context/proyectos/ProyectoContext';
import TareaContext from '../../context/tareas/TareaContext';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const ListadoTareas = () => {

    //proyecto context
    const proyectosContext = useContext(ProyectoContext);
    const { proyectoActual, handleEliminarProyecto } = proyectosContext;

    //tareas context
    const tareasContext = useContext(TareaContext);
    const { tareasProyecto } = tareasContext;

    if (!proyectoActual) return <h2>Selecciona un proyecto</h2>;

    const { nombre } = proyectoActual;

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
                    <TransitionGroup>
                        {
                            tareasProyecto.map(tarea => (
                                <CSSTransition
                                    key={tarea.id}
                                    timeout={200}
                                    classNames="tarea"
                                >
                                    <Tarea
                                        tarea={tarea}
                                    />
                                </CSSTransition>
                            ))
                        }
                    </TransitionGroup>
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