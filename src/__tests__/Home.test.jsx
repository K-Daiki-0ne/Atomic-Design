import React from 'react';
import ReactDOM from 'react-dom';
import { Home } from '../pages/Home';

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
  test('Rendering test for Home', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Home />, div);  
  })  
})