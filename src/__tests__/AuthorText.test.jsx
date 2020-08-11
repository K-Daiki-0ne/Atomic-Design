import React from 'react';
import ReactDOM from 'react-dom';
import { AuthorText } from '../components/atoms/AuthorText/AuthorText';

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
  test('Rendering test for AuthorText', () => {
    const div = document.createElement('div');
    ReactDOM.render(<AuthorText />, div);  
  })  
})