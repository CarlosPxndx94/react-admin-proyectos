import React, { useContext, useEffect } from 'react'
import Proyecto from './Proyecto';
import ProyectoContext from '../../context/proyectos/ProyectoContext'

const ListadoProyectos = () => {

    const proyectosContext = useContext(ProyectoContext);
    const { proyectos, handleObtenerProyectos } = proyectosContext;

    useEffect(() => {
        handleObtenerProyectos();
    }, []);

    if (proyectos.length === 0) return <p>{`No hay proyectos!!!, Comienza creando uno ;)`}</p>;

    return (
        <ul className="listado-proyectos">
            {proyectos.map(proyecto => (
                <Proyecto
                    key={proyecto.id}
                    proyecto={proyecto}
                />
            ))}

        </ul>
    );
}

export default ListadoProyectos;