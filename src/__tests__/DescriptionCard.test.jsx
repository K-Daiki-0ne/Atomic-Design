import React from 'react';
import ReactDOM from 'react-dom';
import { DescriptionCard } from '../components/molecules/DescriptionCard/DescriptionCard';

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
  test('Rendering test for DescriptionCard', () => {
    const div = document.createElement('div');
    ReactDOM.render(<DescriptionCard />, div);  
  })  
})