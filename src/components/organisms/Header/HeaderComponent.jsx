import React from 'react';
import { Header } from '../../molecules/index';
import { Grid } from '@material-ui/core';

export function HeaderComponent() {
  return (
    <Grid container spacing={3}>
      <Grid item spacing={12}>
        <Header />
      </Grid>
    </Grid>
  )
}
