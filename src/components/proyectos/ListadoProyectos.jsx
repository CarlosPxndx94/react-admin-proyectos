import React, { useContext, useEffect } from 'react'
import Proyecto from './Proyecto';
import ProyectoContext from '../../context/proyectos/ProyectoContext';
import AlertasContext from '../../context/alertas/AlertasContext';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const ListadoProyectos = () => {

    const proyectosContext = useContext(ProyectoContext);
    const { mensaje, proyectos, handleObtenerProyectos } = proyectosContext;

    const alertasContext = useContext(AlertasContext);
    const { alerta, handleMostrarAlerta } = alertasContext;

    useEffect(() => {

        if (mensaje) {
            handleMostrarAlerta(mensaje.msg, mensaje.categoria);
        }

        handleObtenerProyectos();
        // eslint-disable-next-line
    }, [mensaje]);

    if (proyectos.length === 0) return <p>{`No hay proyectos!!!, Comienza creando uno ;)`}</p>;

    return (
        <ul className="listado-proyectos">

            {alerta
                ?
                <div
                    className={`alerta ${alerta.categoria}`}
                >{alerta.msg}</div>
                :
                null
            }

            <TransitionGroup>
                {
                    proyectos.map(proyecto => (
                        <CSSTransition
                            key={proyecto._id}
                            timeout={200}
                            classNames="proyecto"
                        >
                            <Proyecto
                                proyecto={proyecto}
                            />
                        </CSSTransition>
                    ))
                }
            </TransitionGroup>

        </ul >
    );
}

export default ListadoProyectos;