export class Persona {

    id?:number;
    nombre:string;
    apellido:string;
    edad:number;
    fecha_de_nacimiento:string;
    telefono:string;
    email:string;
    direccion:string;
    descripcion:string;
    img:string;

    public constructor(nombre:string,apellido:string,edad:number,fecha_de_nacimiento:string,telefono:string,email:string,direccion:string,descripcion:string,img:string){
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.fecha_de_nacimiento = fecha_de_nacimiento;
        this.telefono = telefono;
        this.email = email;
        this.direccion = direccion;
        this.descripcion = descripcion;
        this.img = img;
    }

}