import { Link } from "react-router-dom";

import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { CheckCircleOutline, RadioButtonUncheckedOutlined } from '@material-ui/icons';
import Button from '@material-ui/core/Button';

const TodoCard = (props) => {
  const { id, title, completed } = props.todo;
  const { card, cardContent, icon, div } = props.classes;

  return (
    <Grid item xs={props.single ? 12 : 6} sm={props.single ? 10 : 4} md={props.single ? 8 : 2}>
      <Card className={card}>
        <CardContent className={cardContent}>
          <Typography gutterBottom variant="h5" component="h2">
            #{id}
          </Typography>
          <Typography gutterBottom variant="body1">
            Description
          </Typography>
          <Typography gutterBottom variant="body2" color="textSecondary">
            {title}
          </Typography>
        </CardContent>
        <CardContent>
          <Typography variant="body2" gutterBottom className={div}>
            {
              completed ?
                <CheckCircleOutline className={icon} fontSize="small" color="primary" /> :
                <RadioButtonUncheckedOutlined color="error" className={icon} fontSize="small" />
            }
            Completed
          </Typography>
        </CardContent>
        <CardActions>
          { props.single ?
              <Button size="small" color="primary" component={Link} to='/todos/'>Back</Button> :
              <Button color="primary" component={Link} to={`/todos/${id}`}>View</Button>
          }
        </CardActions>
      </Card>
    </Grid>
  );
};

export default TodoCard;
