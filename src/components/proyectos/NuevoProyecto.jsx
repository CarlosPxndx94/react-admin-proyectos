import React, { Fragment, useState, useContext } from 'react';
import ProyectoContext from '../../context/proyectos/ProyectoContext'

const NuevoProyecto = () => {

    const proyectosContext = useContext(ProyectoContext);

    const {
        formulario,
        errorFormulario,
        handleErrorFormulario,
        handleMostrarFormulario,
        handleAgregarProyecto
    } = proyectosContext;

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

        if (nombre === '') {
            handleErrorFormulario();
            return;
        }

        handleAgregarProyecto(proyecto);

        setProyecto({
            nombre: ''
        });
    }

    // Mostrar el formulario
    const onClickNuevoProyecto = () => {
        handleMostrarFormulario();
    }

    return (
        <Fragment>
            <button
                type="button"
                className="btn btn-block btn-primario"
                onClick={onClickNuevoProyecto}
            >Nuevo Proyecto</button>

            {formulario ?
                (<form
                    className="formulario-nuevo-proyecto"
                    onSubmit={handleProyecto}
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

            {errorFormulario ? (<p className="mensaje error">El nombre es oblligatorio</p>) : null}
        </Fragment >

    );
}

export default NuevoProyecto;