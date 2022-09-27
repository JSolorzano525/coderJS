// DECLARACION DE CONSTANTES - DATOS INICIALES

class Producto {
  constructor(id, nombre, imagen, precio) {
    this.id = id;
    this.nombre = nombre;
    this.imagen = imagen;
    this.precio = precio;
  }
}

const producto1 = new Producto(
  "buzo",
  "buzo para gatos de algodon",
  "img_catking/prenda1.jpg",
  2000
);

const producto2 = {
  id: "cama",
  nombre: "cama hamaca para gatos",
  imagen: "img_catking/cama_hamaca.jpg",
  precio: 6000,
};

const producto3 = {
  id: "hierba",
  nombre: "hierba gatera x 6 plantines",
  imagen: "img_catking/hierba-gatera.jpg",
  precio: 1500,
};

const producto4 = {
  id: "juguete",
  nombre: "ratita de juguete",
  imagen: "img_catking/ratita-juguete.jpg",
  precio: 1600,
};

const producto5 = {
  id: "comedero",
  nombre: "comedero elevado para gatos",
  imagen: "img_catking/comedero-elevado.jpg",
  precio: 1600,
};

const productos = [producto1, producto2, producto3, producto4, producto5];

// ==============================================================================================================================
// DECLARACION DE FUNCIONES

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
    getCantidad("buzo") * getCosto("buzo para gatos de algodon");
  total = sumar(total, SubtotalBuzo);
  const SubtotalCama = getCantidad("cama") * getCosto("cama hamaca para gatos");
  total = sumar(total, SubtotalCama);
  const SubtotalHierba = getCantidad("hierba") * getCosto("hierba gatera");
  total = sumar(total, SubtotalBuzo);
  const SubtotalRatita = getCantidad("juguete") * getCosto("ratita de juguete");
  total = sumar(total, SubtotalRatita);
  const SubtotalComedero =
    getCantidad("comedero") * getCosto("comedero elevado para gatos");
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

function mostrarCarrito() {
  const carrito = JSON.parse(localStorage.getItem("carrito"));
  const carritoContainer = document.getElementById("carrito");
  carritoContainer.innerHTML = "";

  if (carrito === null || !carrito || carrito.length === 0) {
    const el = document.createElement("h3");
    el.innerHTML = "Tu carrito está vacio";
    carritoContainer.append(el);
  } else if (carrito.length > 0) {
    const list = document.createElement("ul");
    carrito.forEach((p) => {
      const el = document.createElement("li");
      el.classList = "carrito-item";
      el.innerHTML = `${p.nombre} - ${p.unidades}u`;
      list.append(el);
    });
    carritoContainer.append(list);
    const vaciar = document.createElement("button");
    vaciar.innerHTML = "Vaciar carrito";
    vaciar.onclick = () => vaciarCarrito();
    carritoContainer.append(vaciar);
  }
}

function vaciarCarrito() {
  localStorage.removeItem("carrito");
  mostrarCarrito();
}

function agregarProducto(id, nombre, precio) {
  const cant = getCantidad(id);

  if (!cant) {
    return alert("Ingrese una cantidad");
  }

  let carrito = JSON.parse(localStorage.getItem("carrito"));

  if (carrito === null || !carrito) {
    localStorage.setItem(
      "carrito",
      JSON.stringify([
        {
          id,
          nombre,
          precio,
          unidades: cant,
        },
      ])
    );
  } else {
    carrito.push({
      id,
      nombre,
      precio,
      unidades: cant,
    });
    localStorage.setItem("carrito", JSON.stringify(carrito));
  }

  mostrarCarrito();
}

// ==============================================================================================================================
// DECLARACION DE EVENTOS

const comprar = document.querySelector("#comprar");
comprar.onclick = () => getTotal();

//===============================================================================================================
// PASO LISTA DE PRODUCTOS A HTML

const contenedor = document.getElementById("products-container");

productos.forEach((producto) => {
  const el = document.createElement("div");
  el.classList = "grid-row";
  el.innerHTML = `<div>
  <img src=${producto.imagen}>
  <h5>${producto.nombre}</h5>
  </div>
  <h5>${producto.precio}</h5>
  <div id="cant-${producto.id}" class="cant-container">
    <label>Unidades:</label>
    <input id="${producto.id}" type="number" name="cant" placeholder="Ej: 1">
  </div>`;
  contenedor.append(el);
  const btnAgregar = document.createElement("button");
  btnAgregar.innerHTML = "Agregar al carrito";
  btnAgregar.onclick = () =>
    agregarProducto(producto.id, producto.nombre, producto.precio);
  const cantContainer = document.getElementById(`cant-${producto.id}`);
  cantContainer.append(btnAgregar);
});

//===============================================================================================================
// MUESTRO CARRITO

mostrarCarrito();
