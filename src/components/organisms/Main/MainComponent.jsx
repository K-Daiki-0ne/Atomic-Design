import React from 'react';
import { Grid } from '@material-ui/core';
import {
  AuthorCard,
  DateCard,
  DirectoryCard,
  ImageCard,
  TextCard
} from '../../molecules/index';

export function MainComponent() {
  return (
    <Grid container spacing={3}>
      <Grid item xs={6}> 
        <DateCard />
        <ImageCard />
        <DirectoryCard />
      </Grid>
      <Grid item xs={6}>
        <AuthorCard />
        <TextCard />
      </Grid>
    </Grid>
  )
}