

// Sweetalert
let btnVerPromos = document.getElementById("btnVerPromos");

btnVerPromos.addEventListener ("click", function(){
    Swal.fire({
        title: 'No hay promos disponibles',
        text: 'Se habilitarán el mes que viene',
        icon: 'info',
        confirmButtonText: 'cerrar',
 
      })
})

///////////////////////////////////////////////////// FUNCIONES

let carrito = [];

function agregarProducto(evento){
    console.log("PRODUCTO AGREGADO:", evento.target);

    let hijo = evento.target;
    let padre = hijo.parentNode;
    let abuelo = padre.parentNode;

    let nombreProducto = padre.querySelector("h5").textContent;
    let precioProducto = padre.querySelector("p").textContent;
    let imgProducto = abuelo.querySelector("img").src;


    let producto = {
        nombre : nombreProducto,
        precio : precioProducto,
        img : imgProducto,
        cantidad :parseInt(1),

    };

    console.log ("Largo del carrito",carrito.length+1);

    console.log (producto);

    carrito.push(producto);

    console.log (carrito);

    sessionStorage.setItem("Producto agregado por usuario", producto.nombre);


    mostrarCarrito();

}

function mostrarCarrito(){

    let tabla = document.getElementById("cartasProductos");
    tabla.innerHTML="";
/////////////////////////////////////////////////////////////////////////////////

for (let producto of carrito){

  
        let fila = document.createElement("tr");

        fila.innerHTML = `
                        <div class="card mb-3" style="max-width: 540px;">
                        <div class="row g-0">
                            <div class="col-md-4">
                                <img src="${producto.img}" class="img-fluid rounded-start imgProd" alt="...">
                            </div>
                            <div class="col-md-8">
                                <div class="card-body">
                                <h4>${producto.cantidad}</h4>
                                    <h5 class="card-title">${producto.nombre}</h5>
                                    <p class="card-text"><small class="text-body-secondary">${producto.precio}</small></p>
                                    <button type="button" class="btn borrar">X</button>
                                </div>
                            </div>
                        </div>
                    </div>      `;    
        tabla.append(fila);
}




/////////////////////////////////////////////////////////////////////////////////


let borrar = document.querySelectorAll(".borrar");

for (let btn of borrar){
    btn.addEventListener("click", borrarProducto);
}

}

//////////////BORRAR PRODUCTO////////////////////////////////

function borrarProducto(evento){
    console.log("Prod eliminado", evento.target.parentNode.parentNode.parentNode);
    let abuelo = evento.target.parentNode.parentNode.parentNode.parentNode;
    console.log("lo que trae es" , abuelo);

    abuelo.remove();

    let productoEliminar = abuelo.querySelector("h5").textContent;

    console.log("texto del prod a eliminar", productoEliminar);

    function sacarDeCarrito (producto){
        return producto.nombre != productoEliminar;
    }
    let resultadoEliminado = carrito.filter(sacarDeCarrito);
    carrito = resultadoEliminado;
    console.log (carrito);

}

let btnVerCarrito = document.getElementById("btnVerCarrito");

btnVerCarrito.addEventListener("click", function(){
    let pedidos = document.getElementById("cartasProductos");
    
    if(pedidos.style.display != "none"){
        pedidos.style.display = "none";
    }
    else{
        pedidos.style.display = "block";
    }
})

/////////////////////////////////////////////////////////////////////////

let btnAgregar = document.querySelectorAll(".btnAgregar");

console.log("Estos son todos los botones que tienen esta clase",btnAgregar);

for (let btn of btnAgregar){
    btn.addEventListener("click", agregarProducto);
    
}