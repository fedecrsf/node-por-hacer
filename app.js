//require starts
const argv = require('./config/yargs').argv;
const porHacer = require('./por-hacer/por-hacer');
//const colors = require('colors');
//require ends


let comando = argv._[0];

switch (comando) {
    case 'crear':
        {
            let tarea = porHacer.crear(argv.descripcion);
            console.log('\n\n\n\n');
            console.log(tarea);
            console.log('\n\n\n\n');
            break;
        }
    case 'listar':
        {

            let listado = porHacer.getListado(argv.listar);

            console.log('\n\n\n\n');
            for (let tarea of listado) {

                let estado = Boolean(tarea.completado) ? 'completado' : 'incompleto';

                console.log('========Por Hacer========'.green);
                console.log('Tarea: ', tarea.descripcion);
                console.log('Estado: ', estado);
                console.log('========================='.green);
            }
            console.log('\n\n\n\n');

            break;
        }
    case 'actualizar':
        {
            let tareaActualizada = porHacer.actualizarTarea(argv.descripcion, Boolean(argv.completado));

            let estado = Boolean(tareaActualizada.completado) ? 'completado' : 'incompleto';

            console.log('\n\n\n\n');
            console.log('========Tarea Actualizada========'.green);
            console.log('Tarea: ', tareaActualizada.descripcion);
            console.log('Estado: ', estado);
            console.log('================================='.green);
            console.log('\n\n\n\n');
            break;
        }
    case 'borrar':
        {
            let tareaBorrada = porHacer.borrarTarea(argv.descripcion);

            let estado = Boolean(tareaBorrada.completado) ? 'completado' : 'incompleto';

            console.log('\n\n\n\n');
            console.log('==========Tarea Borrada=========='.green);
            console.log('Tarea: ', tareaBorrada.descripcion);
            console.log('Estado: ', estado);
            console.log('================================='.green);
            console.log('\n\n\n\n');
            break;
        }
    default:
        console.log(`${comando} no es un comando válido`.red);
}