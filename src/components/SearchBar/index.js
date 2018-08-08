import React from 'react';
import {connect} from 'react-redux';
import Select from 'react-select';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import Control from './Control';
import NoOptionsMessage from './NoOptionsMessage';
import Option from './Option';
import Placeholder from './Placeholder';
import ValueContainer from './ValueContainer'
import {updateSearchValue} from './actions'

const additionalOptions = [
  {label: 'Everything', value: undefined},
  {label: 'Sodium', value: 'sodium'},
  {label: 'Isethionate', value: 'Isethionate'}
]

const components = {
  Control,
  NoOptionsMessage,
  Option,
  Placeholder,
  ValueContainer
};

class SearchBar extends React.Component {
  handleChange = (value) => {
    this.props.updateSearchValue(value);
 };

  render() {
    const {classes} = this.props;

    return (
      <div className={classes.SearchBar}>
        <Select
            autofocus
            classes={classes}
            components={components}
            onChange={this.handleChange}
            options={[...additionalOptions, ...this.props.options]}
            value={this.props.value}
        />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    options: state.searchBar.options,
    value: state.searchBar.value
  }
}

export default connect(mapStateToProps, {updateSearchValue})(withStyles(styles)(SearchBar));
