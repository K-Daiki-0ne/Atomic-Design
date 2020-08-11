import React from 'react';
import ReactDOM from 'react-dom';
import { ImageCard } from '../components/molecules/ImageCard/ImageCard';

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
  test('Rendering test for ImageCard', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ImageCard />, div);  
  })  
})