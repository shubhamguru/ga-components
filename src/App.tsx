import './App.css';
import Index from './presentation/pages';
import { createTheme, ThemeProvider} from '@mui/material/styles';
import ThemeColor from './constants/theme-color';

const theme = createTheme({
  palette:{
    primary:{
      main: ThemeColor.WARNING,
      contrastText: ThemeColor.DARK
    },
    secondary:{
      light: ThemeColor.LIGHT,
      main: ThemeColor.SECONDARY,
      contrastText: ThemeColor.LIGHT
    },
    error:{
      main: ThemeColor.ERROR
    },
    warning:{
      light: ThemeColor.WARNING_LIGHT,
      main: ThemeColor.WARNING
    },
  }
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Index/>
    </ThemeProvider>  
  );
}

export default App;
