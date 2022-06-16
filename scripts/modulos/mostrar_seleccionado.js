export const mostrarSel=(element,container)=>{
  /*  <video src="../assets/video/System of a Down  Chop Suey Cover by Halocene.mp4" controls></video>
    <div class="video-avatar-mostrar"><img src="../assets/img/avatar.jpg" alt=""></div>
    <div class="video-texto-mostrar">
        <h2>The only way is up</h2>
        <p> 328M vistas - 27 de Abril 2010</p>
    </div> */
  
  //Reseteo todo el container antes de volver a pintar las tarjetas
  container.innerHTML="";
  //Creo los elementos que necesito
  let $video=document.createElement("video"),
      $videoAvatar=document.createElement("div"),
      $img=document.createElement("img"),
      $videoTexto=document.createElement("div"),
      $h2=document.createElement("h2"),
      $p=document.createElement("p");
  
  //Agrego las clases que necesitan mis elementos.
  $video.setAttribute("controls",true);
  $video.setAttribute("autoplay",true);
  $videoAvatar.classList.add("video-avatar-mostrar");
  $videoTexto.classList.add("video-texto-mostrar");
  
//Configuro cada tarjeta con cada uno de los elementos del arreglo.
$video.setAttribute("src",element.url);
$video.setAttribute("poster",element.poster);
$img.setAttribute("src",element.avatar);
$h2.textContent=element.titulo;
$p.innerHTML= `${element.vistas} vistas - ${element.fecha}`;
  
      //Armo la tarjetita
      $videoTexto.appendChild($h2);
      $videoTexto.appendChild($p);
  
      $videoAvatar.appendChild($img);
  
      container.appendChild($video);
      container.appendChild($videoAvatar);
      container.appendChild($videoTexto);
  
  
      
    
  }