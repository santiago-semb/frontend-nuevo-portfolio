export class Proyecto {

    id?:number;
    nombre:string;
    descripcion:string;
    lenguajes:string;
    link:string;

    public constructor(nombre:string,descripcion:string,lenguajes:string,link:string){
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.lenguajes = lenguajes;
        this.link = link;
    }


}