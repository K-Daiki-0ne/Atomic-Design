import React from 'react';
import { Card } from '@material-ui/core';
import { CardContent } from '@material-ui/core';
import { DateText } from '../../atoms/index';
import { useStyle } from './style';

export function DateCard() {
  const classes = useStyle();
  return (
    <Card className={classes.root}>
      <CardContent>
        <DateText />
      </CardContent>
    </Card>
  );
};