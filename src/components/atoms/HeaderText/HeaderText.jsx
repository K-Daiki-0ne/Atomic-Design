import React from 'react';
import { Typography } from '@material-ui/core';
import { useStyle } from './style';

export function HeaderText() {
  const classes = useStyle();
  return (
    <Typography
      variant='h1'
      className={classes.text}
    >
      AtomicDesignについての学習をまとめた記事
    </Typography>
  );
};