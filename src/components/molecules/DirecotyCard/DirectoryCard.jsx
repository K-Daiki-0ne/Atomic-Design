import React from 'react';
import { Card } from '@material-ui/core';
import { CardMedia } from '@material-ui/core';
import { useStyle } from './style';

export function DirectoryCard() {
  const classes = useStyle();
  return (
    <Card>
      <CardMedia 
        className={classes.image}
        component='img'
        image='/images/Directory.jpg'
        title='AtomicDesignDirectory'
      /> 
    </Card>
  );
}; 