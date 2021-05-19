import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Box from '@material-ui/core/Box';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import { makeStyles } from '@material-ui/core/styles';

import AvatarResizable from './reusable/AvatarResizable';

const useStyles = makeStyles((theme) => ({
  rootMobile: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: theme.spacing(2),
  },

  rootDesktop: {
    display: 'grid',
    gridTemplateColumns: '2fr 1fr',
    gridTemplateAreas: `    
    "nome foto"  
    "títulos foto"
      "divisão divisão"
      "texto texto"
      `,
    padding: theme.spacing(1),
    alignItems: 'center',
    marginTop: theme.spacing(2),
  },

  name: {
    gridArea: 'nome',
  },

  titles: {
    gridArea: 'títulos',
  },

  image: {
    gridArea: 'foto',
  },

  divider: {
    gridArea: 'divisão',
    margin: `${theme.spacing(2)}px 0`,
  },

  textDesktop: {
    gridArea: 'texto',
  },

  textMobile: {
    margin: `0 ${theme.spacing(1)}px ${theme.spacing(1)}px ${theme.spacing(
      1
    )}px`,
  },

  nameText: {
    fontFamily: "'Satisfy', cursive",
    fontSize: '2rem',
    marginLeft: theme.spacing(1),
  },

  nameIcon: {
    alignSelf: 'center',
  },
}));

const About = ({ desktopLayout }) => {
  const classes = useStyles();

  return (
    <Paper className={desktopLayout ? classes.rootDesktop : classes.rootMobile}>
      <Box
        className={desktopLayout ? classes.name : ''}
        display="flex"
        alignContent="center"
        justifyContent="center"
      >
        <BookmarkBorderIcon className={classes.nameIcon} />
        <Typography
          align="center"
          variant="h6"
          className={classes.nameText}
          display="inline"
        >
          Luzia Chaves
        </Typography>
      </Box>

      <Typography
        align="center"
        variant="h5"
        className={desktopLayout ? classes.titles : ''}
      >
        PEDAGOGA - NEUROPSICOPEDAGOGA CLÍNICA E INSTITUCIONAL - PALESTRANTE
      </Typography>

      <Box
        className={desktopLayout ? classes.image : ''}
        display="flex"
        justifyContent="center"
      >
        <AvatarResizable
          alt="Luzia Chaves - Foto de Perfil"
          src="profile.jpeg"
          spacing={30}
        />
      </Box>
      <Divider className={classes.divider} />
      <Box className={desktopLayout ? classes.textDesktop : classes.textMobile}>
        <Typography>
          Sou mãe, pedagoga especializada em neuropsicopedagogia, atuo há mais
          de 10 anos no ambiente escolar.
        </Typography>
        <Typography>
          Meu trabalho é descobrir, através de avaliações, possíveis transtornos
          que contribuem para a dificuldade de aprendizagem.{' '}
        </Typography>
        <Typography>
          Planejo intervenções e programas terapêuticos para a reabilitação
          cognitiva.
        </Typography>
      </Box>
    </Paper>
  );
};

export default About;
