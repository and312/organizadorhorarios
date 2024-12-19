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
    nombre: "Licenciatura en Alimentos",
    semestres: [
      {
        id: "1", 
        nombre: "1er Semestre",
        materias: [
          {
            id: "1",
            nombre: "Química de Alimentos",
            grupos: [
              {
                id: "1",
                docente: "Martha Ruiz",
                horarios: [
                  { dia: "Lunes", horaInicio: "07:15", horaFin: "08:45" },
                  { dia: "Miércoles", horaInicio: "07:15", horaFin: "08:45" },
                ],
              },
            ],
          }
        ]
      },
      {
        id: "2",
        nombre: "2do Semestre",
        materias: [
          {
            id: "1",
            nombre: "Microbiología de Alimentos",
            grupos: [
              {
                id: "1",
                docente: "Laura Vega",
                horarios: [
                  { dia: "Martes", horaInicio: "09:45", horaFin: "11:15" },
                  { dia: "Jueves", horaInicio: "09:45", horaFin: "11:15" },
                ],
              },
            ],
          }
        ]
      },
      {
        id: "3",
        nombre: "3er Semestre",
        materias: [
          {
            id: "1",
            nombre: "Análisis Sensorial",
            grupos: [
              {
                id: "1",
                docente: "Pedro Ramírez",
                horarios: [
                  { dia: "Lunes", horaInicio: "11:15", horaFin: "12:45" },
                  { dia: "Miércoles", horaInicio: "11:15", horaFin: "12:45" },
                ],
              },
            ],
          }
        ]
      },
      {
        id: "4",
        nombre: "4to Semestre",
        materias: [
          {
            id: "1",
            nombre: "Tecnología de Alimentos",
            grupos: [
              {
                id: "1",
                docente: "Ana Torres",
                horarios: [
                  { dia: "Martes", horaInicio: "12:45", horaFin: "14:15" },
                  { dia: "Jueves", horaInicio: "12:45", horaFin: "14:15" },
                ],
              },
            ],
          }
        ]
      },
      {
        id: "5",
        nombre: "5to Semestre",
        materias: [
          {
            id: "1",
            nombre: "Control de Calidad Alimentaria",
            grupos: [
              {
                id: "1",
                docente: "Miguel Ángel López",
                horarios: [
                  { dia: "Lunes", horaInicio: "14:15", horaFin: "15:45" },
                  { dia: "Miércoles", horaInicio: "14:15", horaFin: "15:45" },
                ],
              },
            ],
          }
        ]
      }
    ]
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
          {
            id: "2",
            nombre: "Física Básica",
            grupos: [
              {
                id: "1",
                docente: "Martha Rodríguez",
                horarios: [
                  { dia: "Martes", horaInicio: "08:15", horaFin: "09:45" },
                  { dia: "Jueves", horaInicio: "08:15", horaFin: "09:45" },
                ],
              },
            ],
          },
          {
            id: "3",
            nombre: "Matemáticas para Ingeniería",
            grupos: [
              {
                id: "1",
                docente: "Ricardo Morales",
                horarios: [
                  { dia: "Lunes", horaInicio: "11:15", horaFin: "12:45" },
                  { dia: "Miércoles", horaInicio: "11:15", horaFin: "12:45" },
                ],
              },
            ],
          },
          {
            id: "4",
            nombre: "Introducción a la Electrónica",
            grupos: [
              {
                id: "1",
                docente: "Laura Pérez",
                horarios: [
                  { dia: "Martes", horaInicio: "12:45", horaFin: "14:15" },
                  { dia: "Jueves", horaInicio: "12:45", horaFin: "14:15" },
                ],
              },
            ],
          },
          {
            id: "5",
            nombre: "Química para Electrónica",
            grupos: [
              {
                id: "1",
                docente: "Carlos Mendoza",
                horarios: [
                  { dia: "Miércoles", horaInicio: "14:15", horaFin: "15:45" },
                  { dia: "Viernes", horaInicio: "14:15", horaFin: "15:45" },
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
          {
            id: "2",
            nombre: "Circuitos Eléctricos II",
            grupos: [
              {
                id: "1",
                docente: "Roberto Torres",
                horarios: [
                  { dia: "Lunes", horaInicio: "08:15", horaFin: "09:45" },
                  { dia: "Miércoles", horaInicio: "08:15", horaFin: "09:45" },
                ],
              },
            ],
          },
          {
            id: "3",
            nombre: "Cálculo Vectorial",
            grupos: [
              {
                id: "1",
                docente: "Elena García",
                horarios: [
                  { dia: "Martes", horaInicio: "09:45", horaFin: "11:15" },
                  { dia: "Jueves", horaInicio: "09:45", horaFin: "11:15" },
                ],
              },
            ],
          },
          {
            id: "4",
            nombre: "Programación Básica",
            grupos: [
              {
                id: "1",
                docente: "Juan Martínez",
                horarios: [
                  { dia: "Lunes", horaInicio: "11:15", horaFin: "12:45" },
                  { dia: "Miércoles", horaInicio: "11:15", horaFin: "12:45" },
                ],
              },
            ],
          },
          {
            id: "5",
            nombre: "Dibujo Técnico",
            grupos: [
              {
                id: "1",
                docente: "Patricia Soto",
                horarios: [
                  { dia: "Martes", horaInicio: "14:15", horaFin: "15:45" },
                  { dia: "Jueves", horaInicio: "14:15", horaFin: "15:45" },
                ],
              },
            ],
          },
        ],
      },
      {
        id: "3",
        nombre: "3er Semestre",
        materias: [
          {
            id: "1",
            nombre: "Electrónica Digital",
            grupos: [
              {
                id: "1",
                docente: "Fernando López",
                horarios: [
                  { dia: "Lunes", horaInicio: "07:15", horaFin: "08:45" },
                  { dia: "Miércoles", horaInicio: "07:15", horaFin: "08:45" },
                ],
              },
            ],
          },
          {
            id: "2",
            nombre: "Dispositivos Semiconductores",
            grupos: [
              {
                id: "1",
                docente: "María Castro",
                horarios: [
                  { dia: "Martes", horaInicio: "09:45", horaFin: "11:15" },
                  { dia: "Jueves", horaInicio: "09:45", horaFin: "11:15" },
                ],
              },
            ],
          },
          {
            id: "3",
            nombre: "Ecuaciones Diferenciales",
            grupos: [
              {
                id: "1",
                docente: "Jorge Rivas",
                horarios: [
                  { dia: "Lunes", horaInicio: "11:15", horaFin: "12:45" },
                  { dia: "Miércoles", horaInicio: "11:15", horaFin: "12:45" },
                ],
              },
            ],
          },
          {
            id: "4",
            nombre: "Teoría de Control",
            grupos: [
              {
                id: "1",
                docente: "Ana Vargas",
                horarios: [
                  { dia: "Martes", horaInicio: "12:45", horaFin: "14:15" },
                  { dia: "Jueves", horaInicio: "12:45", horaFin: "14:15" },
                ],
              },
            ],
          },
          {
            id: "5",
            nombre: "Mediciones Eléctricas",
            grupos: [
              {
                id: "1",
                docente: "Roberto Sánchez",
                horarios: [
                  { dia: "Miércoles", horaInicio: "14:15", horaFin: "15:45" },
                  { dia: "Viernes", horaInicio: "14:15", horaFin: "15:45" },
                ],
              },
            ],
          },
        ],
      },
      {
        id: "4",
        nombre: "4to Semestre",
        materias: [
          {
            id: "1",
            nombre: "Sistemas Digitales Avanzados",
            grupos: [
              {
                id: "1",
                docente: "Carmen Ruiz",
                horarios: [
                  { dia: "Lunes", horaInicio: "08:15", horaFin: "09:45" },
                  { dia: "Miércoles", horaInicio: "08:15", horaFin: "09:45" },
                ],
              },
            ],
          },
          {
            id: "2",
            nombre: "Electrónica Analógica",
            grupos: [
              {
                id: "1",
                docente: "Diego Mendoza",
                horarios: [
                  { dia: "Martes", horaInicio: "09:45", horaFin: "11:15" },
                  { dia: "Jueves", horaInicio: "09:45", horaFin: "11:15" },
                ],
              },
            ],
          },
          {
            id: "3",
            nombre: "Microprocesadores",
            grupos: [
              {
                id: "1",
                docente: "Luis Ortiz",
                horarios: [
                  { dia: "Lunes", horaInicio: "11:15", horaFin: "12:45" },
                  { dia: "Miércoles", horaInicio: "11:15", horaFin: "12:45" },
                ],
              },
            ],
          },
          {
            id: "4",
            nombre: "Transformadas Matemáticas",
            grupos: [
              {
                id: "1",
                docente: "Patricia Luna",
                horarios: [
                  { dia: "Martes", horaInicio: "12:45", horaFin: "14:15" },
                  { dia: "Jueves", horaInicio: "12:45", horaFin: "14:15" },
                ],
              },
            ],
          },
          {
            id: "5",
            nombre: "Instrumentación Electrónica",
            grupos: [
              {
                id: "1",
                docente: "Miguel Ángel Torres",
                horarios: [
                  { dia: "Miércoles", horaInicio: "14:15", horaFin: "15:45" },
                  { dia: "Viernes", horaInicio: "14:15", horaFin: "15:45" },
                ],
              },
            ],
          },
        ],
      },
      {
        id: "5",
        nombre: "5to Semestre",
        materias: [
          {
            id: "1",
            nombre: "Sistemas Embebidos",
            grupos: [
              {
                id: "1",
                docente: "Ricardo Valencia",
                horarios: [
                  { dia: "Lunes", horaInicio: "07:15", horaFin: "08:45" },
                  { dia: "Miércoles", horaInicio: "07:15", horaFin: "08:45" },
                ],
              },
            ],
          },
          {
            id: "2",
            nombre: "Control Digital",
            grupos: [
              {
                id: "1",
                docente: "Laura Morales",
                horarios: [
                  { dia: "Martes", horaInicio: "09:45", horaFin: "11:15" },
                  { dia: "Jueves", horaInicio: "09:45", horaFin: "11:15" },
                ],
              },
            ],
          },
          {
            id: "3",
            nombre: "Electrónica de Potencia",
            grupos: [
              {
                id: "1",
                docente: "Javier Ramírez",
                horarios: [
                  { dia: "Lunes", horaInicio: "11:15", horaFin: "12:45" },
                  { dia: "Miércoles", horaInicio: "11:15", horaFin: "12:45" },
                ],
              },
            ],
          },
          {
            id: "4",
            nombre: "Procesamiento de Señales",
            grupos: [
              {
                id: "1",
                docente: "Elena Gutiérrez",
                horarios: [
                  { dia: "Martes", horaInicio: "12:45", horaFin: "14:15" },
                  { dia: "Jueves", horaInicio: "12:45", horaFin: "14:15" },
                ],
              },
            ],
          },
          {
            id: "5",
            nombre: "Comunicaciones Electrónicas",
            grupos: [
              {
                id: "1",
                docente: "Alberto Díaz",
                horarios: [
                  { dia: "Miércoles", horaInicio: "14:15", horaFin: "15:45" },
                  { dia: "Viernes", horaInicio: "14:15", horaFin: "15:45" },
                ],
              },
            ],
          },
        ],
      },
      {
        id: "6",
        nombre: "6to Semestre",
        materias: [
          {
            id: "1",
            nombre: "Robótica Industrial",
            grupos: [
              {
                id: "1",
                docente: "Carlos Montoya",
                horarios: [
                  { dia: "Lunes", horaInicio: "08:15", horaFin: "09:45" },
                  { dia: "Miércoles", horaInicio: "08:15", horaFin: "09:45" },
                ],
              },
            ],
          },
          {
            id: "2",
            nombre: "Automatización Industrial",
            grupos: [
              {
                id: "1",
                docente: "Sofía Mendez",
                horarios: [
                  { dia: "Martes", horaInicio: "09:45", horaFin: "11:15" },
                  { dia: "Jueves", horaInicio: "09:45", horaFin: "11:15" },
                ],
              },
            ],
          },
          {
            id: "3",
            nombre: "Redes Industriales",
            grupos: [
              {
                id: "1",
                docente: "Ricardo Flores",
                horarios: [
                  { dia: "Lunes", horaInicio: "11:15", horaFin: "12:45" },
                  { dia: "Miércoles", horaInicio: "11:15", horaFin: "12:45" },
                ],
              },
            ],
          },
          {
            id: "4",
            nombre: "Sistemas SCADA",
            grupos: [
              {
                id: "1",
                docente: "Martha León",
                horarios: [
                  { dia: "Martes", horaInicio: "12:45", horaFin: "14:15" },
                  { dia: "Jueves", horaInicio: "12:45", horaFin: "14:15" },
                ],
              },
            ],
          },
          {
            id: "5",
            nombre: "Sensores y Actuadores",
            grupos: [
              {
                id: "1",
                docente: "José Luis Vargas",
                horarios: [
                  { dia: "Miércoles", horaInicio: "14:15", horaFin: "15:45" },
                  { dia: "Viernes", horaInicio: "14:15", horaFin: "15:45" },
                ],
              },
            ],
          },
        ],
      },
      {
        id: "7",
        nombre: "7mo Semestre",
        materias: [
          {
            id: "1",
            nombre: "Sistemas de Control Avanzado",
            grupos: [
              {
                id: "1",
                docente: "Roberto Cruz",
                horarios: [
                  { dia: "Lunes", horaInicio: "07:15", horaFin: "08:45" },
                  { dia: "Miércoles", horaInicio: "07:15", horaFin: "08:45" },
                ],
              },
            ],
          },
          {
            id: "2",
            nombre: "Diseño de PCB",
            grupos: [
              {
                id: "1",
                docente: "Ana María Torres",
                horarios: [
                  { dia: "Martes", horaInicio: "09:45", horaFin: "11:15" },
                  { dia: "Jueves", horaInicio: "09:45", horaFin: "11:15" },
                ],
              },
            ],
          },
          {
            id: "3",
            nombre: "Microelectrónica",
            grupos: [
              {
                id: "1",
                docente: "Daniel Ríos",
                horarios: [
                  { dia: "Lunes", horaInicio: "11:15", horaFin: "12:45" },
                  { dia: "Miércoles", horaInicio: "11:15", horaFin: "12:45" },
                ],
              },
            ],
          },
          {
            id: "4",
            nombre: "Optoelectrónica",
            grupos: [
              {
                id: "1",
                docente: "Carmen Vega",
                horarios: [
                  { dia: "Martes", horaInicio: "12:45", horaFin: "14:15" },
                  { dia: "Jueves", horaInicio: "12:45", horaFin: "14:15" },
                ],
              },
            ],
          },
          {
            id: "5",
            nombre: "Internet de las Cosas Industrial",
            grupos: [
              {
                id: "1",
                docente: "Luis Márquez",
                horarios: [
                  { dia: "Miércoles", horaInicio: "14:15", horaFin: "15:45" },
                  { dia: "Viernes", horaInicio: "14:15", horaFin: "15:45" },
                ],
              },
            ],
          },
        ],
      },
      {
        id: "8",
        nombre: "8vo Semestre",
        materias: [
          {
            id: "1",
            nombre: "Sistemas Mecatrónicos",
            grupos: [
              {
                id: "1",
                docente: "Jorge Salazar",
                horarios: [
                  { dia: "Lunes", horaInicio: "08:15", horaFin: "09:45" },
                  { dia: "Miércoles", horaInicio: "08:15", horaFin: "09:45" },
                ],
              },
            ],
          },
          {
            id: "2",
            nombre: "Energías Renovables",
            grupos: [
              {
                id: "1",
                docente: "Patricia Rojas",
                horarios: [
                  { dia: "Martes", horaInicio: "09:45", horaFin: "11:15" },
                  { dia: "Jueves", horaInicio: "09:45", horaFin: "11:15" },
                ],
              },
            ],
          },
          {
            id: "3",
            nombre: "Instrumentación Biomédica",
            grupos: [
              {
                id: "1",
                docente: "Mario Hernández",
                horarios: [
                  { dia: "Lunes", horaInicio: "11:15", horaFin: "12:45" },
                  { dia: "Miércoles", horaInicio: "11:15", horaFin: "12:45" },
                ],
              },
            ],
          },
          {
            id: "4",
            nombre: "Sistemas de Navegación",
            grupos: [
              {
                id: "1",
                docente: "Fernando Quiroz",
                horarios: [
                  { dia: "Martes", horaInicio: "12:45", horaFin: "14:15" },
                  { dia: "Jueves", horaInicio: "12:45", horaFin: "14:15" },
                ],
              },
            ],
          },
          {
            id: "5",
            nombre: "Manufactura Electrónica",
            grupos: [
              {
                id: "1",
                docente: "Rosa Miranda",
                horarios: [
                  { dia: "Miércoles", horaInicio: "14:15", horaFin: "15:45" },
                  { dia: "Viernes", horaInicio: "14:15", horaFin: "15:45" },
                ],
              },
            ],
          },
        ],
      },
      {
        id: "9",
        nombre: "9no Semestre",
        materias: [
          {
            id: "1",
            nombre: "Proyecto de Titulación en Electrónica",
            grupos: [
              {
                id: "1",
                docente: "Manuel Ramos",
                horarios: [
                  { dia: "Lunes", horaInicio: "07:15", horaFin: "08:45" },
                  { dia: "Miércoles", horaInicio: "07:15", horaFin: "08:45" },
                ],
              },
            ],
          },
          {
            id: "2",
            nombre: "Gestión de Proyectos Electrónicos",
            grupos: [
              {
                id: "1",
                docente: "Carolina Méndez",
                horarios: [
                  { dia: "Martes", horaInicio: "09:45", horaFin: "11:15" },
                  { dia: "Jueves", horaInicio: "09:45", horaFin: "11:15" },
                ],
              },
            ],
          },
          {
            id: "3",
            nombre: "Innovación Tecnológica",
            grupos: [
              {
                id: "1",
                docente: "Andrés Solís",
                horarios: [
                  { dia: "Lunes", horaInicio: "11:15", horaFin: "12:45" },
                  { dia: "Miércoles", horaInicio: "11:15", horaFin: "12:45" },
                ],
              },
            ],
          },
          {
            id: "4",
            nombre: "Sistemas Electrónicos Avanzados",
            grupos: [
              {
                id: "1",
                docente: "Isabel Castro",
                horarios: [
                  { dia: "Martes", horaInicio: "12:45", horaFin: "14:15" },
                  { dia: "Jueves", horaInicio: "12:45", horaFin: "14:15" },
                ],
              },
            ],
          },
          {
            id: "5",
            nombre: "Certificación y Normativas",
            grupos: [
              {
                id: "1",
                docente: "Roberto Paredes",
                horarios: [
                  { dia: "Miércoles", horaInicio: "14:15", horaFin: "15:45" },
                  { dia: "Viernes", horaInicio: "14:15", horaFin: "15:45" },
                ],
              },
            ],
          },
        ],
      },
    ],
    
  },
  {
    id: "3",
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
                id: "1",
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
          {
            id: "3",
            nombre: "Lógica Computacional",
            grupos: [
              {
                id: "1",
                docente: "Patricia Mendoza",
                horarios: [
                  { dia: "Lunes", horaInicio: "11:15", horaFin: "12:45" },
                  { dia: "Jueves", horaInicio: "08:15", horaFin: "09:45" },
                ],
              },
            ],
          },
          {
            id: "4",
            nombre: "Introducción a la Informática",
            grupos: [
              {
                id: "1",
                docente: "Roberto Sánchez",
                horarios: [
                  { dia: "Martes", horaInicio: "14:15", horaFin: "15:45" },
                  { dia: "Viernes", horaInicio: "11:15", horaFin: "12:45" },
                ],
              },
            ],
          },
          {
            id: "5",
            nombre: "Metodología de la Investigación",
            grupos: [
              {
                id: "1",
                docente: "Laura Jiménez",
                horarios: [
                  { dia: "Miércoles", horaInicio: "12:45", horaFin: "14:15" },
                  { dia: "Viernes", horaInicio: "09:45", horaFin: "11:15" },
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
          {
            id: "3",
            nombre: "Programación Orientada a Objetos",
            grupos: [
              {
                id: "1",
                docente: "Miguel Ángel Ruiz",
                horarios: [
                  { dia: "Lunes", horaInicio: "09:45", horaFin: "11:15" },
                  { dia: "Miércoles", horaInicio: "11:15", horaFin: "12:45" },
                ],
              },
            ],
          },
          {
            id: "4",
            nombre: "Algebra Lineal",
            grupos: [
              {
                id: "1",
                docente: "Carmen Ortiz",
                horarios: [
                  { dia: "Martes", horaInicio: "11:15", horaFin: "12:45" },
                  { dia: "Jueves", horaInicio: "14:15", horaFin: "15:45" },
                ],
              },
            ],
          },
          {
            id: "5",
            nombre: "Arquitectura de Computadoras",
            grupos: [
              {
                id: "1",
                docente: "Fernando López",
                horarios: [
                  { dia: "Miércoles", horaInicio: "14:15", horaFin: "15:45" },
                  { dia: "Viernes", horaInicio: "12:45", horaFin: "14:15" },
                ],
              },
            ],
          },
        ],
      },
      {
        id: "3",
        nombre: "3er Semestre",
        materias: [
          {
            id: "1",
            nombre: "Bases de Datos",
            grupos: [
              {
                id: "1",
                docente: "Ricardo Mora",
                horarios: [
                  { dia: "Lunes", horaInicio: "07:15", horaFin: "08:45" },
                  { dia: "Miércoles", horaInicio: "07:15", horaFin: "08:45" },
                ],
              },
            ],
          },
          {
            id: "2",
            nombre: "Cálculo Integral",
            grupos: [
              {
                id: "1",
                docente: "Diana Vega",
                horarios: [
                  { dia: "Martes", horaInicio: "09:45", horaFin: "11:15" },
                  { dia: "Jueves", horaInicio: "09:45", horaFin: "11:15" },
                ],
              },
            ],
          },
          {
            id: "3",
            nombre: "Sistemas Operativos",
            grupos: [
              {
                id: "1",
                docente: "Jorge Ramírez",
                horarios: [
                  { dia: "Lunes", horaInicio: "11:15", horaFin: "12:45" },
                  { dia: "Miércoles", horaInicio: "11:15", horaFin: "12:45" },
                ],
              },
            ],
          },
          {
            id: "4",
            nombre: "Estructura de Datos Avanzada",
            grupos: [
              {
                id: "1",
                docente: "Elena Torres",
                horarios: [
                  { dia: "Martes", horaInicio: "12:45", horaFin: "14:15" },
                  { dia: "Jueves", horaInicio: "12:45", horaFin: "14:15" },
                ],
              },
            ],
          },
          {
            id: "5",
            nombre: "Programación Web",
            grupos: [
              {
                id: "1",
                docente: "Alberto Soto",
                horarios: [
                  { dia: "Miércoles", horaInicio: "14:15", horaFin: "15:45" },
                  { dia: "Viernes", horaInicio: "14:15", horaFin: "15:45" },
                ],
              },
            ],
          },
        ],
      },
      {
        id: "4",
        nombre: "4to Semestre",
        materias: [
          {
            id: "1",
            nombre: "Ingeniería de Software",
            grupos: [
              {
                id: "1",
                docente: "Martha Rivas",
                horarios: [
                  { dia: "Lunes", horaInicio: "08:15", horaFin: "09:45" },
                  { dia: "Miércoles", horaInicio: "08:15", horaFin: "09:45" },
                ],
              },
            ],
          },
          {
            id: "2",
            nombre: "Redes de Computadoras",
            grupos: [
              {
                id: "1",
                docente: "Gabriel Mendoza",
                horarios: [
                  { dia: "Martes", horaInicio: "11:15", horaFin: "12:45" },
                  { dia: "Jueves", horaInicio: "11:15", horaFin: "12:45" },
                ],
              },
            ],
          },
          {
            id: "3",
            nombre: "Probabilidad y Estadística",
            grupos: [
              {
                id: "1",
                docente: "Carolina Flores",
                horarios: [
                  { dia: "Lunes", horaInicio: "12:45", horaFin: "14:15" },
                  { dia: "Miércoles", horaInicio: "12:45", horaFin: "14:15" },
                ],
              },
            ],
          },
          {
            id: "4",
            nombre: "Programación Móvil",
            grupos: [
              {
                id: "1",
                docente: "Daniel Castro",
                horarios: [
                  { dia: "Martes", horaInicio: "14:15", horaFin: "15:45" },
                  { dia: "Jueves", horaInicio: "14:15", horaFin: "15:45" },
                ],
              },
            ],
          },
          {
            id: "5",
            nombre: "Análisis de Algoritmos",
            grupos: [
              {
                id: "1",
                docente: "Raúl Vargas",
                horarios: [
                  { dia: "Miércoles", horaInicio: "15:45", horaFin: "17:15" },
                  { dia: "Viernes", horaInicio: "15:45", horaFin: "17:15" },
                ],
              },
            ],
          },
        ],
      },
      {
        id: "5",
        nombre: "5to Semestre",
        materias: [
          {
            id: "1",
            nombre: "Inteligencia Artificial",
            grupos: [
              {
                id: "1",
                docente: "Sofía Martínez",
                horarios: [
                  { dia: "Lunes", horaInicio: "07:15", horaFin: "08:45" },
                  { dia: "Miércoles", horaInicio: "07:15", horaFin: "08:45" },
                ],
              },
            ],
          },
          {
            id: "2",
            nombre: "Seguridad Informática",
            grupos: [
              {
                id: "1",
                docente: "Hugo Pérez",
                horarios: [
                  { dia: "Martes", horaInicio: "09:45", horaFin: "11:15" },
                  { dia: "Jueves", horaInicio: "09:45", horaFin: "11:15" },
                ],
              },
            ],
          },
          {
            id: "3",
            nombre: "Desarrollo de Software Empresarial",
            grupos: [
              {
                id: "1",
                docente: "Isabel Rojas",
                horarios: [
                  { dia: "Lunes", horaInicio: "11:15", horaFin: "12:45" },
                  { dia: "Miércoles", horaInicio: "11:15", horaFin: "12:45" },
                ],
              },
            ],
          },
          {
            id: "4",
            nombre: "Sistemas Distribuidos",
            grupos: [
              {
                id: "1",
                docente: "Andrés Luna",
                horarios: [
                  { dia: "Martes", horaInicio: "12:45", horaFin: "14:15" },
                  { dia: "Jueves", horaInicio: "12:45", horaFin: "14:15" },
                ],
              },
            ],
          },
          {
            id: "5",
            nombre: "Minería de Datos",
            grupos: [
              {
                id: "1",
                docente: "Carmen Silva",
                horarios: [
                  { dia: "Miércoles", horaInicio: "14:15", horaFin: "15:45" },
                  { dia: "Viernes", horaInicio: "14:15", horaFin: "15:45" },
                ],
              },
            ],
          },
        ],
      },
      {
        id: "6",
        nombre: "6to Semestre",
        materias: [
          {
            id: "1",
            nombre: "Machine Learning",
            grupos: [
              {
                id: "1",
                docente: "Roberto Cruz",
                horarios: [
                  { dia: "Lunes", horaInicio: "08:15", horaFin: "09:45" },
                  { dia: "Miércoles", horaInicio: "08:15", horaFin: "09:45" },
                ],
              },
            ],
          },
          {
            id: "2",
            nombre: "Computación en la Nube",
            grupos: [
              {
                id: "1",
                docente: "Ricardo Paredes",
                horarios: [
                  { dia: "Martes", horaInicio: "09:45", horaFin: "11:15" },
                  { dia: "Jueves", horaInicio: "09:45", horaFin: "11:15" },
                ],
              },
            ],
          },
          {
            id: "3",
            nombre: "Desarrollo de Videojuegos",
            grupos: [
              {
                id: "1",
                docente: "Luis Mendoza",
                horarios: [
                  { dia: "Lunes", horaInicio: "11:15", horaFin: "12:45" },
                  { dia: "Miércoles", horaInicio: "11:15", horaFin: "12:45" },
                ],
              },
            ],
          },
          {
            id: "4",
            nombre: "Gestión de Proyectos de Software",
            grupos: [
              {
                id: "1",
                docente: "Ana María Cortés",
                horarios: [
                  { dia: "Martes", horaInicio: "12:45", horaFin: "14:15" },
                  { dia: "Jueves", horaInicio: "12:45", horaFin: "14:15" },
                ],
              },
            ],
          },
          {
            id: "5",
            nombre: "Blockchain y Criptomonedas",
            grupos: [
              {
                id: "1",
                docente: "Javier Robles",
                horarios: [
                  { dia: "Miércoles", horaInicio: "14:15", horaFin: "15:45" },
                  { dia: "Viernes", horaInicio: "14:15", horaFin: "15:45" },
                ],
              },
            ],
          },
        ],
      },
      {
        id: "7",
        nombre: "7mo Semestre",
        materias: [
          {
            id: "1",
            nombre: "Arquitecturas Cloud Native",
            grupos: [
              {
                id: "1",
                docente: "Mario Vega",
                horarios: [
                  { dia: "Lunes", horaInicio: "07:15", horaFin: "08:45" },
                  { dia: "Miércoles", horaInicio: "07:15", horaFin: "08:45" },
                ],
              },
            ],
          },
          {
            id: "2",
            nombre: "DevOps y Automatización",
            grupos: [
              {
                id: "1",
                docente: "Patricia Luna",
                horarios: [
                  { dia: "Martes", horaInicio: "09:45", horaFin: "11:15" },
                  { dia: "Jueves", horaInicio: "09:45", horaFin: "11:15" },
                ],
              },
            ],
          },
          {
            id: "3",
            nombre: "Big Data Analytics",
            grupos: [
              {
                id: "1",
                docente: "Carlos Ruiz",
                horarios: [
                  { dia: "Lunes", horaInicio: "11:15", horaFin: "12:45" },
                  { dia: "Miércoles", horaInicio: "11:15", horaFin: "12:45" },
                ],
              },
            ],
          },
          {
            id: "4",
            nombre: "Ciberseguridad Avanzada",
            grupos: [
              {
                id: "1",
                docente: "Diana Torres",
                horarios: [
                  { dia: "Martes", horaInicio: "12:45", horaFin: "14:15" },
                  { dia: "Jueves", horaInicio: "12:45", horaFin: "14:15" },
                ],
              },
            ],
          },
          {
            id: "5",
            nombre: "Internet de las Cosas",
            grupos: [
              {
                id: "1",
                docente: "Roberto Méndez",
                horarios: [
                  { dia: "Miércoles", horaInicio: "14:15", horaFin: "15:45" },
                  { dia: "Viernes", horaInicio: "14:15", horaFin: "15:45" },
                ],
              },
            ],
          },
        ],
      },
      {
        id: "8",
        nombre: "8vo Semestre",
        materias: [
          {
            id: "1",
            nombre: "Arquitecturas de Microservicios",
            grupos: [
              {
                id: "1",
                docente: "Fernando García",
                horarios: [
                  { dia: "Lunes", horaInicio: "08:15", horaFin: "09:45" },
                  { dia: "Miércoles", horaInicio: "08:15", horaFin: "09:45" },
                ],
              },
            ],
          },
          {
            id: "2",
            nombre: "Computación Cuántica",
            grupos: [
              {
                id: "1",
                docente: "Elena Ramírez",
                horarios: [
                  { dia: "Martes", horaInicio: "09:45", horaFin: "11:15" },
                  { dia: "Jueves", horaInicio: "09:45", horaFin: "11:15" },
                ],
              },
            ],
          },
          {
            id: "3",
            nombre: "Visión por Computadora",
            grupos: [
              {
                id: "1",
                docente: "Miguel Torres",
                horarios: [
                  { dia: "Lunes", horaInicio: "11:15", horaFin: "12:45" },
                  { dia: "Miércoles", horaInicio: "11:15", horaFin: "12:45" },
                ],
              },
            ],
          },
          {
            id: "4",
            nombre: "Ética en la IA",
            grupos: [
              {
                id: "1",
                docente: "Laura Martínez",
                horarios: [
                  { dia: "Martes", horaInicio: "12:45", horaFin: "14:15" },
                  { dia: "Jueves", horaInicio: "12:45", horaFin: "14:15" },
                ],
              },
            ],
          },
          {
            id: "5",
            nombre: "Desarrollo Full Stack",
            grupos: [
              {
                id: "1",
                docente: "Jorge Sánchez",
                horarios: [
                  { dia: "Miércoles", horaInicio: "14:15", horaFin: "15:45" },
                  { dia: "Viernes", horaInicio: "14:15", horaFin: "15:45" },
                ],
              },
            ],
          },
        ],
      },
      {
        id: "9",
        nombre: "9no Semestre",
        materias: [
          {
            id: "1",
            nombre: "Proyecto de Titulación",
            grupos: [
              {
                id: "1",
                docente: "Carmen Ortiz",
                horarios: [
                  { dia: "Lunes", horaInicio: "07:15", horaFin: "08:45" },
                  { dia: "Miércoles", horaInicio: "07:15", horaFin: "08:45" },
                ],
              },
            ],
          },
          {
            id: "2",
            nombre: "Emprendimiento Tecnológico",
            grupos: [
              {
                id: "1",
                docente: "Roberto Valdez",
                horarios: [
                  { dia: "Martes", horaInicio: "09:45", horaFin: "11:15" },
                  { dia: "Jueves", horaInicio: "09:45", horaFin: "11:15" },
                ],
              },
            ],
          },
          {
            id: "3",
            nombre: "Tendencias en Tecnología",
            grupos: [
              {
                id: "1",
                docente: "María González",
                horarios: [
                  { dia: "Lunes", horaInicio: "11:15", horaFin: "12:45" },
                  { dia: "Miércoles", horaInicio: "11:15", horaFin: "12:45" },
                ],
              },
            ],
          },
          {
            id: "4",
            nombre: "Sistemas Empresariales Avanzados",
            grupos: [
              {
                id: "1",
                docente: "Alberto Ríos",
                horarios: [
                  { dia: "Martes", horaInicio: "12:45", horaFin: "14:15" },
                  { dia: "Jueves", horaInicio: "12:45", horaFin: "14:15" },
                ],
              },
            ],
          },
          {
            id: "5",
            nombre: "Innovación Digital",
            grupos: [
              {
                id: "1",
                docente: "Patricia Flores",
                horarios: [
                  { dia: "Miércoles", horaInicio: "14:15", horaFin: "15:45" },
                  { dia: "Viernes", horaInicio: "14:15", horaFin: "15:45" },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "4",
    nombre: "Licenciatura en Física",
    semestres: [
      {
        id: "1",
        nombre: "1er Semestre",
        materias: [
          {
            id: "1",
            nombre: "Física Básica",
            grupos: [
              {
                id: "1",
                docente: "Carlos Mendoza",
                horarios: [
                  { dia: "Martes", horaInicio: "08:15", horaFin: "09:45" },
                  { dia: "Jueves", horaInicio: "08:15", horaFin: "09:45" },
                ],
              },
            ],
          }
        ]
      },
      {
        id: "2",
        nombre: "2do Semestre",
        materias: [
          {
            id: "1",
            nombre: "Mecánica Clásica",
            grupos: [
              {
                id: "1",
                docente: "Fernando Ruiz",
                horarios: [
                  { dia: "Lunes", horaInicio: "09:45", horaFin: "11:15" },
                  { dia: "Miércoles", horaInicio: "09:45", horaFin: "11:15" },
                ],
              },
            ],
          }
        ]
      },
      {
        id: "3",
        nombre: "3er Semestre",
        materias: [
          {
            id: "1",
            nombre: "Electromagnetismo",
            grupos: [
              {
                id: "1",
                docente: "Patricia Luna",
                horarios: [
                  { dia: "Martes", horaInicio: "11:15", horaFin: "12:45" },
                  { dia: "Jueves", horaInicio: "11:15", horaFin: "12:45" },
                ],
              },
            ],
          }
        ]
      },
      {
        id: "4",
        nombre: "4to Semestre",
        materias: [
          {
            id: "1",
            nombre: "Termodinámica",
            grupos: [
              {
                id: "1",
                docente: "Ricardo Soto",
                horarios: [
                  { dia: "Lunes", horaInicio: "12:45", horaFin: "14:15" },
                  { dia: "Miércoles", horaInicio: "12:45", horaFin: "14:15" },
                ],
              },
            ],
          }
        ]
      },
      {
        id: "5",
        nombre: "5to Semestre",
        materias: [
          {
            id: "1",
            nombre: "Física Cuántica",
            grupos: [
              {
                id: "1",
                docente: "Elena Martínez",
                horarios: [
                  { dia: "Martes", horaInicio: "14:15", horaFin: "15:45" },
                  { dia: "Jueves", horaInicio: "14:15", horaFin: "15:45" },
                ],
              },
            ],
          }
        ]
      }
    ]
  },
  {
    id: "5",
    nombre: "Licenciatura en Química",
    semestres: [
      {
        id: "1",
        nombre: "1er Semestre",
        materias: [
          {
            id: "1",
            nombre: "Química General",
            grupos: [
              {
                id: "1",
                docente: "Roberto Sánchez",
                horarios: [
                  { dia: "Lunes", horaInicio: "09:45", horaFin: "11:15" },
                  { dia: "Miércoles", horaInicio: "09:45", horaFin: "11:15" },
                ],
              },
            ],
          }
        ]
      },
      {
        id: "2",
        nombre: "2do Semestre",
        materias: [
          {
            id: "1",
            nombre: "Química Orgánica",
            grupos: [
              {
                id: "1",
                docente: "María González",
                horarios: [
                  { dia: "Martes", horaInicio: "11:15", horaFin: "12:45" },
                  { dia: "Jueves", horaInicio: "11:15", horaFin: "12:45" },
                ],
              },
            ],
          }
        ]
      },
      {
        id: "3",
        nombre: "3er Semestre",
        materias: [
          {
            id: "1",
            nombre: "Química Analítica",
            grupos: [
              {
                id: "1",
                docente: "Jorge Méndez",
                horarios: [
                  { dia: "Lunes", horaInicio: "12:45", horaFin: "14:15" },
                  { dia: "Miércoles", horaInicio: "12:45", horaFin: "14:15" },
                ],
              },
            ],
          }
        ]
      },
      {
        id: "4",
        nombre: "4to Semestre",
        materias: [
          {
            id: "1",
            nombre: "Química Inorgánica",
            grupos: [
              {
                id: "1",
                docente: "Carmen Ortiz",
                horarios: [
                  { dia: "Martes", horaInicio: "14:15", horaFin: "15:45" },
                  { dia: "Jueves", horaInicio: "14:15", horaFin: "15:45" },
                ],
              },
            ],
          }
        ]
      },
      {
        id: "5",
        nombre: "5to Semestre",
        materias: [
          {
            id: "1",
            nombre: "Fisicoquímica",
            grupos: [
              {
                id: "1",
                docente: "Luis Hernández",
                horarios: [
                  { dia: "Lunes", horaInicio: "15:45", horaFin: "17:15" },
                  { dia: "Miércoles", horaInicio: "15:45", horaFin: "17:15" },
                ],
              },
            ],
          }
        ]
      }
    ]
  },
];
