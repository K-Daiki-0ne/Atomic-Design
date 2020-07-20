import React from 'react';
import { Card } from '@material-ui/core';
import { CardMedia } from '@material-ui/core';
import Directory from '../../../img/Directory.jpg';

export function DirectoryCard() {
  return (
    <Card>
      <CardMedia 
        image={Directory}
      /> 
    </Card>
  );
}; 