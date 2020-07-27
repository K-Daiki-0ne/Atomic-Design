import React from 'react';
import { 
  Card, 
  CardMedia,
  Typography
} from '@material-ui/core';
import { useStyle } from './style';

export function ImageCard() {
  const classes = useStyle(); 
  return (
    <Card className={classes.root}>
      <Typography
        className={classes.text}
        variant='h5'
      >
        WireFrame
      </Typography>
      <CardMedia 
        className={classes.image}
        component='img'
        image="/images/WireFrame.jpg"
        title='WireFrame'
      />
    </Card>
  )
}