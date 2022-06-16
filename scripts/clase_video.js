export class Video{
        static contador=28;
        constructor(poster,titulo,categoria,autor,fecha,vistas){
            this.url="";
            this.id=++Video.contador;
            this.poster=poster;
            this.titulo=titulo;
            this.categoria=categoria;
            this.autor=autor;
            this.avatar="https://image.shutterstock.com/image-vector/question-mark-on-white-background-260nw-1898276473.jpg";
            this.fecha=fecha;
            this.vistas=vistas;
        }
}