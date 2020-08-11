import React from 'react';
import ReactDOM from 'react-dom';
import { ImageTitle } from '../components/atoms/ImageTitle/ImageTitle';

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
  test('Rendering test for ImageTitle', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ImageTitle />, div);  
  })  
})