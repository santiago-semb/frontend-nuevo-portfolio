export class Estudio {

    id?:number;
    institucion:string;
    completo:boolean;
    fecha:string;
    certificado:string;
    link_certificado:string;
    img:string;

    public constructor(institucion:string,completo:boolean,fecha:string,certificado:string,link_certificado:string,img:string){
        this.institucion = institucion;
        this.completo = completo;
        this.fecha = fecha;
        this.certificado = certificado;
        this.link_certificado = link_certificado;
        this.img = img;
    }

}