import React from 'react';
import { Grid } from '@material-ui/core';
import {
  AuthorCard,
  DateCard,
  DirectoryCard,
  ImageCard,
  TextCard,
  DescriptionCard,
  Header
} from '../../molecules/index';

export function MainComponent() {
  return (
    <div>
      <Header />
      <Grid container spacing={6}>
        <Grid item xs={6}> 
          <DateCard />
          <ImageCard />
          <DirectoryCard />
        </Grid>
        <Grid item xs={6}>
          <AuthorCard />
          <DescriptionCard />
          <TextCard />
        </Grid>
      </Grid>
    </div>
  )
}