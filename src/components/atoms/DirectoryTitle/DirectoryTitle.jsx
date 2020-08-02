import React from 'react';
import { Typography } from '@material-ui/core';
import { useStyle } from './style'

export function DirectoryTitle() {
  const classes = useStyle();
  return (
    <Typography
      variant='h5'
      className={classes.text}
    >
      AtomicDesignのディレクトリ構造
    </Typography>
  )
}