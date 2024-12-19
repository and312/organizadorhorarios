// src/data.ts

export interface Horario {
  dia: string; // Ejemplo: "Lunes", "Martes"
  horaInicio: string; // Ejemplo: "08:00"
  horaFin: string; // Ejemplo: "09:45"
}

export interface Grupo {
  id: string; // Identificador único del grupo
  docente: string; // Nombre del docente
  horarios: Horario[]; // Horarios asignados al grupo
}

export interface Materia {
  id: string; // Identificador único de la materia
  nombre: string; // Nombre de la materia
  grupos: Grupo[]; // Grupos disponibles para la materia
}

export interface Semestre {
  id: string; // Identificador único del semestre
  nombre: string; // Ejemplo: "Primer Semestre", "Segundo Semestre"
  materias: Materia[]; // Materias disponibles en este semestre
}

export interface Carrera {
  id: string; // Identificador único de la carrera
  nombre: string; // Nombre de la carrera
  semestres: Semestre[]; // Lista de semestres en esta carrera
}

export const data: Carrera[] = [
  {
    id: "1",
    nombre: "Licenciatura en Informática",
    semestres: [
      {
        id: "1",
        nombre: "1er Semestre",
        materias: [
          {
            id: "1",
            nombre: "Introducción a la Programación",
            grupos: [
              {
                id: "1", // Para los nombres en los grupos
                docente: "Juan Perez",
                horarios: [
                  { dia: "Lunes", horaInicio: "08:15", horaFin: "09:45" },
                  { dia: "Miércoles", horaInicio: "09:45", horaFin: "11:15" },
                ],
              },
              {
                id: "2",
                docente: "Maria Lopez",
                horarios: [
                  { dia: "Martes", horaInicio: "09:45", horaFin: "11:15" },
                  { dia: "Jueves", horaInicio: "12:45", horaFin: "14:15" },
                ],
              },
            ],
          },
          {
            id: "2",
            nombre: "Matemáticas Básicas",
            grupos: [
              {
                id: "1",
                docente: "Carlos Gomez",
                horarios: [
                  { dia: "Martes", horaInicio: "09:45", horaFin: "11:15" },
                  { dia: "Miércoles", horaInicio: "08:15", horaFin: "09:45" },
                ],
              },
            ],
          },
        ],
      },
      {
        id: "2",
        nombre: "2do Semestre",
        materias: [
          {
            id: "1",
            nombre: "Estructuras de Datos",
            grupos: [
              {
                id: "1",
                docente: "Luis Torres",
                horarios: [
                  { dia: "Lunes", horaInicio: "12:45", horaFin: "14:15" },
                  { dia: "Miércoles", horaInicio: "15:45", horaFin: "17:15" },
                ],
              },
            ],
          },
          {
            id: "2",
            nombre: "Cálculo Diferencial",
            grupos: [
              {
                id: "1",
                docente: "Ana Castillo",
                horarios: [
                  { dia: "Martes", horaInicio: "08:15", horaFin: "09:45" },
                  { dia: "Jueves", horaInicio: "09:45", horaFin: "11:15" },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "2",
    nombre: "Licenciatura en Electrónica",
    semestres: [
      {
        id: "1",
        nombre: "1er Semestre",
        materias: [
          {
            id: "1",
            nombre: "Circuitos Eléctricos I",
            grupos: [
              {
                id: "1",
                docente: "Jose Hernandez",
                horarios: [
                  { dia: "Lunes", horaInicio: "06:45", horaFin: "08:15" },
                  { dia: "Miércoles", horaInicio: "09:45", horaFin: "11:15" },
                ],
              },
            ],
          },
        ],
      },
      {
        id: "2",
        nombre: "2do Semestre",
        materias: [
          {
            id: "1",
            nombre: "Electromagnetismo Aplicado",
            grupos: [
              {
                id: "1",
                docente: "Sofia Rivera",
                horarios: [
                  { dia: "Martes", horaInicio: "11:15", horaFin: "12:45" },
                  { dia: "Jueves", horaInicio: "18:45", horaFin: "20:15" },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
];