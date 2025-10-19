import { Empleado } from "./empleado.ts";
export class PersonalServicio extends Empleado{
    public seccion:string;

    constructor(
    nombres: string,
    apellidos: string,
    identificacion: string,
    estadoCivil: string,
    añoIncorporacion:number,
    numeroDespacho:number,
    seccionC:string

  ) {
    super(nombres, apellidos, identificacion, estadoCivil, añoIncorporacion, numeroDespacho);
    this.seccion = seccionC;
}
      cambiarseccion(nuevaseccion: string): void {
    this.seccion = nuevaseccion;
  }
}