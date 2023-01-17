


const{crearArchivo}= require('./helpers/multiplicar');
 const argv = require('./config/yargs')

console.clear();


console.log('base: ',argv.b,argv.h);

 crearArchivo(argv.b,argv.l,argv.h)
.then(nombrearchivo=>console.log(nombrearchivo))
.catch(err=>console.log(err))


//sin callback

// fs.writeFileSync('tabla-5sic.txt',salida);

    
//     console.log('archivo tabla-5.txt creado.....');

