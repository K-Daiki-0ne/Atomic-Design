import React from 'react';
import { Typography } from '@material-ui/core';
import { useStyle } from './style';

// AtomicDesignを説明するためのタイトル
export function DescriptionHeader() {
  const classes = useStyle();
  return (
    <Typography
      variant='h6'
      className={classes.text}
    >
      AtomicDesignについて
    </Typography>
  )
}
