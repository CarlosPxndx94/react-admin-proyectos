import React, { Fragment, useState, useContext } from 'react';
import ProyectoContext from '../../context/proyectos/ProyectoContext'

const NuevoProyecto = () => {

    const proyectosContext = useContext(ProyectoContext);

    const { formulario, handleMostrarFormulario } = proyectosContext;

    const [proyecto, setProyecto] = useState({
        nombre: ''
    });

    const { nombre } = proyecto;

    const onChangeProyecto = e => {
        setProyecto({
            ...proyecto,
            [e.target.name]: e.target.value
        })
    }

    const handleProyecto = e => {
        e.preventDefault();

        handleMostrarFormulario();
    }

    return (
        <Fragment>
            <button
                type="button"
                className="btn btn-block btn-primario"
                onClick={handleProyecto}
            >Nuevo Proyecto</button>

            {formulario ?
                (<form
                    className="formulario-nuevo-proyecto"
                >

                    <input
                        type="text"
                        className="input-text"
                        placeholder="Nombre"
                        name="nombre"
                        onChange={onChangeProyecto}
                        value={nombre}
                    />

                    <input
                        type="submit"
                        className="btn btn-block btn-primario"
                        value="Agregar Proyecto"
                    />

                </form>)
                :
                null}

        </Fragment>

    );
}

export default NuevoProyecto;