import React from 'react';
import ReactDOM from 'react-dom';
import { App } from '../root/App';

let container = null;
beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  container.remove();
  container = null;
});

describe('Rendering test', () => {
  test('Rendering test for App', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);  
  })  
})