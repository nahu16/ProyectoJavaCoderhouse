

let V = "Velas Aromaticas" 
let I = "Inciesos" 
let P = "Pinos" 
let H = "Hornitos"



function asesorar(){
    let usuario = prompt("Ingrese su nombre").toUpperCase()
    alert(`Bienvenido ${usuario} a Almendra Velas`)
    let consulta = confirm("Estas buscando algo en especial?")

    if(consulta == true){
        let tipoVela = prompt(`Que tipo de vela te gustaría? A - ${V} B - ${I} C - ${P} D - ${H} `).toUpperCase()

        switch(tipoVela){

            case "A":
                alert(`Tenemos tus ${V} `)
                let A = prompt("Tenemos de las siguientes formas, cual te gustaría? 1 - Clasicas 2 - Vasos")
                    if (A==1){alert (`Pronto nos pondremos en contacto para hacer la entrega de tu ${V} Clasicas`)
                    }else if(A==2){alert (`Pronto nos pondremos en contacto para hacer la entrega de tu ${V} Vaso`)
                    }                    
                break
            case "B":
                alert(`Tenemos tus Inciensos`)
                let B = prompt("Tenemos de las siguientes formas, cual te gustaría? 1 - Clasicos 2 - Naturales")
                    if (B==1){alert (`Pronto nos pondremos en contacto para hacer la entrega de tu ${I} Clasicos`)
                    }else if (B==2){alert (`Pronto nos pondremos en contacto para hacer la entrega de tu ${I} Naturales`)}
            break
            case "C":
                alert(`Tenemos tus Pinos`)
                let C = prompt("Tenemos de las siguientes formas, cual te gustaría? 1 - Clasicos 2 - Cafe")
                    if (C==1){alert (`Pronto nos pondremos en contacto para hacer la entrega de tu ${P} Clasicos`)
                    }else if (C==2) {alert (`Pronto nos pondremos en contacto para hacer la entrega de tu ${P} Cafe`)}
            break
            case "D":
                alert(`Tenemos tus Hornitos`)   
                let D = prompt("Tenemos de las siguientes formas, cual te gustaría? 1 - Piedra 2 - Ceramica")
                    if (D==1){alert (`Pronto nos pondremos en contacto para hacer la entrega de tu ${H} de Piedra`)
                    }else if (D==2){alert (`Pronto nos pondremos en contacto para hacer la entrega de tu ${H} de Ceramica`)}
            break           
            default:
                alert("Lamentablemente no tenemos esa opción de velas \nVuelva pronto")
        }
    }
}

asesorar()