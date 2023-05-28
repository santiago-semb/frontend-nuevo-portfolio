export class Experiencia {

    id?:number;
    lugar:string;
    direccion:string;
    tiempo:string;
    desde:string;
    hasta:string;
    descripcion:string;
    img:string;

    public constructor(lugar:string,direccion:string,tiempo:string,desde:string,hasta:string,descripcion:string,img:string){
        this.lugar = lugar;
        this.direccion = direccion;
        this.tiempo = tiempo;
        this.desde = desde;
        this.hasta = hasta;
        this.descripcion = descripcion;
        this.img = img;
    }

}