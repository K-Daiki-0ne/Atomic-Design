import React from 'react';
import ReactDOM from 'react-dom';
import { DateText } from '../components/atoms/DateText/DateText';

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
  test('Rendering test for DateText', () => {
    const div = document.createElement('div');
    ReactDOM.render(<DateText />, div);  
  })  
})