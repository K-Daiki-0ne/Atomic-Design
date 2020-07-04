import React from 'react';
import { AppBar } from '@material-ui/core';
import { ToolBar } from '@material-ui/core';
import { HeaderText } from '../../atoms/index';

export function Header() {
  return (
    <AppBar>
      <ToolBar>
        <HeaderText />
      </ToolBar>
    </AppBar>
  );
};