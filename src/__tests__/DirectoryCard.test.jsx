import React from 'react';
import ReactDOM from 'react-dom';
import { DirectoryCard } from '../components/molecules/DirecotyCard/DirectoryCard';

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
  test('Rendering test for DirectoryCard', () => {
    const div = document.createElement('div');
    ReactDOM.render(<DirectoryCard />, div);  
  })  
})