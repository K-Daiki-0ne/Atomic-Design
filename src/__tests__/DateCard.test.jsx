import React from 'react';
import ReactDOM from 'react-dom';
import { DateCard } from '../components/molecules/DateCard/DateCard';

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
  test('Rendering test for DateCard', () => {
    const div = document.createElement('div');
    ReactDOM.render(<DateCard />, div);  
  })  
})