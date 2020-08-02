import React from 'react';
import { 
  CardMedia, 
  Card,
} from '@material-ui/core';
import { DirectoryTitle } from '../../atoms/index';
import { useStyle } from './style';

export function DirectoryCard() {
  const classes = useStyle();
  return (
    <Card className={classes.root}>
      <DirectoryTitle />
      <CardMedia 
        className={classes.image}
        component='img'
        image='/images/Directory.jpg'
        title='AtomicDesignDirectory'
      /> 
    </Card>
  );
}; 