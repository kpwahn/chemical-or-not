import React from 'react';
import {connect} from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles'

import Ingredient from '../Ingredient'

class Grid extends React.Component {
  render() {
    let {classes, options, value} = this.props;

    if (value) {
      options = this.props.options.filter((option) => {
        if(option.value.includes(this.props.value)) {
          return true;
        }
        return false;;
      })
    }

    return (
      <div className={classes.Grid}>
        {
          options.map((option) => {
            return (
              <Ingredient
                description={option.description}
                image={option.image}
                key={option.value}
                link={option.link}
                label={option.label}
              />
            );
          })
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    options: state.searchBar.options,
    value: state.searchBar.value.value
  }
}

export default connect(mapStateToProps, null)(withStyles(styles)(Grid));
