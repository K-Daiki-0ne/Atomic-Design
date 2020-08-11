import React from 'react';
import ReactDOM from 'react-dom';
import { Header } from '../components/molecules/Header/Header';

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
  test('Rendering test for Header', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Header />, div);  
  })  
})