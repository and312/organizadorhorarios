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
import SchoolIcon from '@mui/icons-material/School'; // icono para las carreras
import BookIcon from '@mui/icons-material/Book'; // Icono para los semestres
//import ScheduleTable from "./components/ScheduleTable"; // horario

// Importacion de las carreras desde el archivo data.ts
import { data, Carrera, Semestre } from './components/data';

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

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleCarreraClick = (carrera: Carrera) => {
    setSelectedCarrera(carrera); // Guardar la carrera seleccionada
  };

  const handleBackClick = () => {
    setSelectedCarrera(null); // Regresar a la lista de carreras
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
                <ListItem key={semestre.id} disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <BookIcon />
                    </ListItemIcon>
                    <ListItemText primary={semestre.nombre} />
                  </ListItemButton>
                </ListItem>
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
        {/* <Typography sx={{ marginBottom: 2 }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua.
        </Typography>
        <div>
          <ScheduleTable />
        </div> */}
      </Main>
    </Box>
  );
}
//