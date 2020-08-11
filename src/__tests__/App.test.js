import React from 'react';
import ReactDOM from 'react-dom';
import { App } from '../root/App';

describe('Rendering test', () => {
  test('Rendering test for App', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);  
  })  
})