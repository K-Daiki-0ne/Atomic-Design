import React from 'react';
import ReactDOM from 'react-dom';
import { DirectoryTitle } from '../components/atoms/DirectoryTitle/DirectoryTitle';

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
  test('Rendering test for DirectoryTitle', () => {
    const div = document.createElement('div');
    ReactDOM.render(<DirectoryTitle />, div);  
  })  
})