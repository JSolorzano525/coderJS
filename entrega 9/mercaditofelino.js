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

const productos = [producto1, producto2, producto3, producto4, producto5];

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

function getTotal() {
  let total = 0;
  const SubtotalBuzo =
    getCantidad("cant-buzo") * getCosto("buzo para gatos de algodon");
  total = sumar(total, SubtotalBuzo);
  const SubtotalCama =
    getCantidad("cant-cama") * getCosto("cama hamaca para gatos");
  total = sumar(total, SubtotalCama);
  const SubtotalHierba = getCantidad("cant-hierba") * getCosto("hierba gatera");
  total = sumar(total, SubtotalBuzo);
  const SubtotalRatita =
    getCantidad("cant-ratita") * getCosto("ratita de juguete");
  total = sumar(total, SubtotalRatita);
  const SubtotalComedero =
    getCantidad("cant-comedero") * getCosto("comedero elevado para gatos");
  total = sumar(total, SubtotalComedero);

  // calcular el iva
  const iva = total * 0.21;
  // sumarle a total el iva
  total = sumar(total, iva);

  alert("El total es " + total + "(iva incluido)");
}

function getCantidad(id) {
  const cantidad = document.getElementById(id).value;
  return cantidad;
}

// ==============================================================================================================================

const comprar = document.querySelector("#comprar");
comprar.onclick = () => getTotal();
