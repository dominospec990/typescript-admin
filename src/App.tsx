import { CssBaseline, ThemeProvider } from '@mui/material';
import { useMode, ColorModeContext } from './assets/theme/theme';
import { AppRoutes } from './routes/index';

function App() {
  const { theme, colorMode } = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <AppRoutes />
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
