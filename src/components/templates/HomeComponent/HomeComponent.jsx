import React from 'react';
import { MainComponent } from '../../organisms/index';
import { HeaderComponent } from '../../organisms/Header/HeaderComponent';
 
export function HomeComponent() {
  return (
    <div>
      <HeaderComponent />
      <MainComponent />
    </div>
  )
}