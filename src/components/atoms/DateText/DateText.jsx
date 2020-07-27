import React from 'react';
import { Typography } from '@material-ui/core';
import { useStyle } from './style';

export function DateText() {
  const classes = useStyle();
  return (
    <Typography
      className={classes.text}
      aligin='center'
      variant='h3'
    >
      Created <br/>
      2020 07 28
    </Typography>
  )
}