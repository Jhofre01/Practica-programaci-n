import { Empleado } from "./empleado.ts";
export class Profesor extends Empleado{
    public departamento:string;

    constructor(
    nombres: string,
    apellidos: string,
    identificacion: string,
    estadoCivil: string,
    añoIncorporacion:number,
    numeroDespacho:number,
    departamentoC:string

  ) {
    super(nombres, apellidos, identificacion, estadoCivil, añoIncorporacion, numeroDespacho);
    this.departamento = departamentoC;
}
  cambiardepartamento(nuevodepartamento: string): void {
    this.departamento = nuevodepartamento;
  }
}