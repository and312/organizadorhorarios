//import React from "react";
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
const hours = ["06:45 AM", "08:15 AM", "09:45 AM", "11:15 AM", "12:45 PM", "14:15 PM", "15:45 PM", "17:15 PM", "18:45 PM", "20:15 PM"];

const ScheduleTable = () => {
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
