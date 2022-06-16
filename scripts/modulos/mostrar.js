export const mostrar=(arr,container)=>{
  /*  <div class="video-tarjeta">
            <video src="./assets/video/Savage  Freaks Official.mp4" class="video"></video>
            <div class="video-avatar"><img src="./assets/img/avatar.jpg" alt=""></div>
            <div class="video-texto">
                <h2>Duality</h2>
                <p> Slipknot <br>328M vistas - 27 de Abril 2010</p>
            </div>
      </div> */

//Reseteo todo el container antes de volver a pintar las tarjetas
container.innerHTML="";
//Creo los elementos que necesito
let $videoTarjeta=document.createElement("div"),
    $video=document.createElement("video"),
    $videoAvatar=document.createElement("div"),
    $img=document.createElement("img"),
    $videoTexto=document.createElement("div"),
    $h2=document.createElement("h2"),
    $p=document.createElement("p");

//Agrego las clases que necesitan mis elementos.
$videoTarjeta.classList.add("video-tarjeta");
$video.classList.add("video");
$videoAvatar.classList.add("video-avatar");
$videoTexto.classList.add("video-texto");


//Creo el fragmento como auxiliar para sólo pegarle una vez al DOM
let $fragment=document.createDocumentFragment();

arr.forEach(element=>{
    //Configuro cada tarjeta con cada uno de los elementos del arreglo.
    // $video.setAttribute("src",element.url);
    $video.setAttribute("id",Number(element.id));
    $video.setAttribute("poster",element.poster);
    $img.setAttribute("src",element.avatar);
    $h2.textContent=element.titulo;
    $p.innerHTML= `${element.autor} <br>${element.vistas} vistas - ${element.fecha}`;

    //Armo la tarjetita
    $videoTexto.appendChild($h2);
    $videoTexto.appendChild($p);

    $videoAvatar.appendChild($img);

    $videoTarjeta.appendChild($video);
    $videoTarjeta.appendChild($videoAvatar);
    $videoTarjeta.appendChild($videoTexto);

    //Agrego la tarjeta al fragmento
    $fragment.appendChild($videoTarjeta);
    //Le doy un reset a los elementos forman la tarjetita
    $videoTarjeta=document.createElement("div");
    $video=document.createElement("video");
    $videoAvatar=document.createElement("div");
    $img=document.createElement("img");
    $videoTexto=document.createElement("div");
    $h2=document.createElement("h2");
    $p=document.createElement("p");

        //Agrego las clases que necesitan mis elementos.
    $videoTarjeta.classList.add("video-tarjeta");
    $video.classList.add("video");
    $videoAvatar.classList.add("video-avatar");
    $videoTexto.classList.add("video-texto");
    });

    

    container.appendChild($fragment);  //Agrego el fracmento al container, con esto sólo le pego una vez al DOM.
   
  
}