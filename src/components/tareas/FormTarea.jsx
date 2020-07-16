import React, { useContext } from 'react';
import ProyectoContext from '../../context/proyectos/ProyectoContext'

const FormTarea = () => {

    const proyectosContext = useContext(ProyectoContext);
    const { proyectoActual } = proyectosContext;

    if (!proyectoActual) return null;

    return (
        <div className="formulario">
            <form>
                <div className="contenedor-input">
                    <input
                        type="text"
                        className="input-text"
                        placeholder="Nombre Tarea..."
                        name="nombre"
                    />
                </div>

                <div className="contenedor-input">
                    <input
                        type="submit"
                        className="btn btn-block btn-primario btn-submit"
                        value="Agregar Tarea"
                    />
                </div>
            </form>
        </div>
    );
}

export default FormTarea;