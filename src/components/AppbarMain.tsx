import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  logoText: {
    fontFamily: "'Pinyon Script', cursive",
    fontSize: '2rem',
    flexGrow: 1,
  },

  menu: {
    display: 'flex',
  },
}));

const AppbarMain = () => {
  const classes = useStyles();

  return (
    <AppBar position="static">
      <Toolbar className={classes.menu}>
        <Typography
          align="center"
          variant="h6"
          component="div"
          className={classes.logoText}
        >
          Luzia Chaves
        </Typography>
        <IconButton>
          <WhatsAppIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default AppbarMain;
