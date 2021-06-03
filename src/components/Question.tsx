import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';
import Divider from '@material-ui/core/Divider';
import Box from '@material-ui/core/Box';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import { makeStyles } from '@material-ui/core/styles';

const sintomas = [
  'Atraso no desenvolvimento global',
  'Aquisição lenta do vocabulário',
  'Orientação espacial',
  'Baixo rendimento escolar',
  'Falta de interesse nos estudos',
  'Dificuldade raciocínio lógico',
  'Falta de atenção e concentração',
  'Dificuldade para interpretar o que lê',
  'Entre outros',
];

const dimensões = [
  'Anamnese;',
  'Habilidades de leitura e escrita;',
  'Habilidades psicomotoras;',
  'Observação de como o indivíduo aprende, qual o vínculo que possui com a aprendizagem',
];

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(1),
    padding: theme.spacing(1),
  },

  chip: {
    margin: theme.spacing(0.5),
  },

  divider: {
    margin: `${theme.spacing(2)}px 0`,
  },
}));

const Question = () => {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <Typography variant="h6" align="center" component="h2">
        QUANDO DEVO PROCURAR UM NEUROPSICOPEDAGOGO?
      </Typography>

      <Typography display="inline">
        Quando observar alguns sinais, sendo eles:
      </Typography>
      {sintomas.map((sintoma) => (
        <Chip
          variant="outlined"
          key={sintoma}
          label={sintoma}
          className={classes.chip}
        />
      ))}

      <Divider className={classes.divider} />

      <Typography>
        Essa avaliação não serve apenas para identificar problemas, mas também
        para traçar estratégias de intervenção com o aprendiz, além de orientar
        a família e escola.
      </Typography>

      <Typography>
        Esse processo de avaliação é realizado de forma estratégica e específica
        para cada faixa etária, por meio de instrumentos adequados, percorrendo
        as dimensões a seguir:
      </Typography>

      <List>
        {dimensões.map((dimensão) => (
          <ListItem key={dimensão}>
            <ListItemIcon>
              <PlayArrowIcon />
            </ListItemIcon>
            <ListItemText>{dimensão}</ListItemText>
          </ListItem>
        ))}
      </List>
    </Paper>
  );
};

export default Question;
