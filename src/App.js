import './App.css';
import React from 'react';
import RoutesApp from './routes';
import AppAppBar from './components/home/components/AppAppBar';
import { Grid } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import getLPTheme from './components/home/getLPTheme';




function App() {
  const [mode, setMode] = React.useState('light');
  const [showCustomTheme, setShowCustomTheme] = React.useState(true);
  const LPtheme = createTheme(getLPTheme(mode));
  const defaultTheme = createTheme({ palette: { mode } });

  const toggleCustomTheme = () => {
    setShowCustomTheme((prev) => !prev);
  };

  const toggleColorMode = () => {
    setMode((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };
  return (
    <>
      <ThemeProvider theme={showCustomTheme ? LPtheme : defaultTheme}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <AppAppBar mode={mode} toggleColorMode={toggleColorMode} />
          </Grid>
          <Grid item xs={12}>
            <RoutesApp />
          </Grid>
        </Grid>
      </ThemeProvider>
    </>
  );
}

export default App;
