export class Persona {
  public nombres: string;
  public apellidos: string;
  public identificacion: string;
  public estadoCivil: string;

  constructor(
    nombresC: string,
    apellidosC: string,
    identificacionC: string,
    estadoCivilC: string
  ) {
    this.nombres = nombresC;
    this.apellidos = apellidosC;
    this.identificacion = identificacionC;
    this.estadoCivil = estadoCivilC;
  }
    cambiarEstadoCivil(nuevoestadocivil: string): void {
    this.estadoCivil = nuevoestadocivil;
  }
}
