import React from 'react';
import { 
  Card, 
  CardContent 
} from '@material-ui/core';
import { DescriptionText } from '../../atoms/index';
import { useStyle } from './style';

export function TextCard() {
  const classes = useStyle();
  return (
    <Card className={classes.root}>
      <CardContent>
        <DescriptionText />
      </CardContent>
    </Card>
  )
}
