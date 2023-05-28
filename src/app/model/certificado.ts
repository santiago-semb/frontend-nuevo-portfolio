export class Certificado {

    id?:number;
    nombre:string;
    fecha:string;
    link:string;
    img:string;

    public constructor(nombre:string,fecha:string,link:string,img:string){
        this.nombre = nombre;
        this.fecha = fecha;
        this.link = link;
        this.img = img;
    }

}