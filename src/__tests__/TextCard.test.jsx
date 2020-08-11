import React from 'react';
import ReactDOM from 'react-dom';
import { TextCard } from '../components/molecules/TextCard/TextCard';

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
  test('Rendering test for TextCard', () => {
    const div = document.createElement('div');
    ReactDOM.render(<TextCard />, div);  
  })  
})