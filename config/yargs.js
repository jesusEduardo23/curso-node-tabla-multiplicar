const { number, boolean, describe } = require('yargs');
const argv = require('yargs')
             .option('b',{ 
                 alias:'base',
                 type: number,
                 demandOption:true,
                 describe:'es la base de la tabla de multiplicar'



            })
            .option('l',{ 
                alias:'listar',
                type: boolean,
                demandOption:true,
                default:true,
                describe:'muestra en pantalla la tabla de multiplicar'
            })
            .option('h',{ 
                alias:'hasta',
                type: number,
                demandOption:true,
                describe:'rango de la tabla de multiplicar'

           })
            .check((argv,option)=>{

                if(isNaN(argv.b)){

                    throw'la base debe ser un número';
                }else{
                    return true;
                }
             })
             .argv;

module.exports= argv;             