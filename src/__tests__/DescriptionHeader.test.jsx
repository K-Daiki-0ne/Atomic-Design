import React from 'react';
import ReactDOM from 'react-dom';
import { DescriptionHeader } from '../components/atoms/DescriptionHeader/DescriptionHeader';

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
  test('Rendering test for DescriptionHeader', () => {
    const div = document.createElement('div');
    ReactDOM.render(<DescriptionHeader />, div);  
  })  
})