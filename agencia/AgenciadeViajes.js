


function personas(){

    let nombrePersona = document.getElementById("Nombre");
   

    let origenPersona = document.getElementById("Origen");
   

    let destinoPersona = document.getElementById("Destino");
   

    let personasPersona = document.getElementById("Personas");


    let datePersona = document.getElementById("Date");
    


    datos(nombrePersona.value, origenPersona.value, destinoPersona.value,
         personasPersona.value, datePersona.value);

  
console.log(infopersonas);
}

 function datos (nombre, origen, destino, personas, fecha){

    let nuevaPersona={
        
        nombre:nombre,
        origen:origen,
        destino: destino,
        personas:personas, 
        fecha:fecha,

    }

    infopersonas.push(nuevaPersona);

 }


let infopersonas=[];


function filtrar(){

  for(let i = 0;i<infopersonas.length;i++){
    
    if(infopersonas[i].destino.toUpperCase() == "CANARIAS" || infopersonas[i].destino.toUpperCase() == "MALLORCA" ||
    infopersonas[i].destino.toUpperCase() == "GALICIA"){

      console.log(infopersonas[i])
     }
  }
}

