import Image from 'next/image';

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import { makeStyles } from '@material-ui/core/styles';

const works = [
  {
    iconAddress: '/icons/pencil-ruler.svg',
    title: 'Avaliações Neuropicopedagogicas',
    text: 'São testes através dos quais são verificados transtornos que contribuem para a dificuldade na aprendizagem.',
  },
  {
    iconAddress: '/icons/touch.svg',
    title: 'Intervenções Neuropicopedagogicas',
    text: 'Planejamento de programa terapêutico para a estimulação dos mecanismos e problemas neurológicos.',
  },
  {
    iconAddress: '/icons/book-lover.svg',
    title: 'Mentoria Educacional',
    text: 'Organização e planejamento da rotina escolar da criança e do adolescente, objetivando maior autonomia e autodidatismo.',
  },
  {
    iconAddress: '/icons/microphone.svg',
    title: 'Palestras',
    text: 'Orientação para pais e mestres, no que diz respeito a identificação e formas de condução dos agentes limitantes do aprendizado da criança e do adolescente.',
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    margin: `${theme.spacing(1)}px 0`,
    padding: theme.spacing(1),
  },

  worksDesktop: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
  },

  worksMobile: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
  },

  title: {
    marginBottom: theme.spacing(1),
  },

  workTitle: {
    height: '3rem',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },

  workText: {
    fontSize: '.7rem',
  },
}));

const MyWork = ({ desktopLayout }) => {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <Typography
        variant="h6"
        align="center"
        component="h2"
        className={classes.title}
      >
        Meu Trabalho
      </Typography>

      <Box
        className={desktopLayout ? classes.worksDesktop : classes.worksMobile}
      >
        {works.map((work) => (
          <Box key={work.title} px={1}>
            <Typography
              align="center"
              variant="subtitle2"
              component="h3"
              className={classes.workTitle}
            >
              {work.title}
            </Typography>
            <Box display="flex" justifyContent="center" my={1}>
              <Image src={work.iconAddress} height="50px" width="50px" />
            </Box>
            <Typography align="center" className={classes.workText}>
              {work.text}
            </Typography>
          </Box>
        ))}
      </Box>
    </Paper>
  );
};

export default MyWork;
