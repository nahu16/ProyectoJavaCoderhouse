const Producto = function(nombre,forma,descripcion,precio){
    this.nombre = nombre
    this.forma = forma
    this.descripcion = descripcion
    this.precio = parseFloat(precio)
}

let producto1 = new Producto ("Velas Aromaticas","clasicas","Nuestras velas aromaticas clasicas crean un ambiente romántico y acogedor para disfrutar momentos especiales. Añaden un toque de amor y calidez a cualquier espacio.",100)
let producto2 = new Producto ("Velas Aromaticas","vasos","Nuestras velas aromáticas dentro de vasos ofrecen una experiencia de lujo y comodidad. Complementan cualquier espacio, proporcionando una iluminación suave.",150)
let producto3 = new Producto ("Inciensos","Clasicos","Los inciensos clasicos son una elección atemporal para crear un ambiente sereno y armonioso. Con fragancias tradicionales que invita a la calma y la contemplación.",50)
let producto4 = new Producto ("Inciensos","Naturales","Son una opción popular para aquellos que buscan experiencias aromáticas y terapéuticas auténticas. Con una combustion lenta, liberan su fragancia suavemente",60) 
let producto5 = new Producto ("Pinos","Clasios","Nuestros pinos clasicos capturan la esencia fresca y reconfortante de los bosques. Ofrecen una experiencia aromática que revitaliza y relaja.",10)
let producto6 = new Producto ("Pinos","Cafe","Son una deliciosa experiencia para tus sentidos. Con su aroma rico y estimulante, transforman cualquier espacio en un acogedor café.",20) 
let producto7 = new Producto ("Hornitos","Piedra","Este quemador de aceites aromaticos tiene unas tonalidades únicas al tratarse de piedra natural. No hay dos iguales.",250)
let producto8 = new Producto ("Hornitos","Ceramica","Con su diseño artesanal y funcionalidad, estos hornitos calientan suavemente las esencias, creando una atmósfera acogedora y relajante.",300) 

const lista = [producto1,producto2,producto3,producto4,producto5,producto6,producto7,producto8]

function mitadDePrecio(lista, productoforma) {
    for (let i = 0; i < lista.length; i++) {
        if (lista[i].forma === productoforma) {
        return lista[i].precio / 2;
        }
    }
}
const Oferta = mitadDePrecio(lista, "Ceramica ");

function asesorar(){
let usuario = prompt("Ingrese su nombre").toUpperCase().trim()
if(usuario === "" || usuario===Number){
    alert("Ingrese un nombre valido" )
return    
}
else{
    alert(`Bienvenido ${usuario} a Almendra Velas`)}

let consulta = confirm(`Estas buscando alguna vela en especial?`)

if(consulta){
    function filtrarProductos(){
        let tipoVela = prompt(`Que tipo de vela te gustaría?`).toUpperCase().trim()
        let resultado = lista.filter((producto)=>producto.nombre.toUpperCase().includes(tipoVela))
        if(resultado.length >0){
        resultado.forEach((producto)=> {
            alert(`Contamos con: \nNombre: ${producto.nombre}  \nForma: ${producto.forma}`)
            })
            let formas = prompt (`Te interesa alguna de las formas anteriores? \nCual?`).toUpperCase().trim()
            let resultado2 = lista.find((producto)=>producto.forma.toUpperCase()===(formas))
            if(resultado2.length>0){ 
            resultado2.forEach((producto)=>{
                alert(`${producto.descripcion} \na un precio de:$ ${producto.precio}`)})
                }else{`Lo sentimos,no contamos con velas de esa forma. \nPodemos ofrecerte nuestros ${producto.nombre}  ${producto.forma} a un precio oferta de ${Oferta}`}
        }else{ 
        alert(`No contamos con el producto solicitado, podemos ofrecerte Velas, Inciensos, Pinos o Hornitos `)
        }
    }    
    filtrarProductos()
} 
}
asesorar()

