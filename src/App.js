import { Fragment, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import CssBaseline from '@material-ui/core/CssBaseline';

import Todos, { Todo } from './components/Todo/Todos';
import TopBar from './components/TopBar';
import { makeStyles } from '@material-ui/core/styles';

const App = () => {

  const useStyles = makeStyles(theme => ({
    cardGrid: {
      paddingTop: theme.spacing(4),
      paddingBottom: theme.spacing(2),
    },
    card: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
    },
    cardContent: {
      flexGrow: 1,
    },
    div: {
      display: 'flex',
      verticalAlign: 'middle'
    },
    icon: {
      marginTop: '-2px'
    }
  }));

  const [theme, setTheme] = useState(true);
  const light = {
    palette: {
      type: 'light',
      primary: {
        main: '#1976d2'
      }
    },
  };
  const dark = {
    palette: {
      type: 'dark',
      primary: {
        main: '#90caf9',
      },
    },
  };
  const applyTheme = createMuiTheme(theme ? dark : light);

  const classes = useStyles();

  return (
    <ThemeProvider theme={applyTheme}>
      <Fragment>
        <CssBaseline />
        <Container maxWidth="lg">
          <TopBar toggle={() => setTheme(!theme)} dark={theme} />
          <Grid className={classes.cardGrid} justify="center" container spacing={4}>
            <Switch>
              <Route path="/todos/:id" children={<Todo classes={classes} />} />
              <Route path="/todos" children={<Todos classes={classes} />} />
            </Switch>
          </Grid>
        </Container>
      </Fragment>
    </ThemeProvider>);
}

export default App;
