import React from 'react';
import { Card } from '@material-ui/core';
import { CardMedia } from '@material-ui/core';

export function DirectoryCard() {
  return (
    <Card>
      <CardMedia 
        component='img'
        height='250'
        image='/images/Directory.jpg'
        title='AtomicDesignDirectory'
      /> 
    </Card>
  );
}; 