import React from 'react';
import { Card } from '@material-ui/core';
import { CardMedia } from '@material-ui/core';
import WireFrame from '../../../img/WireFrame.png';

export function ImageCard() {
  return (
    <Card>
      <CardMedia 
        image={WireFrame}
      />
    </Card>
  )
}