import { Video } from "./clase_video.js";
const $logo=document.querySelector(".logo-agregar");
const $formulario=document.getElementById("formulario");

let url="";
let titulo="";
let categoria="";
let autor="";
let fecha="";
let vistas="";
let validador=false;
let datosActualizados=[];

$logo.addEventListener("click",(e)=>{
    location.href="../index.html";
});

$formulario.addEventListener("submit",(e)=>{
        e.preventDefault();
        url=document.getElementById("url").value;
        titulo=document.getElementById("titulo").value;
        categoria=document.getElementById("categoria").value;
        autor=document.getElementById("autor").value;
        fecha=document.getElementById("fecha").value;
        vistas=document.getElementById("vistas").value;
       
        validador=url!="" && titulo!="" && categoria!="" && autor!="" && fecha!="" && vistas!="";

        if(validador){
            let video=new Video(url,titulo,categoria,autor,fecha,vistas);
            datosActualizados=JSON.parse(sessionStorage.getItem("datos")); 
            datosActualizados.push(video);
            sessionStorage.setItem("datos",JSON.stringify(datosActualizados));
    
           Swal.fire({
            position: 'top',
            icon: 'success',
            title: 'El nuevo video ha sido creado correctamente',
            showConfirmButton: true,
            timer: 15000
          });
      
          //Reset al formulario
          $formulario.reset();
        }else{
       
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'Recuerda completar todos los campos!',
            //   footer: '<a href="">Why do I have this issue?</a>'
            })
        }
        
});
