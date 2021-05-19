import { createMuiTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#dd8e58',
    },
    secondary: {
      main: '#708a81',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#e5d1b8',
    },
  },
});

export default theme;
