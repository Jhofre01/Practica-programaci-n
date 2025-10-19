import { Persona } from "./persona.ts";
export class Empleado extends Persona{
    public añoIncorporacion:number;
    public numeroDespacho:number;

    constructor(
    nombres: string,
    apellidos: string,
    identificacion: string,
    estadoCivil: string,
    añoIncorporacionC:number,
    numeroDespachoC:number

  ) {
    super(nombres, apellidos, identificacion, estadoCivil);
    this.añoIncorporacion = añoIncorporacionC;
    this.numeroDespacho = numeroDespachoC;
}
      reasignarDespacho(nuevodespacho: number): void {
    this.numeroDespacho = nuevodespacho;
  }
}