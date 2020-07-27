import React from 'react';
import { 
  CardMedia, 
  Card,
  Typography
} from '@material-ui/core';
import { useStyle } from './style';

export function DirectoryCard() {
  const classes = useStyle();
  return (
    <Card>
      <Typography
        variant='h5'
      >
        Directory Structure
      </Typography>
      <CardMedia 
        className={classes.image}
        component='img'
        image='/images/Directory.jpg'
        title='AtomicDesignDirectory'
      /> 
    </Card>
  );
}; 