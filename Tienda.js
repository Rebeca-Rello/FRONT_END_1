

let pantalon1 ={nombre:"pantalon1", precio: 20};
let vestido1 ={nombre:"vestido1", precio: 18};
let falda1 ={nombre:"falda1", precio: 12};
let cardigan1 ={nombre:"cardigan1", precio: 22};
let pantalon2 ={nombre:"pantalon2", precio: 20};
let vestido2 ={nombre:"vestido2", precio: 18};
let falda2 ={nombre:"falda2", precio: 12};
let cardigan2 ={nombre:"cardigan2", precio: 22};



let carrito = [];


jQuery(() =>{

$("#button1").on('click', ()=>{
    carrito.push(pantalon1);
    console.log(pantalon1);

});
$("#button2").on('click', ()=>{
    carrito.push(vestido1);
    console.log(vestido1);

});

$("#button3").on('click', ()=>{
    carrito.push(falda1);
    console.log(falda1)

});

$("#button4").on('click', ()=>{
    carrito.push(cardigan1);

});

$("#button5").on('click', ()=>{
    carrito.push(pantalon2);

});
$("#button6").on('click', ()=>{
    carrito.push(vestido2);

});

$("#button7").on('click', ()=>{
    carrito.push(falda2);

});

$("#button8").on('click', ()=>{
    carrito.push(cardigan2);

});



$("#buttoncart").on('click', ()=>{

    let suma=0;
    for(let i=0;i<carrito.length;i++){

        $("#modal-body").append(`<ul>
                                    <li>${carrito[i].nombre} - ${carrito[i].precio}</li>
                                    
                                 <ul>`)

        suma += carrito[i].precio 
    }

    $("#modal-body").append(`<p>Total:${suma}€</p>`)

    console.log(suma);
})

})


