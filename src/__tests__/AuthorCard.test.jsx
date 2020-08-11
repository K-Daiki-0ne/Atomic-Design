import React from 'react';
import ReactDOM from 'react-dom';
import { AuthorCard } from '../components/molecules/AuthorCard/AuthorCard';

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
  test('Rendering test for AuthorCard', () => {
    const div = document.createElement('div');
    ReactDOM.render(<AuthorCard />, div);  
  })  
})