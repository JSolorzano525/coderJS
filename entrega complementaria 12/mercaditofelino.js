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
  return productos.find((producto) => producto.nombre === nombreProducto);
}

function getCosto(nombreProducto) {
  const producto = getProductoByNombre(nombreProducto);
  if (producto) {
    return producto.precio;
  }
  return 0;
}

function sumar(a, b) {
  const suma = a + b;
  return suma;
}

function getTotal() {
  let total = 0;
  const carrito = JSON.parse(localStorage.getItem("carrito"));

  if (carrito?.length > 0) {
    total = carrito.reduce((acc, prod) => acc + prod.precio * prod.unidades, 0);
  }

  // calcular el iva
  const iva = total * 0.21;
  // sumarle a total el iva
  total = sumar(total, iva);

  const confirmar = confirm(
    `El total es $${total} (iva incluido). ¿Desea confirmar la compra?`
  );

  if (confirmar) {
    alert("Muchas gracias por su compra!");
    vaciarCarrito();
    resetCantidades();
  } else {
    alert("Su carrito lo espera en caso de cambiar de opinion");
  }
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
    document.querySelector("#comprar").setAttribute("disabled", true);
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
    document.querySelector("#comprar").removeAttribute("disabled");
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
    carrito = [
      ...carrito,
      {
        id,
        nombre,
        precio,
        unidades: cant,
      },
    ];
    localStorage.setItem("carrito", JSON.stringify(carrito));
  }

  mostrarCarrito();
}

function resetCantidades() {
  document.getElementById("buzo").value = 0;
  document.getElementById("cama").value = 0;
  document.getElementById("hierba").value = 0;
  document.getElementById("juguete").value = 0;
  document.getElementById("comedero").value = 0;
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
resetCantidades();
