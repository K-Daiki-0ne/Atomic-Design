import React from 'react';
import { Card } from '@material-ui/core';
import { CardContent } from '@material-ui/core';
import { DateText } from '../../atoms/index';

export function DateCard() {
  return (
    <Card>
      <CardContent>
        <DateText />
      </CardContent>
    </Card>
  );
};