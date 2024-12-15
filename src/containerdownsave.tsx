import * as React from 'react';
import { styled, useTheme, ThemeProvider } from '@mui/material/styles';
import DashboardIcon from '@mui/icons-material/Dashboard';
import { AppProvider, Navigation, Router } from '@toolpad/core/AppProvider';
import { PageContainer } from '@toolpad/core/PageContainer';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import PrintIcon from '@mui/icons-material/Print';
import DownloadIcon from '@mui/icons-material/Download';

const NAVIGATION: Navigation = [
  {
    segment: 'orders',
    title: 'Orders',
    icon: <DashboardIcon />,
  },
];

function useDemoRouter(initialPath: string): Router {
  const [pathname, setPathname] = React.useState(initialPath);

  const router = React.useMemo(() => {
    return {
      pathname,
      searchParams: new URLSearchParams(),
      navigate: (path: string | URL) => setPathname(String(path)),
    };
  }, [pathname]);

  return router;
}

const Skeleton = styled('div')<{ height: number }>(({ theme, height }) => ({
  backgroundColor: theme.palette.action.hover,
  borderRadius: theme.shape.borderRadius,
  height,
  content: '" "',
}));

function PageToolbar() {
  return (
    <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 2 }}>
      <Button
        variant="outlined"
        size="small"
        color="primary"
        startIcon={<DownloadIcon fontSize="inherit" />}
      >
        Download
      </Button>
      <Button
        variant="outlined"
        size="small"
        color="primary"
        startIcon={<PrintIcon fontSize="inherit" />}
      >
        Print
      </Button>
    </Stack>
  );
}

export default function PageContainerBasic(props: any) {
  const { window } = props;
  const router = useDemoRouter('/orders');
  const theme = useTheme();
  const demoWindow = window ? window() : undefined;

  return (
    <ThemeProvider theme={theme}>
      <AppProvider
        navigation={NAVIGATION}
        router={router}
        theme={theme}
        window={demoWindow}
        branding={{
          title: 'ACME Inc.',
        }}
      >
        <Paper sx={{ p: 2, width: '100%' }}>
          <PageToolbar />
          <PageContainer>
            <Grid container spacing={1}>
              <Grid item xs={5} />
              <Grid item xs={12}>
                <Skeleton height={14} />
              </Grid>
              <Grid item xs={12}>
                <Skeleton height={14} />
              </Grid>
              <Grid item xs={4}>
                <Skeleton height={100} />
              </Grid>
              <Grid item xs={8}>
                <Skeleton height={100} />
              </Grid>
            </Grid>
          </PageContainer>
        </Paper>
      </AppProvider>
    </ThemeProvider>
  );
}
