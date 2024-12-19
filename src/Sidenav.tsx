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
import html2canvas from "html2canvas"; // Biblioteca para descargar el horario como imagen
//import ArrowBackIcon from '@mui/icons-material/ArrowBack'; // Icono para regresar
import SchoolIcon from '@mui/icons-material/School'; // Icono para las carreras
import BookIcon from '@mui/icons-material/Book'; // Icono para los semestres
import SubjectIcon from '@mui/icons-material/MenuBook'; // Icono para las materias
import GroupIcon from '@mui/icons-material/Group'; // Icono para los grupos
import Checkbox from '@mui/material/Checkbox'; // Check para seleccionar grupo
import CleaningServicesIcon from '@mui/icons-material/CleaningServices'; // Icono para restablecer horario
import ImageIcon from '@mui/icons-material/Image'; // Icono para guardar horario como imagen
//import DarkModeIcon from '@mui/icons-material/DarkMode'; // Icono para el mode oscuro
import HelpIcon from '@mui/icons-material/Help'; // Icono de preguntas frecuentes
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLess from '@mui/icons-material/ExpandLess'; // ExpandLess y ExpandMore indican si el semestre está expandido o colapsado
import ExpandMore from '@mui/icons-material/ExpandMore';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import { Accordion, AccordionDetails, AccordionSummary, Button, Collapse, Dialog, DialogActions, DialogContent, DialogContentText, DialogProps, DialogTitle, Stack } from '@mui/material'; // para mostrar u ocultar las materias
import ScheduleTable from "./components/ScheduleTable"; // Componente tabla de horario
import { Alert, Snackbar } from '@mui/material'; // Importar Alert y Snackbar para mostrar notificaciones

// Importacion de las carreras desde el archivo data.ts
import { data, Carrera, Horario } from './components/data';

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

interface SelectedHorario {
  dia: string;
  horaInicio: string;
  horaFin: string;
  materia: string;
  grupo: string;
}

export default function Sidenav() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [selectedCarrera, setSelectedCarrera] = React.useState<Carrera | null>(null); // Carrera seleccionada
  const [expandedSemestre, setExpandedSemestre] = React.useState<string | null>(null); // Semestre expandido
  const [expandedMateria, setExpandedMateria] = React.useState<string | null>(null); // Estado para controlar las materias expandidas
  const [selectedHorarios, setSelectedHorarios] = React.useState<SelectedHorario[]>([]); // Estado de los horarios de un grupo
  const [openDialog, setOpenDialog] = React.useState(false); // Estado del dialogo de confirmación de restablecimiento
  const [openDialogFAQ, setOpenDialogFAQ] = React.useState(false); // Estado del dialogo de FAQ
  const [scroll, setScroll] = React.useState<DialogProps['scroll']>('paper'); // Scroll sobre el mismo cuadro de dialogo de FAQ
  const [alertOpen, setAlertOpen] = React.useState(false); // Estado para controlar la alerta de choque de materias
  const [openAlertDialog, setOpenAlertDialog] = React.useState(false); // cuando se intenta guardar un horario vacio


  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  // Abre el Dialog de confirmacion
  const handleOpenDialog = () => setOpenDialog(true);

  // Cierra el Dialog de confirmacion
  const handleCloseDialog = () => setOpenDialog(false);

  // Abre el Dialog de preguntas frecuentes
  const handleClickOpen = (scrollType: DialogProps['scroll']) => () => {
    setOpenDialogFAQ(true);
    setScroll(scrollType);
  };

  // Cierra el Dialog de preguntas frecuentes
  const handleCloseDialogFAQ = () => {
    setOpenDialogFAQ(false);
  };

  const handleCarreraClick = (carrera: Carrera) => {
    setSelectedCarrera(carrera); // Guardar la carrera seleccionada
    setExpandedSemestre(null);; // Reiniciar expansión
    setExpandedMateria(null); // Reiniciar expansión de materias
  };

  /*const handleBackClick = () => {
    setSelectedCarrera(null); // Regresar a la lista de carreras
    setExpandedSemestre(null);
    setExpandedMateria(null);
  };*/

  const handleSemestreClick = (semestreId: string) => {
    setExpandedSemestre((prev) => (prev === semestreId ? null : semestreId)); // Alternar expandir/colapsar
    setExpandedMateria(null); // Reiniciar expansión de materias al cambiar de semestre
  };

  // Función para manejar la expansión/colapso de materias
  const handleMateriaClick = (materiaId: string) => {
    setExpandedMateria((prev) => (prev === materiaId ? null : materiaId));
  };

  // Estado para manejar los horarios seleccionados 
  // Funcion probada de choque pero es la que está sin la aletar de choque
  /*const handleGrupoCheck = (materia: string, grupo: string, horarios: Horario[]) => {
    setSelectedHorarios((prev) => {
      const alreadySelected = prev.some(
        (item) => item.materia === materia && item.grupo === grupo
      );
      if (alreadySelected) {
        return prev.filter(
          (item) => !(item.materia === materia && item.grupo === grupo)
        );
      } else {
        const newHorarios = horarios.map((h) => ({
          dia: h.dia,
          horaInicio: h.horaInicio,
          horaFin: h.horaFin,
          materia,
          grupo,
        }));
        return [...prev, ...newHorarios];
      }
    });
  };*/

  // ya implementado la alerta
  const handleGrupoCheck = (materia: string, grupo: string, horarios: Horario[]) => {
    // Mapear los nuevos horarios seleccionados
    const newHorarios = horarios.map((h) => ({
      dia: h.dia,
      horaInicio: h.horaInicio,
      horaFin: h.horaFin,
      materia,
      grupo,
    }));
  
    setSelectedHorarios((prev) => {
      const alreadySelected = prev.some(
        (item) => item.materia === materia && item.grupo === grupo
      );
  
      if (alreadySelected) {
        // Si ya estaba seleccionado, lo eliminamos (sin verificar conflicto)
        return prev.filter((item) => !(item.materia === materia && item.grupo === grupo));
      } else {
        // Si no estaba seleccionado, verificamos si hay conflicto
        const hasConflict = newHorarios.some((newHorario) =>
          prev.some(
            (existingHorario) =>
              existingHorario.dia === newHorario.dia && // Mismo día
              !(
                newHorario.horaFin <= existingHorario.horaInicio || // Sin traslape: termina antes de empezar
                newHorario.horaInicio >= existingHorario.horaFin // Sin traslape: empieza después de terminar
              )
          )
        );
  
        // Mostrar alerta si hay conflicto
        if (hasConflict) {
          setAlertOpen(true);
        }
  
        // Retornar el nuevo estado con los horarios añadidos
        return [...prev, ...newHorarios];
      }
    });
  };

  // Comprueba si un grupo específico ya está en selectedHorarios
  const isGrupoChecked = (materia: string, grupo: string) => {
    return selectedHorarios.some(
      (h) => h.materia === materia && h.grupo === grupo
    );
  };

  // Restablece los horarios después de confirmar
  const handleConfirmClear = () => {
    setSelectedHorarios([]); // Limpia los horarios seleccionados
    setOpenDialog(false); // Cierra el Dialog
  };

  // Función para capturar la tabla y guardarla como imagen
  const handleDownloadImage = () => {
    const tableElement = document.getElementById('schedule-table'); // Obtiene el ID del contenedor de la tabla
    if (tableElement) {
      html2canvas(tableElement, {
        //scrollY: -window.scrollY,
        backgroundColor: "#FFFFFF", // Forzar fondo blanco de la tabla de horario ********
        scale: 2, // Aumentar la calidad de la imagen
      }).then((canvas) => {
        const link = document.createElement('a');
        link.download = 'horario.png'; // Nombre del archivo descargado
        link.href = canvas.toDataURL('image/png');
        link.click();
      });
    }
  };

  // para mostrar el diálogo si no hay horarios seleccionados
  const handleDownloadClick = () => {
    if (selectedHorarios.length === 0) {
      handleOpenAlertDialog();
      return;
    }
    handleDownloadImage();
  };

  // Cerrar alerta de choque de materias
  const handleCloseAlert = () => {
    setAlertOpen(false);
  };

  // Funciones para Abrir y Cerrar el Diálogo de guardar horario vacio
  const handleOpenAlertDialog = () => {
    setOpenAlertDialog(true);
  };
  
  const handleCloseAlertDialog = () => {
    setOpenAlertDialog(false);
  };

  return (
    <Box sx={{ display: 'flex', background: 'white' }}>
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
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <IconButton onClick={handleClickOpen('paper')} size="large" aria-label="show 4 new mails" color="inherit">
              <HelpIcon />
            </IconButton>
            {/* Dialog de preguntas frecuentes */}
            <Dialog
              open={openDialogFAQ}
              onClose={handleCloseDialogFAQ}
              scroll={scroll}
              aria-labelledby="scroll-dialog-title"
              aria-describedby="scroll-dialog-description"
            >
              <DialogTitle id="scroll-dialog-title">Ayuda</DialogTitle>
              <DialogContent dividers={scroll === 'paper'}>
                <DialogContentText id="scroll-dialog-description">
                  {/* FAQ sobre la creación de horarios */}
                  <div>
                    <Accordion>
                      <AccordionSummary expandIcon={<ExpandMoreIcon />} id="faq1">
                        <Typography variant="h6">¿Cómo puedo crear un horario?</Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Typography>
                          Para crear un horario, selecciona las materias que deseas cursar y asigna las horas correspondientes a cada una. Luego, podrás ver la distribución en el calendario y ajustar según sea necesario.
                        </Typography>
                      </AccordionDetails>
                    </Accordion>

                    <Accordion>
                      <AccordionSummary expandIcon={<ExpandMoreIcon />} id="faq2">
                        <Typography variant="h6">¿Qué debo hacer si hay conflictos entre las materias?</Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Typography>
                          Si hay un conflicto de horarios, el sistema te notificará. Puedes ajustar los horarios manualmente o seleccionar otras materias que no tengan conflictos.
                        </Typography>
                      </AccordionDetails>
                    </Accordion>

                    <Accordion>
                      <AccordionSummary expandIcon={<ExpandMoreIcon />} id="faq3">
                        <Typography variant="h6">¿Puedo modificar mi horario después de haberlo creado?</Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Typography>
                          Sí, puedes modificar tu horario en cualquier momento antes de la fecha límite para la inscripción. Solo necesitas acceder a la sección de tu horario y realizar los cambios necesarios.
                        </Typography>
                      </AccordionDetails>
                    </Accordion>

                    <Accordion>
                      <AccordionSummary expandIcon={<ExpandMoreIcon />} id="faq4">
                        <Typography variant="h6">¿Cómo puedo ver mi horario en formato visual?</Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Typography>
                          Una vez que hayas creado tu horario, puedes visualizarlo en formato de tabla o en un calendario, según lo que prefieras. Además, puedes imprimir o descargar el horario como JPG o PDF.
                        </Typography>
                      </AccordionDetails>
                    </Accordion>

                    <Accordion>
                      <AccordionSummary expandIcon={<ExpandMoreIcon />} id="faq5">
                        <Typography variant="h6">¿Qué sucede si no agrego todas las materias necesarias?</Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Typography>
                          El sistema te notificará si hay materias pendientes o necesarias para completar tu plan de estudios. Asegúrate de revisar los requisitos de tu carrera para evitar omisiones.
                        </Typography>
                      </AccordionDetails>
                    </Accordion>
                  </div>
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button onClick={handleCloseDialogFAQ}>Aceptar</Button>
              </DialogActions>
            </Dialog>
            {/*<IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
            >
              <DarkModeIcon />
            </IconButton>*/}
          </Box>
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
        <DrawerHeader sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", paddingX: 2 }}>
          {/* Breadcrumbs */}
          <Breadcrumbs aria-label="breadcrumb">
            <Link
              underline="hover"
              color="inherit"
              onClick={() => setSelectedCarrera(null)} // Regresar a "Carreras"
              sx={{
                cursor: "pointer",
                "&:hover": {
                  color: "inherit", // Mantiene el color original al pasar el mouse
                },
              }}
            >
              Carreras
            </Link>
            {selectedCarrera && (
              <Typography color="text.primary">
                {selectedCarrera.nombre}
              </Typography>
            )}
          </Breadcrumbs>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        {selectedCarrera ? (
          // Mostrar los semestres de la carrera seleccionada
          <>
            {/* <List>
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
              {selectedCarrera.nombre}
            </Typography> */}
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
                                  <Checkbox 
                                    checked={isGrupoChecked(materia.nombre, grupo.id)} // Sincroniza visualmente el estado del checkbox
                                    onChange={() =>
                                      handleGrupoCheck(materia.nombre, grupo.id, grupo.horarios)
                                    }
                                  />
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
            {/* <Typography variant='subtitle1' sx={{ padding: 2 }}>
              Carreras
            </Typography> */}
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
        {/* Alerta para choques de horarios */}
        <Snackbar
          open={alertOpen}
          autoHideDuration={4000} // Duración de la alerta
          onClose={handleCloseAlert}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        >
          <Alert onClose={handleCloseAlert} severity="warning" sx={{ width: '100%' }}>
            Hay un choque de horarios con otro grupo seleccionado.
          </Alert>
        </Snackbar>
        {/* Tabla de horarios */}
        <Box sx={{ flexGrow: 1 }}>
          <ScheduleTable horarios={selectedHorarios} />
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'center', padding: 2 }}>
          <Stack direction="row" spacing={2}>
            {/* Botón para RESTABLECER el horario */}
            <Button variant="contained" onClick={handleOpenDialog} startIcon={<CleaningServicesIcon />}>
              Restablecer
            </Button>
            {/* Dialog de confirmación para restablecer horario */}
            <Dialog
              open={openDialog}
              onClose={handleCloseDialog}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
            >
              <DialogTitle id="alert-dialog-title">
                {"¿Estás seguro de que deseas restablecer el horario?"}
              </DialogTitle>
              <DialogContent>
                <DialogContentText id="alert-dialog-description">
                  Esta acción eliminará todos los grupos seleccionados.
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button onClick={handleCloseDialog} variant="contained">Cancelar</Button>
                <Button onClick={handleConfirmClear} autoFocus color="error" variant="contained">Restablecer</Button>
              </DialogActions>
            </Dialog>
            {/* Botón para GUARDAR el horario como imagen */}
            <Button variant="contained" onClick={handleDownloadClick} endIcon={<ImageIcon />}>
              Guardar
            </Button>
            <Dialog
              open={openAlertDialog}
              onClose={handleCloseAlertDialog}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
            >
              <DialogTitle id="alert-dialog-title">{"Horario Vacío"}</DialogTitle>
              <DialogContent>
                <DialogContentText id="alert-dialog-description">
                  Selecciona al menos una materia antes de guardar.
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button variant="contained" onClick={handleCloseAlertDialog} autoFocus>
                  Aceptar
                </Button>
              </DialogActions>
            </Dialog>
          </Stack>
        </Box>
      </Main>
    </Box>
  );
}
