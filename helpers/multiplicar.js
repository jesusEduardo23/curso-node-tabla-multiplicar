const { Module } = require("module");
const fs = require('fs');
const color = require('colors');

const crearArchivo = async(base=5,listar=false,hasta)=>{

   
  
  
  let salida='';
  let consola='';
  for(let i=1; i<=hasta; i++){
      //const num =5*i; 
     salida+=`${base} X ${i}= ${base*i}\n`;
     consola+=`${base} X ${i}= ${base*i}\n`.green;
  }
  if(listar){
  console.log('===================================');
  console.log(`TABLA DE MULTIPLICAR DEL ${base}`.red);
  console.log('===================================');
  console.log(consola);
  }
  try {
    fs.writeFileSync(`./salida/tabla-${base}.txt`,salida);

    
      return(`archivo tabla-${base}.txt creado.....`); 

  } catch (err) {
      throw err;

  }




}

module.exports={

crearArchivo

}