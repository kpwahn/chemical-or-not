import React from 'react';
import TextField from '@material-ui/core/TextField';
import InputComponent from './InputComponent';

function Control(props) {
  return (
    <TextField
      fullWidth
      InputProps={{
        inputComponent: InputComponent,
        inputProps: {
          className: props.selectProps.classes.input,
          ref: props.innerRef,
          children: props.children,
          ...props.innerProps,
        },
      }}
    />
  );
}

export default Control;
