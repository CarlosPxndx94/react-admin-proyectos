import React, { useState, useContext, useEffect } from 'react';
import ProyectoContext from '../../context/proyectos/ProyectoContext';
import TareaContext from '../../context/tareas/TareaContext';

const FormTarea = () => {

    const proyectosContext = useContext(ProyectoContext);
    const { proyectoActual } = proyectosContext;

    const tareasConstext = useContext(TareaContext);
    const {
        errorTarea,
        tareaActual,
        handleErrorTarea,
        handleNuevaTarea,
        handleGetTareas,
        handleActualizarTarea
    } = tareasConstext;

    useEffect(() => {
        if (tareaActual !== null) {
            setTarea(tareaActual);
        } else {
            setTarea({
                nombre: ''
            });
        }
    }, [tareaActual]);

    const [tarea, setTarea] = useState({
        nombre: ''
    });

    const { nombre } = tarea;

    if (!proyectoActual) return null;

    const { _id } = proyectoActual;

    const handleChange = e => {
        setTarea({
            ...tarea,
            [e.target.name]: e.target.value
        })
    }

    const handleFormtarea = e => {
        e.preventDefault();

        if (nombre.trim() === '') {
            handleErrorTarea();
            return;
        }

        if (tareaActual === null) {
            tarea.proyecto = _id;            
            handleNuevaTarea(tarea);
        } else {
            handleActualizarTarea(tarea);
        }

        handleGetTareas(_id);

        setTarea({
            nombre: ''
        });
    }

    return (
        <div className="formulario">
            <form
                onSubmit={handleFormtarea}
            >
                <div className="contenedor-input">
                    <input
                        type="text"
                        className="input-text"
                        placeholder="Nombre Tarea..."
                        name="nombre"
                        value={nombre}
                        onChange={handleChange}
                    />
                </div>

                <div className="contenedor-input">
                    <input
                        type="submit"
                        className="btn btn-block btn-primario btn-submit"
                        value={(tareaActual) ? "Editar Tarea" : "Agregar Tarea"}
                    />
                </div>
            </form>
            {errorTarea ? (<p className="mensaje error">El nombre de la tarea es obligatorio</p>) : null}
        </div>
    );
}

export default FormTarea;