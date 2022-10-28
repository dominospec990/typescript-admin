import { CssBaseline, ThemeProvider } from '@mui/material';
import { useMode, ColorModeContext } from './assets/theme/theme';
import MainLayout from './components/Layout/MainLayout';

function App() {
  const { theme, colorMode } = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <main className="content">
            <MainLayout />
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
