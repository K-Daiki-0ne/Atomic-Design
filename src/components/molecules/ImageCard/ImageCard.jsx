import React from 'react';
import { ImageTitle } from '../../atoms/index';
import { 
  Card, 
  CardMedia,
} from '@material-ui/core';
import { useStyle } from './style';

export function ImageCard() {
  const classes = useStyle(); 
  return (
    <Card className={classes.root}>
      <ImageTitle />
      <CardMedia 
        className={classes.image}
        component='img'
        image="/images/WireFrame.jpg"
        title='WireFrame'
      />
    </Card>
  )
}