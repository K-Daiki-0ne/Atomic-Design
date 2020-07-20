import React from 'react';
import { AppBar } from '@material-ui/core';
import { Toolbar } from '@material-ui/core';
import { HeaderText } from '../../atoms/index';

export function Header() {
  return (
    <AppBar>
      <Toolbar>
        <HeaderText />
      </Toolbar>
    </AppBar>
  );
};