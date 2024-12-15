// src/data.ts

interface Horario {
  dia: string; // Ejemplo: "Lunes", "Martes"
  horaInicio: string; // Ejemplo: "08:00"
  horaFin: string; // Ejemplo: "09:45"
}

interface Grupo {
  id: string; // Identificador único del grupo
  docente: string; // Nombre del docente
  horarios: Horario[]; // Horarios asignados al grupo
}

interface Materia {
  id: string; // Identificador único de la materia
  nombre: string; // Nombre de la materia
  grupos: Grupo[]; // Grupos disponibles para la materia
}

interface Semestre {
  id: string; // Identificador único del semestre
  nombre: string; // Ejemplo: "Primer Semestre", "Segundo Semestre"
  materias: Materia[]; // Materias disponibles en este semestre
}

interface Carrera {
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
        nombre: "Primer Semestre",
        materias: [
          {
            id: "1",
            nombre: "Introducción a la Programación",
            grupos: [
              {
                id: "G1",
                docente: "Juan Perez",
                horarios: [
                  { dia: "Lunes", horaInicio: "08:00", horaFin: "09:30" },
                  { dia: "Miércoles", horaInicio: "10:00", horaFin: "11:30" },
                ],
              },
              {
                id: "G2",
                docente: "Maria Lopez",
                horarios: [
                  { dia: "Martes", horaInicio: "09:00", horaFin: "10:30" },
                  { dia: "Jueves", horaInicio: "12:00", horaFin: "13:30" },
                ],
              },
            ],
          },
          {
            id: "2",
            nombre: "Matemáticas Básicas",
            grupos: [
              {
                id: "G1",
                docente: "Carlos Gomez",
                horarios: [
                  { dia: "Lunes", horaInicio: "10:00", horaFin: "11:30" },
                  { dia: "Miércoles", horaInicio: "08:00", horaFin: "09:30" },
                ],
              },
            ],
          },
        ],
      },
      {
        id: "2",
        nombre: "Segundo Semestre",
        materias: [
          {
            id: "1",
            nombre: "Estructuras de Datos",
            grupos: [
              {
                id: "G1",
                docente: "Luis Torres",
                horarios: [
                  { dia: "Lunes", horaInicio: "13:00", horaFin: "14:30" },
                  { dia: "Miércoles", horaInicio: "15:00", horaFin: "16:30" },
                ],
              },
            ],
          },
          {
            id: "2",
            nombre: "Cálculo Diferencial",
            grupos: [
              {
                id: "G1",
                docente: "Ana Castillo",
                horarios: [
                  { dia: "Martes", horaInicio: "08:00", horaFin: "09:30" },
                  { dia: "Jueves", horaInicio: "10:00", horaFin: "11:30" },
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
        nombre: "Primer Semestre",
        materias: [
          {
            id: "1",
            nombre: "Circuitos Eléctricos I",
            grupos: [
              {
                id: "G1",
                docente: "Jose Hernandez",
                horarios: [
                  { dia: "Lunes", horaInicio: "07:00", horaFin: "08:30" },
                  { dia: "Miércoles", horaInicio: "09:00", horaFin: "10:30" },
                ],
              },
            ],
          },
        ],
      },
      {
        id: "2",
        nombre: "Segundo Semestre",
        materias: [
          {
            id: "1",
            nombre: "Electromagnetismo Aplicado",
            grupos: [
              {
                id: "G1",
                docente: "Sofia Rivera",
                horarios: [
                  { dia: "Martes", horaInicio: "11:00", horaFin: "12:30" },
                  { dia: "Jueves", horaInicio: "14:00", horaFin: "15:30" },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
];
