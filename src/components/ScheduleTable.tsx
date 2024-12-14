import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

const daysOfWeek = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
const hours = ["8:00 AM", "9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM"];

const ScheduleTable = () => {
  return (
    <TableContainer component={Paper}>
      <Table>
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
          {hours.map((hour, index) => (
            <TableRow key={index}>
              <TableCell style={{ border: "1px solid #ddd" }}>{hour}</TableCell>
              {daysOfWeek.map((_, dayIndex) => (
                <TableCell
                  key={dayIndex}
                  align="center"
                  style={{ border: "1px solid #ddd" }}
                >
                  {/* Aquí puedes agregar contenido como clases o eventos */}
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
