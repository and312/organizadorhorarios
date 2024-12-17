import React, { useMemo } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

interface Horario {
  dia: string;
  horaInicio: string;
  horaFin: string;
  materia: string;
  grupo: string;
}

const daysOfWeek = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
const hours = ["06:45 AM", "08:15 AM", "09:45 AM", "11:15 AM", "12:45 PM", "14:15 PM", "15:45 PM", "17:15 PM", "18:45 PM", "20:15 PM"];

interface ScheduleTableProps {
  horarios: Horario[];
}

const ScheduleTable: React.FC<ScheduleTableProps> = ({ horarios }) => {
  // Genera colores únicos para cada grupo
  const groupColors = useMemo(() => {
    const colors: { [key: string]: string } = {};
    const colorPalette = [
      "#FFCDD2", "#C8E6C9", "#BBDEFB", "#FFF9C4", "#D1C4E9", "#B2DFDB", "#FFECB3", "#F8BBD0"
    ];

    let colorIndex = 0;

    horarios.forEach((h) => {
      const groupKey = `${h.materia}-${h.grupo}`;
      if (!colors[groupKey]) {
        colors[groupKey] = colorPalette[colorIndex % colorPalette.length];
        colorIndex++;
      }
    });
    return colors;
  }, [horarios]);

  // Renderiza el contenido de cada celda
  const getCellContent = (day: string, hour: string) => {
    return horarios
      .filter(
        (h) =>
          h.dia === day &&
          hour >= h.horaInicio &&
          hour < h.horaFin
      )
      .map((h, index) => {
        const groupKey = `${h.materia}-${h.grupo}`;
        const backgroundColor = groupColors[groupKey];
        return (
          <div
            key={index}
            style={{
              backgroundColor,
              padding: "8px",
              borderRadius: "4px",
              margin: "-4px", // "2px"
              color: "#000",
              //fontWeight: "bold",
            }}
          >
            <div>{h.materia}</div>
            <div>{`Grupo ${h.grupo}`}</div>
          </div>
        );
        /*<div>
          <div style={{ fontWeight: "bold" }}>{h.materia}</div>
          <div>{`Grupo ${h.grupo}`}</div>
        </div>*/
      });
  };

  return (
    <TableContainer 
      id="schedule-table" // ID agregado para la captura como imagen, identifica la tabla
      component={Paper}
      sx={{
        overflowX: "auto",
        maxHeight: "80vh", // Scroll vertical
        margin: "auto",
      }}
    >
      <Table stickyHeader>
        {/* Cabecera con días de la semana */}
        <TableHead>
          <TableRow>
            <TableCell style={{ border: "1px solid #ddd" }}>Horas</TableCell>
            {daysOfWeek.map((day, index) => (
              <TableCell
                key={index}
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
              {daysOfWeek.map((day) => (
                <TableCell
                  key={`${day}-${hour}`}
                  align="center"
                  style={{
                    border: "1px solid #ddd",
                    position: "relative",
                    //verticalAlign: "top", // los cuadros de colores estaran en la parte de superior
                  }}
                >
                  {getCellContent(day, hour)}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ScheduleTable;
