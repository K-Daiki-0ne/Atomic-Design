import React from 'react';
import { Typography } from '@material-ui/core';
import { useStyle } from './style';

export function AuthorText() {
  const classes = useStyle();
  return (
    <Typography
      className={classes.text}
      variant='h3'
    >
      Author <br />
      Kouguchi Daiki
    </Typography>
  )
}