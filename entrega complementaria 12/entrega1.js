let inputNumber;
let counter = 0;
let respuesta = prompt("¿Quieres ingresar un número?").toLowerCase().trim();

while (respuesta == "si") {
  inputNumber = Number(prompt("Ingresa un número"));
  if (isNaN(inputNumber)) {
    alert(
      "El valor ingresado no es un número. Ingrese un número para poder continuar."
    );
    continue;
  }
  for (let i = 0; i <= inputNumber; i++) {
    console.log(i);
    counter++;
  }
  alert("Ingresaste el número " + inputNumber);
  respuesta = prompt("¿Quieres ingresar otro número?").toLowerCase().trim();
}
