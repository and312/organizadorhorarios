import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ArrowBackIcon from '@mui/icons-material/ArrowBack'; // Icono para regresar
import SchoolIcon from '@mui/icons-material/School'; // Icono para las carreras
import BookIcon from '@mui/icons-material/Book'; // Icono para los semestres
import SubjectIcon from '@mui/icons-material/MenuBook'; // Icono para las materias
import GroupIcon from '@mui/icons-material/Group'; // Icono para los grupos
import Checkbox from '@mui/material/Checkbox'; // Check para seleccionar grupo
import ExpandLess from '@mui/icons-material/ExpandLess'; // ExpandLess y ExpandMore indican si el semestre está expandido o colapsado
import ExpandMore from '@mui/icons-material/ExpandMore';
import { Collapse } from '@mui/material'; // para mostrar u ocultar las materias
import ScheduleTable from "./components/ScheduleTable"; // Componente tabla de horario

// Importacion de las carreras desde el archivo data.ts
import { data, Carrera } from './components/data';

const drawerWidth = 340;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })<{
  open?: boolean;
}>(({ theme }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  transition: theme.transitions.create('margin', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: `-${drawerWidth}px`,
  variants: [
    {
      props: ({ open }) => open,
      style: {
        transition: theme.transitions.create('margin', {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
      },
    },
  ],
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  variants: [
    {
      props: ({ open }) => open,
      style: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: `${drawerWidth}px`,
        transition: theme.transitions.create(['margin', 'width'], {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen,
        }),
      },
    },
  ],
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

export default function Sidenav() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [selectedCarrera, setSelectedCarrera] = React.useState<Carrera | null>(null); // Carrera seleccionada
  const [expandedSemestre, setExpandedSemestre] = React.useState<string | null>(null); // Semestre expandido
  const [expandedMateria, setExpandedMateria] = React.useState<string | null>(null); // Estado para controlar las materias expandidas

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleCarreraClick = (carrera: Carrera) => {
    setSelectedCarrera(carrera); // Guardar la carrera seleccionada
    setExpandedSemestre(null);; // Reiniciar expansión
    setExpandedMateria(null); // Reiniciar expansión de materias
  };

  const handleBackClick = () => {
    setSelectedCarrera(null); // Regresar a la lista de carreras
    setExpandedSemestre(null);
    setExpandedMateria(null);
  };

  const handleSemestreClick = (semestreId: string) => {
    setExpandedSemestre((prev) => (prev === semestreId ? null : semestreId)); // Alternar expandir/colapsar
    setExpandedMateria(null); // Reiniciar expansión de materias al cambiar de semestre
  };

  // Función para manejar la expansión/colapso de materias
  const handleMateriaClick = (materiaId: string) => {
    setExpandedMateria((prev) => (prev === materiaId ? null : materiaId));
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={[
              {
                mr: 2,
              },
              open && { display: 'none' },
            ]}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Cappuchino
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        {selectedCarrera ? (
          // Mostrar los semestres de la carrera seleccionada
          <>
            <List>
              <ListItem disablePadding>
                <ListItemButton onClick={handleBackClick}>
                  <ListItemIcon>
                    <ArrowBackIcon />
                  </ListItemIcon>
                  <ListItemText primary="Volver a Carreras" />
                </ListItemButton>
              </ListItem>
            </List>
            <Divider />
            <Typography variant='subtitle1' sx={{ padding: 2 }}>
              Semestres en {selectedCarrera.nombre}
            </Typography>
            <List>
              {selectedCarrera.semestres.map((semestre) => (
                <React.Fragment key={semestre.id}>
                  <ListItemButton onClick={() => handleSemestreClick(semestre.id)}>
                    <ListItemIcon>
                      <BookIcon />
                    </ListItemIcon>
                    <ListItemText primary={semestre.nombre} />
                    {expandedSemestre === semestre.id ? <ExpandLess /> : <ExpandMore />}
                  </ListItemButton>
                  <Collapse in={expandedSemestre === semestre.id} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                      {semestre.materias.map((materia) => (
                        <React.Fragment key={materia.id}>
                          <ListItemButton
                            sx={{ pl: 4 }}
                            onClick={() => handleMateriaClick(materia.id)}
                          >
                            <ListItemIcon>
                              <SubjectIcon />
                            </ListItemIcon>
                            <ListItemText primary={materia.nombre} />
                            {expandedMateria === materia.id ? <ExpandLess /> : <ExpandMore />}
                          </ListItemButton>
                          {/* Mostrar los grupos de la materia seleccionada */}
                          <Collapse in={expandedMateria === materia.id} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                              {materia.grupos.map((grupo) => (
                                <ListItem key={grupo.id} sx={{ pl: 6 }}>
                                  <ListItemIcon>
                                    <GroupIcon />
                                  </ListItemIcon>
                                  <ListItemText
                                    primary={`Grupo ${grupo.id} - ${grupo.docente}`}
                                  />
                                  <Checkbox />
                                </ListItem>
                              ))}
                            </List>
                          </Collapse>
                        </React.Fragment>
                      ))}
                    </List>
                  </Collapse>
                </React.Fragment>
              ))}
            </List>
          </>
        ) : (
          // Mostrar la lista de carreras
          <>
            <Typography variant='subtitle1' sx={{ padding: 2 }}>
              Carreras
            </Typography>
            <List>
              {data.map((carrera) => (
                <ListItem key={carrera.id} disablePadding>
                  <ListItemButton onClick={() => handleCarreraClick(carrera)}>
                    <ListItemIcon>
                      <SchoolIcon />
                    </ListItemIcon>
                    <ListItemText primary={carrera.nombre} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </>
        )}
        <Divider />
      </Drawer>
      <Main open={open}>
        <DrawerHeader />
        <ScheduleTable /> {/* Tabla de horarios */}
      </Main>
    </Box>
  );
}
//