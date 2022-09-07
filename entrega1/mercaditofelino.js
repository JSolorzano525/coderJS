/*let compra = prompt("¿Estas seguro de tu compra?").toLowerCase().trim();
let total = 0;
const costoBuzo = 2000;
const costoCama = 6000;
const costoHierba = 1500;
const costoRatita = 1600;
const costoComedero = 1600;

function getCosto(nombreProducto) {
  let aSumar;
  switch (nombreProducto) {
    case "buzo para gatos de algodon":
      aSumar = costoBuzo;
      break;
    case "cama hamaca para gatos":
      aSumar = costoCama;
      break;
    case "hierba gatera x 6 plantines":
      aSumar = costoHierba;
      break;
    case "ratita de juguete":
      aSumar = costoRatita;
      break;
    case "comedero elevado para gatos":
      aSumar = costoComedero;
      break;
    default:
      aSumar = 0;
  }

  return aSumar;
}

function sumar(a, b) {
  const suma = a + b;
  return suma;
}

while (compra == "si") {
  let nombreProducto = prompt(
    "Ingresa un producto que hayas comprado tal cual su nombre aparece en la lista"
  )
    .toLowerCase()
    .trim();

  console.log("nombreProducto ==>", nombreProducto);

  const costoProducto = getCosto(nombreProducto);

  console.log("costoProducto ==> ", costoProducto);

  total = sumar(total, costoProducto);

  console.log("total parcial ==> ", total);
  compra = prompt("¿Tienes otro producto en tu compra?").toLowerCase().trim();
}

// calcular el iva
const iva = total * 0.21;
// sumarle a total el iva
total = sumar(total, iva);

console.log("total ==> ", total);

alert("el total es " + total);
*/
class Producto {
  constructor(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
  }
}

const producto1 = new Producto("buzo para gatos de algodon", 2000);

const producto2 = {
  nombre: "cama hamaca para gatos",
  precio: 6000,
};

/* {
  nombre="hierba gatera x 6 plantines",
  precio = 1500;
}
{
  nombre = "ratita de juguete",
  precio = 1600;
}
{
   nombre = "comedero elevado para gatos"
   precio = 1600;

} */

console.log(producto1.nombre);
console.log(producto2.nombre);
