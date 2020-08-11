import React from 'react';
import ReactDOM from 'react-dom';
import { DescriptionText } from '../components/atoms/DescriptionText/DescriptionText';

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
  test('Rendering test for DescriptionText', () => {
    const div = document.createElement('div');
    ReactDOM.render(<DescriptionText />, div);  
  })  
})