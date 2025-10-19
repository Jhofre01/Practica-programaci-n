import { Persona } from "./persona.ts";
const persona = new Persona("Pepe","Rodiguez","0803544204","Soltero")
persona.cambiarEstadoCivil("Casado");
console.log(persona);

import { Estudiante } from "./estudiante.ts";
const estudiante = new Estudiante ("Juan","Reyna","0803544208","Soltero","A2","Matematicas")
estudiante.matricularNuevoCurso("A3");
console.log(estudiante);

import { Empleado } from "./empleado.ts";
const empleado = new Empleado("Jose","Cazares","080324567","Soltero",Number(2010),Number(15))
empleado.reasignarDespacho(24);
console.log(empleado);

import { PersonalServicio } from "./personalServicio.ts";
const personalservicio = new PersonalServicio("Carlos","Hernandez","1302435466","Soltero",Number(2014),Number(32),"Oficina")
personalservicio.cambiarseccion("Biblioteca");
console.log(personalservicio);

import { Profesor } from "./profesor.ts";
const profesor = new Profesor("Darwin","Zambrano","1302425789","Soltero",Number(2008),Number(24),"Quimica")
profesor.cambiardepartamento("Biologia");
console.log(profesor);