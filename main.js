
const Producto = function(nombre,forma,precio,stock,imagen){
    this.nombre = nombre
    this.forma = forma
    this.precio = parseFloat(precio)
    this.stock = parseInt(stock)
    this.imagen = imagen
}

let producto1 = new Producto ("Velas Aromaticas","clasicas",100,50,"../imag/estilo8.jpeg" )
let producto2 = new Producto ("Velas Aromaticas","vasos",150,2,"../imag/estilo6.webp")
let producto3 = new Producto ("Inciensos","Clasicos",50,0, ".../imag/images.jpg")
let producto4 = new Producto ("Inciensos","Naturales",60,6,"imag/WhatsApp Image 2024-03-04 at 18.29.26.jpeg") 
let producto5 = new Producto ("Pinos","Clasios",10,8,"../imag/WhatsApp Image 2024-03-04 at 18.29.23.jpeg")
let producto6 = new Producto ("Pinos","Cafe",20,5,"../imag/WhatsApp Image 2024-03-04 at 18.29.22.jpeg") 
let producto7 = new Producto ("Hornitos","Piedra",250,100,"../imag/968d6ba63ded498e01aaf41f730d534b.jpg")
let producto8 = new Producto ("Hornitos","Ceramica",300,1,"../imag/88cafd8d8ee52127a732c021e57e492d.jpg") 

const lista = [producto1,producto2,producto3,producto4,producto5,producto6,producto7,producto8]

const CarritoCompras = [];

function agregaralcarrito(nombre, precio) {
const prod = {
    nombre: nombre,
    precio: precio
};
    
CarritoCompras.push(prod);
console.log("Producto agregado al carrito:", CarritoCompras)
}

function Aromaticas(){
    const main = document.querySelector("main");

    const aromaticas="Velas Aromaticas".toUpperCase()
    const VelAromas = lista.filter((velas) => velas.nombre.toUpperCase().includes(aromaticas));

    const container = document.createElement("div");

    if (VelAromas.length > 0) { 
        VelAromas.forEach((producto) => {
            const card = document.createElement("div");
            card.classList.add("card");

            const imagen = document.createElement("img");
            imagen.src = producto.imagen;
            imagen.classList.add("card_img");
            card.appendChild(imagen);

            const nombre = document.createElement("h3");
            nombre.textContent = producto.nombre;
            nombre.classList.add("card_title");
            card.appendChild(nombre);

            const forma = document.createElement("p");
            forma.innerHTML = `Forma: ${producto.forma}`;
            forma.classList.add("card_desc");
            card.appendChild(forma);

            const precio = document.createElement("p");
            precio.innerHTML = `Precio: $ ${producto.precio}`;
            precio.classList.add("card_desc");
            card.appendChild(precio);

            const stock = document.createElement("p");
            stock.innerHTML = `Stock: ${producto.stock} unidades`;
            stock.classList.add("card_desc");
            card.appendChild(stock);

            const carrito = document.createElement("button");
            carrito.innerHTML = `agregar a carrito`;
            carrito.classList.add("comprar-btn")
            carrito.addEventListener("click", ()=>agregaralcarrito(producto.nombre, producto.precio));
            card.appendChild(carrito);
            

            container.appendChild(card);
        });

        main.appendChild(container)
    } else {
        alert("No contamos con el producto.");
    }
}

function Hornitos(){
    const main = document.querySelector("main");

    const Hornos="Hornitos".toUpperCase()
    const HorAromas = lista.filter((Horn) => Horn.nombre.toUpperCase().includes(Hornos));

    const container = document.createElement("div");

    if (HorAromas.length > 0) { 
        HorAromas.forEach((producto) => {
            const card = document.createElement("div");
            card.classList.add("card");

            const imagen = document.createElement("img");
            imagen.src = producto.imagen;
            imagen.classList.add("card_img");
            card.appendChild(imagen);

            const nombre = document.createElement("h3");
            nombre.textContent = producto.nombre;
            nombre.classList.add("card_title");
            card.appendChild(nombre);

            const forma = document.createElement("p");
            forma.innerHTML = `Forma: ${producto.forma}`;
            forma.classList.add("card_desc");
            card.appendChild(forma);

            const precio = document.createElement("p");
            precio.innerHTML = `Precio: $ ${producto.precio}`;
            precio.classList.add("card_desc");
            card.appendChild(precio);

            const stock = document.createElement("p");
            stock.innerHTML = `Stock: ${producto.stock} unidades`;
            stock.classList.add("card_desc");
            card.appendChild(stock);

            const carrito = document.createElement("button");
            carrito.innerHTML = `agregar a carrito`;
            carrito.id = "comprando"
            carrito.addEventListener("click", agregaralcarrito);
            card.appendChild(carrito);
            

            container.appendChild(card);
        });

        main.appendChild(container)
    } else {
        alert("No contamos con el producto.");
    }
}

function Pinos(){
    const main = document.querySelector("main");

    const Pinitos="Pinos".toUpperCase()
    const PinosAromas = lista.filter((Pin) => Pin.nombre.toUpperCase().includes(Pinitos));

    const container = document.createElement("div");

    if (PinosAromas.length > 0) { 
        PinosAromas.forEach((producto) => {
            const card = document.createElement("div");
            card.classList.add("card");

            const imagen = document.createElement("img");
            imagen.src = producto.imagen;
            imagen.classList.add("card_img");
            card.appendChild(imagen);

            const nombre = document.createElement("h3");
            nombre.textContent = producto.nombre;
            nombre.classList.add("card_title");
            card.appendChild(nombre);

            const forma = document.createElement("p");
            forma.innerHTML = `Forma: ${producto.forma}`;
            forma.classList.add("card_desc");
            card.appendChild(forma);

            const precio = document.createElement("p");
            precio.innerHTML = `Precio: $ ${producto.precio}`;
            precio.classList.add("card_desc");
            card.appendChild(precio);

            const stock = document.createElement("p");
            stock.innerHTML = `Stock: ${producto.stock} unidades`;
            stock.classList.add("card_desc");
            card.appendChild(stock);

            const carrito = document.createElement("button");
            carrito.innerHTML = `agregar a carrito`;
            carrito.id = "comprando"
            carrito.addEventListener("click", agregaralcarrito);
            card.appendChild(carrito);
            

            container.appendChild(card);
        });

        main.appendChild(container)
    } else {
        alert("No contamos con el producto.");
    }
}

function Inciensos(){
    const main = document.querySelector("main");

    const Incienso="Inciensos".toUpperCase()
    const IncAromas = lista.filter((Inc) => Inc.nombre.toUpperCase().includes(Incienso));

    const container = document.createElement("div");

    if (IncAromas.length > 0) { 
        IncAromas.forEach((producto) => {
            const card = document.createElement("div");
            card.classList.add("card");

            const imagen = document.createElement("img");
            imagen.src = producto.imagen;
            imagen.classList.add("card_img");
            card.appendChild(imagen);

            const nombre = document.createElement("h3");
            nombre.textContent = producto.nombre;
            nombre.classList.add("card_title");
            card.appendChild(nombre);

            const forma = document.createElement("p");
            forma.innerHTML = `Forma: ${producto.forma}`;
            forma.classList.add("card_desc");
            card.appendChild(forma);

            const precio = document.createElement("p");
            precio.innerHTML = `Precio: $ ${producto.precio}`;
            precio.classList.add("card_desc");
            card.appendChild(precio);

            const stock = document.createElement("p");
            stock.innerHTML = `Stock: ${producto.stock} unidades`;
            stock.classList.add("card_desc");
            card.appendChild(stock);

            const carrito = document.createElement("button");
            carrito.innerHTML = `agregar a carrito`;
            carrito.id = "comprando"
            carrito.addEventListener("click", agregaralcarrito);
            card.appendChild(carrito);
            

            container.appendChild(card);
        });

        main.appendChild(container)
    } else {
        alert("No contamos con el producto.");
    }
}

function filtrarProductos() {
    const main = document.querySelector("main");
    const input = document.getElementById("filtrarProducto").value;

    const tipoVela = input.trim().toUpperCase();
    const resultado = lista.filter((producto) => producto.nombre.toUpperCase().includes(tipoVela));
    
    const container = document.createElement("div");
    container.innerHTML = '';

    if (resultado.length > 0) {
        resultado.forEach((producto) => {
            const card = document.createElement("div");
            card.classList.add("card");

            const imagen = document.createElement("img");
            imagen.src = producto.imagen;
            imagen.classList.add("card_img");
            card.appendChild(imagen);

            const nombre = document.createElement("h3");
            nombre.textContent = producto.nombre;
            nombre.classList.add("card_title");
            card.appendChild(nombre);

            const forma = document.createElement("p");
            forma.innerHTML = `Forma: ${producto.forma}`;
            forma.classList.add("card_desc");
            card.appendChild(forma);

            const precio = document.createElement("p");
            precio.innerHTML = `Precio: $ ${producto.precio}`;
            precio.classList.add("card_desc");
            card.appendChild(precio);

            const stock = document.createElement("p");
            stock.innerHTML = `Stock: ${producto.stock} unidades`;
            stock.classList.add("card_desc");
            card.appendChild(stock);

            const carrito = document.createElement("button");
            carrito.innerHTML = `agregar a carrito`;
            carrito.classList.add("comprar-btn")
            carrito.addEventListener("click", ()=>agregaralcarrito(producto.nombre, producto.precio));
            card.appendChild(carrito);
            

            container.appendChild(card);
        });

        main.appendChild(container)
    } else {
        alert("No contamos con el producto.");
    }
}

const sugerenciasCliente=[]

function sugerirProd(){

    const main = document.querySelector("main")
    const Ingreso = document.createElement("form")
    Ingreso.classList.add("form")
    Ingreso.innerHTML=`
        
        <label for= "ingresoNombre"> Ingresa un nombre para el artículo: </label>
        <input id="NuevoNombre" type="text" required>  
        
        <label for= "ingresoForma"> Ingresa las formas del artículo: </label>
        <input id="NuevoForma" type="text" required>  
        
        <label for= "ingresoDesc"> Ingresa una descripción del artículo: </label>
        <input id="NuevaDesc" type="text" required>  
        `
        const enviar = document.createElement("button")
        enviar.classList.add("button")
        enviar.innerHTML='Enviar'
        enviar.id="pedidoCliente"
        Ingreso.appendChild(enviar)
        
        const delet = document.createElement("button")
        delet.classList.add("button")
        delet.innerHTML='Borrar'
        Ingreso.appendChild(delet) 
        main.appendChild(Ingreso)  

        Ingreso.addEventListener("submit", function(event){
            event.preventDefault()
    
            const NuevoNombre = document.getElementById("NuevoNombre").value.trim()
            const NuevoForma = document.getElementById("NuevoForma").value.trim() 
            const NuevaDesc = document.getElementById("NuevaDesc").value.trim()
    
            const Nproducto = {
                nombre:NuevoNombre,
                forma:NuevoForma,
                descripcion:NuevaDesc}
    
            sugerenciasCliente.push(Nproducto)
    
            localStorage.setItem("Sugerencias", JSON.stringify(sugerenciasCliente))

            console.table(sugerenciasCliente)

    })
    
}


function verCarrito() {
    const carritoContainer = document.getElementById("carritoContainer");
  

    if (CarritoCompras.length > 0) {
        const card = document.createElement("div");
        card.classList.add("card");

        let total = 0;

        CarritoCompras.forEach((producto) => {
            const productoDetalle = document.createElement("p");
            productoDetalle.innerHTML = `${producto.nombre} - $${producto.precio}`;
            card.appendChild(productoDetalle);
            total += producto.precio;
        });

        const totalCompra = document.createElement("p");
        totalCompra.innerHTML = `Total: $${total}`;
        card.appendChild(totalCompra);

        carritoContainer.appendChild(card);
    } else {
        carritoContainer.innerHTML = 'El carrito está vacío.';
    }
}




//botonera

let btnGuardar = document.getElementById("buscar")
btnGuardar.addEventListener("click", filtrarProductos);


let btnCrear = document.getElementById("formulario")
btnCrear.addEventListener("click", sugerirProd);

let btnAromaticas = document.getElementById("Aromaticas")
btnAromaticas.addEventListener("click", Aromaticas);

let btnHornitos = document.getElementById("Hornos")
btnHornitos.addEventListener("click", Hornitos);

let btnPinitos = document.getElementById("Pinos")
btnPinitos.addEventListener("click", Pinos);

let btnInciensos = document.getElementById("Inciensos")
btnInciensos.addEventListener("click", Inciensos);

let btnCarrito = document.getElementById("VerCarrito");
btnCarrito.addEventListener("click", verCarrito);



