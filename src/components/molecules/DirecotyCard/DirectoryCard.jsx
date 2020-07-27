import React from 'react';
import { Card } from '@material-ui/core';
import { CardMedia } from '@material-ui/core';
import Directory from '../../../img/Directory.jpg';

export function DirectoryCard() {
  return (
    <Card>
      <CardMedia 
        component='img'
        image='/images/Directory.jpg'
        title='AtomicDesignDirectory'
      /> 
    </Card>
  );
}; 