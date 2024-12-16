import React from 'react';
import { Grupo } from './data';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

interface ScheduleTableProps {
  grupos: Grupo[];
}

const ScheduleTable: React.FC<ScheduleTableProps> = ({ grupos }) => {
  const daysOfWeek = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
  const hours = ["06:45 AM", "08:15 AM", "09:45 AM", "11:15 AM", "12:45 PM", "14:15 PM", "15:45 PM", "17:15 PM", "18:45 PM", "20:15 PM"];

  // Colores predefinidos para los grupos
  const colors = ["#f48fb1", "#81c784", "#64b5f6", "#ffb74d", "#ff8a65", "#ba68c8"];

  // Asignacion de colores por grupo
  const colorMap = new Map<string, string>();
  grupos.forEach((grupo, index) => {
    if (!colorMap.has(grupo.id)) {
      colorMap.set(grupo.id, colors[index % colors.length]);
    }
  });

  /// Función para encontrar si hay un horario en la celda
  const getHorario = (day: string, hour: string) => {
    for (const grupo of grupos) {
      for (const h of grupo.horarios) {
        if (h.dia === day && h.horaInicio <= hour && h.horaFin > hour) {
          return { grupoId: grupo.id, ...h };
        }
      }
    }
    return null;
  };

  return (
    <TableContainer 
      component={Paper}
      sx={{
        overflowX: "auto",
        width: {
          xs: "100%", // Pantallas pequeñas
          sm: "100%", // Pantallas medianas
          md: "90%", // Pantallas grandes
          lg: "90%", // Pantallas muy grandes
        },
        margin: "auto",
      }}
    >
      <Table>
        {/* Cabecera con días de la semana */}
        <TableHead>
          <TableRow>
            <TableCell style={{ border: "1px solid #ddd" }}>Horas</TableCell>
            {daysOfWeek.map((day) => (
              <TableCell
                key={day}
                align="center"
                style={{ border: "1px solid #ddd" }}
              >
                {day}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>

        {/* Cuerpo con horas y celdas vacías */}
        <TableBody>
          {hours.map((hour) => (
            <TableRow key={hour}>
              <TableCell style={{ border: "1px solid #ddd" }}>{hour}</TableCell>
              {daysOfWeek.map((day) => {
                const horario = getHorario(day, hour);
                const backgroundColor = horario
                  ? colorMap.get(horario.grupoId)
                  : "inherit";
                return (
                  <TableCell
                    key={`${day}-${hour}`}
                    align="center"
                    style={{ 
                      border: "1px solid #ddd",
                      backgroundColor: backgroundColor || "inherit",
                      color: backgroundColor ? "white" : "inherit",
                      fontWeight: backgroundColor ? "bold" : "normal",
                    }}
                  >
                    {/* Aquí puedes agregar contenido como clases o eventos */}
                    {horario ? `${horario.horaInicio} - ${horario.horaFin}` : ""}
                  </TableCell>
                ); 
              })}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ScheduleTable;
