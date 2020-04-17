//require starts
const fs = require('fs');
const colors = require('colors');
//require ends


let listadoPorHacer = [];

const guardarDB = () => {
    let data = JSON.stringify(listadoPorHacer);

    fs.writeFile('db/data.json', data, (err) => {
        if (err) {
            throw new Error('No se pudo grabar', err);
        } else {
            return 'Data guardada correctamente';
        }
    });
};

const cargarDB = () => {

    try {
        listadoPorHacer = require('../db/data.json');
    } catch (error) {
        listadoPorHacer = [];
    }

}

const crear = (descripcion) => {

    cargarDB();

    let porHacer = {
        descripcion,
        completado: false
    };

    listadoPorHacer.push(porHacer);

    guardarDB(listadoPorHacer);

    return porHacer;
};

const getListado = (listar) => {

    cargarDB();

    if (listar != undefined) {
        return listadoPorHacer.filter(tarea => String(tarea.completado) === String(listar));
    } else {
        return listadoPorHacer;
    }
};

const actualizarTarea = (descripcion, completado) => {
    cargarDB();

    if (!listadoPorHacer.find(tarea => tarea.descripcion === descripcion)) {
        throw new Error(`No existe la tarea con descripcion: ${descripcion}`);
    } else {

        let tareaActualizada;

        for (let tarea of listadoPorHacer) {
            if (tarea.descripcion === descripcion) {
                tarea.completado = completado;
                tareaActualizada = tarea;
                break;
            }
        }

        guardarDB();

        return tareaActualizada;
    }
};

const borrarTarea = (descripcion) => {
    cargarDB();

    let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion);

    if (index === -1) {
        throw new Error(`No existe la tarea con descripcion: ${descripcion}`);
    } else {

        tareaBorrada = listadoPorHacer[index];

        listadoPorHacer.splice(index, 1);

        guardarDB();

        return tareaBorrada;
    }
};

module.exports = {
    crear,
    getListado,
    actualizarTarea,
    borrarTarea
};