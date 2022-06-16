import { mostrar } from "./modulos/mostrar_sugerencias.js";
import { mostrarSel } from "./modulos/mostrar_seleccionado.js";
//Botón que me permite ir al inicio
let $logo=document.querySelector(".logo");
let $container=document.querySelector(".contenedor-lateral");
let $containerSeleccionado=document.querySelector(".contenedor-video-seleccionado");
let seleccionado=JSON.parse(localStorage.getItem("seleccionado"));
const data=JSON.parse(sessionStorage.getItem("datos"));
let sugeridos=data.filter(element=>element.categoria===seleccionado.categoria && element.id!=seleccionado.id);

mostrar(sugeridos,$container);
mostrarSel(seleccionado,$containerSeleccionado);


//Me regresa a la página principal.
$logo.addEventListener("click",e=>{
      //Me ubico en la página principal
      location.href="../index.html";
});

document.addEventListener("click",(e)=>{
    if(e.target.matches(".video-aside")){
         seleccionado=data[Number(e.target.id)-1];
         sugeridos=data.filter(element=>element.categoria===seleccionado.categoria && element.id!=seleccionado.id);
         mostrar(sugeridos,$container);
         mostrarSel(seleccionado,$containerSeleccionado);
    }
});