


let infopersonas=[];

function addPerson(){

  let persona = {
    nombre:document.getElementById("Nombre").value,
    origen:document.getElementById("Origen").value,
    destino: document.getElementById("Destino").value,
    personas:document.getElementById("Personas").value, 
    fecha:document.getElementById("Date").value,
  }

  infopersonas.push(persona)
  console.log(infopersonas);
}



function filtrar(){

  let listafiltrados = "";

  for(let i = 0;i<infopersonas.length;i++){
    
    if(infopersonas[i].destino.toUpperCase() == "CANARIAS" || infopersonas[i].destino.toUpperCase() == "MALLORCA" ||
    infopersonas[i].destino.toUpperCase() == "GALICIA"){

            console.log(infopersonas[i]);

            listafiltrados += `<ul>
                <li>Nombre: ${infopersonas[i].nombre}</li>
                <li>Numero de personas: ${infopersonas[i].personas}</li>
                <li>Origen: ${infopersonas[i].origen}</li>
                <li>Destino: ${infopersonas[i].destino}</li>
                <li>Fecha: ${infopersonas[i].fecha}</li>
            </ul>`
     }
  }
   document.getElementById('filtrado').innerHTML = listafiltrados;
}




//function personas(){

  //     let nombrePersona = document.getElementById("Nombre");
     
  
  //     let origenPersona = document.getElementById("Origen");
     
  
  //     let destinoPersona = document.getElementById("Destino");
     
  
  //     let personasPersona = document.getElementById("Personas");
  
  
  //     let datePersona = document.getElementById("Date");
      
  
  
  //     datos(nombrePersona.value, origenPersona.value, destinoPersona.value,
  //          personasPersona.value, datePersona.value);
  
    
  // console.log(infopersonas);
  // }
  
  //  function datos (nombre, origen, destino, personas, fecha){
  
  //     let nuevaPersona={
          
  //         nombre:nombre,
  //         origen:origen,
  //         destino: destino,
  //         personas:personas, 
  //         fecha:fecha,
  
  //     }
  
  //     infopersonas.push(nuevaPersona);
  
  //  }