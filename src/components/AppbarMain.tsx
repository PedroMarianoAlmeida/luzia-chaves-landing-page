import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  logoText: {
    fontFamily: "'Satisfy', cursive",
    fontSize: '2rem',
    flexGrow: 1,
  },

  menu: {
    display: 'flex',
    backgroundColor: '#dd8e58',
  },

  icon: {
    color: 'white',
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
        <Link
          href="https://api.whatsapp.com/send?phone=5521971475463&text=Ol%C3%A1%20tudo%20bem%3F%20Luzia%2C%20voc%C3%AA%20pode%20ajudar%20meu%20filho(a)%20a%20ter%20mais%20aten%C3%A7%C3%A3o%20nos%20estudos%3F%20Aguardo%20seu%20contato"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconButton>
            <WhatsAppIcon className={classes.icon} />
          </IconButton>
        </Link>
      </Toolbar>
    </AppBar>
  );
};

export default AppbarMain;
