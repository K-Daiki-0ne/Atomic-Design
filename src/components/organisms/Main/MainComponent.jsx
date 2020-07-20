import React from 'react';
import { Grid } from '@material-ui/core';
import {
  AuthorCard,
  DateCard,
  // DirectoryCard,
  ImageCard,
  TextCard
} from '../../molecules/index';
// import { ImageCard } from '../../molecules/ImageCard/ImageCard';

export function MainComponent() {
  return (
    <Grid container spacing={6}>
      <Grid item xs={6}> 
        <DateCard />
        <ImageCard />
        {/* <DirectoryCard /> */}
      </Grid>
      <Grid item xs={6}>
        <AuthorCard />
        <TextCard />
      </Grid>
    </Grid>
  )
}