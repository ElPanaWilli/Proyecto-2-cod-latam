/* Vista de La URL del Trabajo de Willi */

document.url


/* Trabajando un poco con Console.Log y Alert. */

console.log ("Proyecto 2. Entrega Final del Mgstr. Wuilliams E. Mendoza A. (Comision 6)");

window.alert ("Hola!! Bienvenidos al Trabajo Final del Mgstr. Wuilliams E. Mendoza Araujo. (Comision 6)");


/* Sombreado de Las Opciones del Menu */

const menuItems = document.querySelectorAll(".logo_willi");

    menuItems.forEach(function (item) {
      item.addEventListener ("click", function(ev) {
         const nuevoItem = document.querySelector(".sombreado");
         nuevoItem.classList.remove("sombreado");
         ev.target.classList.add("sombreado");
      })
    })


/* Interaccion del Saludo Willi */

const bienvenida = document.querySelector("#introw");

bienvenida.addEventListener("click",function(e) {
   e.target.classList.toggle("titulomodif");
});

/* Interaccion de La Presentacion de Willi */

const intro = document.querySelector(".Saludo");

     intro.addEventListener("click",function(edos) {
     edos.target.classList.toggle("titmod");
}); 

/* Activacion de Alertas del Click Derecho */

function mouseder() {
   alert("Activaste el Click Derecho!!!")
}

/* Conteo de las Visitas a Nuestro Curriculum por Console.Log */

function clickCurriculum () {
   console.log ("Los Usuarios que han Visto tu Curriculum Hasta Ahora Son:");
}
const usuarios = document.getElementById("Botoncv");
usuarios.onclick = clickCurriculum;