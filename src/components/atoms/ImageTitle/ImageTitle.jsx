import React from 'react';
import { Typography } from '@material-ui/core'
import { useStyle } from './style';

export function ImageTitle() {
  const classes = useStyle();
  return (
    <Typography
      className={classes.text}
      variant='h5'
    >
      作成したWireFrame
    </Typography>
  )
}