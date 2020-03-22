import React from 'react';
import TextField from '@material-ui/core/TextField';

import useStyles from './styles';



export default function CustomizedInputBase({ placeholder, value, id }) {
  const classes = useStyles();

  return (
    <TextField
      color='secondary'
      id={id}
      multiline
      rows='5'
      rowsMax='5'
      fullWidth
      margin='none'
      className={classes.input}
      placeholder={placeholder}
      variant='standard'
      inputProps={{ 'aria-label': 'google translate' }}
      value={value}
    />
  );
}
