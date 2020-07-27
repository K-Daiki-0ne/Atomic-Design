import React from 'react';
import { Card } from '@material-ui/core';
import { CardContent } from '@material-ui/core';
import { AuthorText } from '../../atoms/AuthorText/AuthorText';
import { useStyle } from './style';

export function AuthorCard() {
  const classes = useStyle();
  return (
    <Card className={classes.root}>
      <CardContent>
        <AuthorText />
      </CardContent>
    </Card>
  );
};
