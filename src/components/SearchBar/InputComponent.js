import React from 'react';

function InputComponent({ inputRef, ...props }) {
  return <div ref={inputRef} {...props} />;
}

export default InputComponent;
