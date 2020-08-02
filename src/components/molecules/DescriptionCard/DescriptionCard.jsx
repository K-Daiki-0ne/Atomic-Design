import React from 'react';
import { Card } from '@material-ui/core';
import { CardContent } from '@material-ui/core';
import { DescriptionHeader } from '../../atoms/index';
import { useStyle } from './style';

export function DescriptionCard() {
  const classes = useStyle();
  return (
    <Card className={classes.root}>
      <CardContent>
        <DescriptionHeader />
      </CardContent>
    </Card>
  );
};