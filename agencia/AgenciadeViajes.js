


function personas(){

    let nombrePersona = document.getElementById("Nombre");
 console.log(nombrePersona.value);
datos(nombrePersona.value, null, null, null, null)

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



//  document.querySelector('#btnFormulario').addEventListener('click', ){

//  }

