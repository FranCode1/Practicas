// v6

// Clase Calculadora
class Calculadora {
  constructor(valorAnterior, valorActual) {
    this.valorAnterior = valorAnterior;
    this.valorActual = valorActual;
    this.eliminar();
  }

  eliminar() {
    this.numViejo = 0;
    this.numNuevo = 0;
    this.operador = "";
    // this.tipoOperacion = undefined;
    this.actualizar();
  }

  actualizar() {
    this.valorAnterior.innerHTML = this.numViejo + this.operador;
    this.valorActual.innerHTML = this.numNuevo;
  }

  agregarNumero(numero) {
    if (numero === "." && this.numNuevo.includes(".")) return;
    this.numNuevo =
      this.numNuevo === 0 ? numero : this.numNuevo.toString() + numero;
    this.actualizar();
  }

  borrar() {
    if (this.numNuevo === 0) return;
    this.numNuevo = +this.numNuevo.toString().slice(0, -1);
    this.actualizar();
  }

  operacion(operador) {
    if (this.operador) {
      this.calcular();
    }
    this.operador = operador;
    this.numViejo = +this.numNuevo === 0 ? this.numViejo : this.numNuevo;
    this.numNuevo = 0;
    this.actualizar();
  }

  // computar(tipo) {
  //     this.tipoOperacion !== '=' && this.calcular();
  //     this.tipoOperacion = tipo;
  //     this.numViejo = this.numNuevo || this.numViejo;
  //     this.numNuevo = '0';
  //     this.actualizar();
  // }

  calcular() {
    // const numeroViejo = parseFloat(this.numViejo);
    // const numeroNuevo = parseFloat(this.numNuevo);

    // if (isNaN(numeroNuevo) || isNaN(numeroViejo)) {
    //    return this.numeroNuevo = this.calculador[this.tipoOperacion]( numeroViejo, numeroNuevo );
    // }

    switch (this.operador) {
      case "+":
        this.numViejo = +this.numViejo + +this.numNuevo;
        // this.numViejo += this.numNuevo;
        break;
      case "-":
        this.numViejo = +this.numViejo - +this.numNuevo;
        break;
      case "*":
        this.numViejo = +this.numViejo * +this.numNuevo;
        break;
      case "/":
        this.numViejo = +this.numViejo / +this.numNuevo;
        break;
      case "%":
        this.numViejo = +this.numViejo % +this.numNuevo;
        break;
      case "**":
        this.numViejo = this.numViejo ** +this.numNuevo;
        break;
    }
    this.operador = "";
    this.numNuevo = 0;
    this.actualizar();
  }
}

// Variables contenedoras de los botones
const valorAnterior = document.querySelector('[valor-anterior]');
const valorActual = document.querySelector("[valor-actual]");

const numeros = document.querySelectorAll("[numero]");
const operadores = document.querySelectorAll("[operador]");

const eliminar = document.querySelector("[eliminar]");
const borrar = document.querySelector('[borrar]');
const igual = document.querySelector('[igual]');

// Objeto calculadora
const calculadoraFachera = new Calculadora(valorAnterior, valorActual);

// Funciones de los botones
numeros.forEach(boton => {
  boton.addEventListener("click", () => {
    calculadoraFachera.agregarNumero(boton.innerHTML);
  });
});

operadores.forEach(boton => {
  boton.addEventListener('click', ()=>{
    calculadoraFachera.operacion(boton.innerHTML);
  });
});

eliminar.addEventListener("click", () =>{
  calculadoraFachera.eliminar();
})

borrar.addEventListener('click', () => {
  calculadoraFachera.borrar();
})

igual.addEventListener('click', ()=>{
  calculadoraFachera.calcular();
})










// falta refactorizar esta parte pero en si esta terminado
// las mejoras que le haria serian poner skin1 y skin2 en un array y modificar todo de una
// tambien meter fondo y calculadora en un array para modificar todo de una

// tambien, en caso de meter mas skin y verificarlas por el nombre nomas, eso se podria con un switch case
// y asi listo


// boton de cambio de skin
const calculadora = document.querySelector('.calculadora');

const skin1 = document.querySelector('.left');
const skin2 = document.querySelector(".right");
const skinText = document.querySelector('.skin-text');

const cambiaSkin = document.querySelectorAll('.changeSkin');
const fondo = document.querySelector('.body');



cambiaSkin.forEach( boton => {
  boton.addEventListener("click", () => {
    if(skinText.innerHTML == 'SKIN 2'){
        skinText.innerHTML = 'SKIN 1';
    }else{
        skinText.innerHTML = "SKIN 2";
    }
    skin1.classList.toggle("active");
    skin2.classList.toggle("active");
    fondo.classList.toggle("skin");
    calculadora.classList.toggle("skin");
  });
});
