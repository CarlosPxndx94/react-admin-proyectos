import React, { useContext, useEffect } from 'react';
import Sidebar from '../layout/Siderbar';
import Barra from '../layout/Barra';
import FormTarea from '../tareas/FormTarea';
import ListadoTareas from '../tareas/ListadoTareas';
import AuthContext from '../../context/autenticacion/AuthContext';

const Proyectos = () => {

    //Context Auth
    const authContext = useContext(AuthContext);
    const { handleUserAutenticado } = authContext;

    useEffect(() => {
        handleUserAutenticado();
    }, []);

    return (
        <div className="contenedor-app">
            <Sidebar />

            <div className="seccion-principal">
                <Barra />
                <main>

                    <FormTarea />

                    <div className="contenedor-tareas">
                        <ListadoTareas />
                    </div>
                </main>
            </div>
        </div>
    );
}

export default Proyectos;