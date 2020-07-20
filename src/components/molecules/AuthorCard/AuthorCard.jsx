import React from 'react';
import { Card } from '@material-ui/core';
import { CardContent } from '@material-ui/core';
import { AuthorText } from '../../atoms/AuthorText/AuthorText';

export function AuthorCard() {
  return (
    <Card>
      <CardContent>
        <AuthorText />
      </CardContent>
    </Card>
  );
};
