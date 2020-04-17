const descripcion = {
    demand: true,
    alias: 'd'
};
const completado = {
    default: true,
    alias: 'c'
};
const listar = {
    alias: 'l'
};

const argv = require('yargs')
    .command('crear', 'Crear un elemento por hacer', {
        descripcion
    })
    .command('borrar', 'Borrar un elemento por hacer', {
        descripcion
    })
    .command('actualizar', 'Actualizar un elemento por hacer', {
        descripcion,
        completado
    })
    .command('listar', 'Listar todo los elementos por hacer', {
        listar
    })
    .help()
    .argv;

module.exports = {
    argv
}