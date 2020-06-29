import React from 'react';
import { Card } from '@material-ui/core';
import { CardContent } from '@material-ui/core';
import { AuthorText } from '../../atoms/AuthorText/AuthorText';

export function AuthorText() {
  return (
    <Card>
      <CardContent>
        <AuthorText />
      </CardContent>
    </Card>
  );
};
