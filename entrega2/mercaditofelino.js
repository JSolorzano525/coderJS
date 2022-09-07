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

const producto3 = {
  nombre: "hierba gatera x 6 plantines",
  precio: 1500,
};

const producto4 = {
  nombre: "ratita de juguete",
  precio: 1600,
};

const producto5 = {
  nombre: "comedero elevado para gatos",
  precio: 1600,
};

const productos = [producto1, producto2, producto3, producto4];
console.log(productos);

productos.push(producto5);
console.log(productos);

console.log(productos.indexOf(producto4));

console.log(productos.includes(producto3));

let compra = prompt("¿Estas seguro de tu compra?").toLowerCase().trim();
let total = 0;

function getProductoByNombre(nombreProducto) {
  let producto = { nombre: "" };
  for (p in productos) {
    if (productos[p].nombre === nombreProducto) {
      producto = productos[p];
    }
  }
  return producto;
}

function getCosto(nombreProducto) {
  const producto = getProductoByNombre(nombreProducto);
  let aSumar;
  switch (producto.nombre) {
    case "buzo para gatos de algodon":
      aSumar = producto.precio;
      break;
    case "cama hamaca para gatos":
      aSumar = producto.precio;
      break;
    case "hierba gatera x 6 plantines":
      aSumar = producto.precio;
      break;
    case "ratita de juguete":
      aSumar = producto.precio;
      break;
    case "comedero elevado para gatos":
      aSumar = producto.precio;
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
