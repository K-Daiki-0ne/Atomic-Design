import React from 'react';
import { Grid } from '@material-ui/core';
import {
  AuthorCard,
  DateCard,
  DirectoryCard,
  ImageCard,
  TextCard,
  DescriptionCard,
} from '../../molecules/index';
import { useStyle } from './style';

export function MainComponent() {
  const classes = useStyle();
  return (
    <div>
      <div className={classes.root}>
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
    </div>
  )
}