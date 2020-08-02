import React from 'react';
import { AppBar } from '@material-ui/core';
import { Toolbar } from '@material-ui/core';
import { HeaderText } from '../../atoms/index';
import { useStyle } from './style';

export function Header() {
  const classes = useStyle();
  return (
    <AppBar className={classes.root}>
      <Toolbar>
        <HeaderText />
      </Toolbar>
    </AppBar>
  );
};