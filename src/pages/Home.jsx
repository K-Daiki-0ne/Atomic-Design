import React from 'react';
import { Container } from '@material-ui/core';
import { HomeComponent } from '../components/templates/HomeComponent/HomeComponent';

export function Home() {
  return (
    <Container maxWidth='ms'>
      <HomeComponent />
    </Container>
  );
};