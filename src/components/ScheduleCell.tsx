import React from "react";
import { Select, MenuItem } from "@mui/material";

const ScheduleCell = () => {
  const [className, setClassName] = React.useState("");

  return (
    <Select
      value={className}
      onChange={(e) => setClassName(e.target.value)}
      fullWidth
    >
      <MenuItem value="Matemáticas">Matemáticas</MenuItem>
      <MenuItem value="Física">Física</MenuItem>
      <MenuItem value="Química">Química</MenuItem>
    </Select>
  );
};

export default ScheduleCell;
