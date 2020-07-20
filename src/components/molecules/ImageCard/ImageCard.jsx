import React from 'react';
import { Card } from '@material-ui/core';
import { CardMedia } from '@material-ui/core';
// import CardActionArea from '@material-ui/core/CardActionArea';

export function ImageCard() {
  return (
    <Card>
      {/* <CardActionArea> */}
        <CardMedia 
          component='img'
          height='300'
          image="/images/WireFrame.jpg"
          title='WireFrame'
        />
      {/* </CardActionArea> */}
    </Card>
  )
}