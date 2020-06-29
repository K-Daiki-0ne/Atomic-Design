import React from 'react';
import { Card } from '@material-ui/core';
import { CardContent } from '@material-ui/core';
import { DescriptionText } from '../../atoms/index';

export function TextCard() {
  return (
    <Card>
      <CardContent>
        <DescriptionText />
      </CardContent>
    </Card>
  )
}
