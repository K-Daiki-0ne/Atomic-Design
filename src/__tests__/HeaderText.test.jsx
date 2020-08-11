import React from 'react';
import ReactDOM from 'react-dom';
import { HeaderText } from '../components/atoms/HeaderText/HeaderText';

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
  test('Rendering test for HeaderText', () => {
    const div = document.createElement('div');
    ReactDOM.render(<HeaderText />, div);  
  })  
})