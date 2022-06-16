export const mostrar=(arr,container)=>{
    // <div class="video-tarjeta-aside">
    //     <video src="../assets/video/Gimme Tha Power.mp4"  class="video-aside"></video>
    //     <div class="video-texto-aside">
    //         <h2>The only way is up</h2>
    //         <p> Slipknot <br>328M vistas - 27 de Abril 2010</p>
    //     </div>
    
    // </div>
  
  //Reseteo todo el container antes de volver a pintar las tarjetas
  container.innerHTML=" <h1>Videos sugeridos</h1>";
  //Creo los elementos que necesito
  let $videoTarjeta=document.createElement("div"),
      $video=document.createElement("video"),
      $videoTexto=document.createElement("div"),
      $h2=document.createElement("h2"),
      $p=document.createElement("p");
  
  //Agrego las clases que necesitan mis elementos.
  $videoTarjeta.classList.add("video-tarjeta-aside");
  $video.classList.add("video-aside");
  $videoTexto.classList.add("video-texto-aside");
  
  
  //Creo el fragmento como auxiliar para sólo pegarle una vez al DOM
  let $fragment=document.createDocumentFragment();
  
  arr.forEach(element=>{
      //Configuro cada tarjeta con cada uno de los elementos del arreglo.
    //   $video.setAttribute("src",element.url);
      $video.setAttribute("id",element.id);
      $video.setAttribute("poster",element.poster);
      $h2.textContent=element.titulo;
      $p.innerHTML= `${element.autor} <br>${element.vistas} vistas - ${element.fecha}`;
  
      //Armo la tarjetita
      $videoTexto.appendChild($h2);
      $videoTexto.appendChild($p);
  
  
      $videoTarjeta.appendChild($video);
      $videoTarjeta.appendChild($videoTexto);
  
      //Agrego la tarjeta al fragmento
      $fragment.appendChild($videoTarjeta);
      //Le doy un reset a los elementos forman la tarjetita
      $videoTarjeta=document.createElement("div");
      $video=document.createElement("video");
      $videoTexto=document.createElement("div");
      $h2=document.createElement("h2");
      $p=document.createElement("p");
  
          //Agrego las clases que necesitan mis elementos.
      $videoTarjeta.classList.add("video-tarjeta-aside");
      $video.classList.add("video-aside");
      $videoTexto.classList.add("video-texto-aside");
      });
  
      container.appendChild($fragment);  //Agrego el fracmento al container, con esto sólo le pego una vez al DOM.
    
  }