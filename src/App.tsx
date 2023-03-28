import { ConfirmProvider } from "material-ui-confirm";
import UsersContextProvider from './context/UsersContext';
import AppRouter from './router/AppRouter';
import { createTheme, ThemeProvider } from '@mui/material';
import React from "react";

const theme = createTheme({
  typography: {
    fontFamily: [
      'Inter',
      'sans-serif',
    ].join(','),
  },});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <ConfirmProvider>
    <div className="App">
      <UsersContextProvider>
      <AppRouter/>
      </UsersContextProvider>
    </div>
    </ConfirmProvider>
    </ThemeProvider>
  );
}

export default App;
