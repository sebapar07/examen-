const carro = new Carrito();
const carrito = document.getElementById('carrito');
const productos = document.getElementById('lista-productos');
const listaProductos = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.getElementById('vaciar-carrito');
const procesarPedidoBtn = document.getElementById('procesar-pedido');

const buscar = document.getElementById('btnBuscar');
const txtBuscar = document.getElementById('txtBuscar');


cargarEventos();

function cargarEventos(){


    productos.addEventListener('click', (e)=>{carro.comprarProducto(e)});

 
    carrito.addEventListener('click', (e)=>{carro.eliminarProducto(e)});

    
    vaciarCarritoBtn.addEventListener('click', (e)=>{carro.vaciarCarrito(e)});

  
    document.addEventListener('DOMContentLoaded', carro.leerLocalStorage());

    /* Filtro */
    buscar.addEventListener("click", carro.filtrar);
    txtBuscar.addEventListener("keyup", ({ keyCode }) =>
    {
        if (keyCode == 13)
        {
            carro.filtrar();
        }
    });

    // procesarPedidoBtn.addEventListener('click', (e)=>{carro.procesarPedido(e)});
}