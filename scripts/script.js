import { data } from "./data.js";
import { mostrar } from "./modulos/mostrar.js";


let $container=document.querySelector(".contenedor-videos");
let seleccionado={}; 


//Esto es para que mi data no se reinicie cada que recargue la página.
if(sessionStorage.getItem("flag")===null){
    sessionStorage.setItem("datos",JSON.stringify(data));
    sessionStorage.setItem("flag",true);
}
let filtrado=JSON.parse(sessionStorage.getItem("datos")); /*Porque por defecto están todos los videos */
//mostrar(data,$container);
mostrar(JSON.parse(sessionStorage.getItem("datos")),$container);


sessionStorage.setItem("boton-actual","todos");



document.addEventListener("DOMContentLoaded",()=>{
    

    //Referencio los botones.
    const $btnTodos=document.getElementById("todos"),
          $btnMusica=document.getElementById("musica"),
          $btnProgramacion=document.getElementById("programacion"),
          $btnDisenio=document.getElementById("diseño");


    $btnTodos.addEventListener("click",()=>{
        //Le quito la clase de seleccionado al botón anterior.
        document.getElementById(sessionStorage.getItem("boton-actual")).classList.remove("seleccionado");
        //Actualizo el botón actual.
        sessionStorage.setItem("boton-actual","todos");
        //Al botón actual le pongo la clase seleccionado
        document.getElementById(sessionStorage.getItem("boton-actual")).classList.add("seleccionado");
        // filtrado=data.filter(el=>el);
        filtrado=JSON.parse(sessionStorage.getItem("datos")).filter(el=>el);
        mostrar(filtrado,$container);

      
    });
    $btnMusica.addEventListener("click",()=>{
        document.getElementById(sessionStorage.getItem("boton-actual")).classList.remove("seleccionado");
        sessionStorage.setItem("boton-actual","musica");
        document.getElementById(sessionStorage.getItem("boton-actual")).classList.add("seleccionado");
        //filtrado=data.filter(el=>el.categoria==="musica");
        filtrado=JSON.parse(sessionStorage.getItem("datos")).filter(el=>el.categoria==="musica");
        mostrar(filtrado,$container);
    });
    $btnProgramacion.addEventListener("click",()=>{
        document.getElementById(sessionStorage.getItem("boton-actual")).classList.remove("seleccionado");
        sessionStorage.setItem("boton-actual","programacion");
        document.getElementById(sessionStorage.getItem("boton-actual")).classList.add("seleccionado");
        //filtrado=data.filter(el=>el.categoria==="programacion");
        filtrado=JSON.parse(sessionStorage.getItem("datos")).filter(el=>el.categoria==="programacion");
        mostrar(filtrado,$container);
    });
    $btnDisenio.addEventListener("click",()=>{
        document.getElementById(sessionStorage.getItem("boton-actual")).classList.remove("seleccionado");
        sessionStorage.setItem("boton-actual","diseño");
        document.getElementById(sessionStorage.getItem("boton-actual")).classList.add("seleccionado");
        //filtrado=data.filter(el=>el.categoria==="diseño");
        filtrado=JSON.parse(sessionStorage.getItem("datos")).filter(el=>el.categoria==="diseño");
        mostrar(filtrado,$container);
    });
    
    document.addEventListener("click",e=>{
        if(e.target.matches(".video")){  /****************** */
           seleccionado={}; /******Reset del video seleccionado************ */ 
            filtrado.forEach((element)=>{
                if(element.id === Number(e.target.id)){
                    seleccionado=element;
                }
            })

            //Funciona, hay que mandarlos al local storage
           localStorage.setItem("seleccionado",JSON.stringify(seleccionado));
           

            //Ahora me ubico en la otra página
            location.href="../pages/video.html";
            }


            if(e.target.matches(".btn-agregar")){ 
                location.href="../pages/agregar.html";
            }
        
        
    });

    /****************Aquí viene la lógica del buscador manual***************** */

    document.addEventListener("keyup",e=>{
      if(e.target.matches("#buscador")){
         const videos=filtrado.filter(el=>el.titulo.toLowerCase().includes(e.target.value.toLowerCase())||el.autor.toLowerCase().includes(e.target.value.toLowerCase()));
         mostrar(videos,$container);
      }
    });



  
   
})