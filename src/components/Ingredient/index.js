import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {withStyles} from '@material-ui/core/styles';

import styles from './styles';

class Ingredient extends React.Component {
  render() {
    const {classes} = this.props;

    let Link = (
      <CardActions className={classes.cardActions}>
        <form action={this.props.link}>
          <Button size="small" color="primary" type="submit">
            Learn More
          </Button>
        </form>
      </CardActions>
    )

    return (
      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image={this.props.image}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="headline" component="h2">
            {this.props.label}
          </Typography>
          <Typography component="p">
            {this.props.description}
          </Typography>
        </CardContent>
        {this.props.link && Link}
      </Card>
    )
  }
}

export default withStyles(styles)(Ingredient);
