import React from 'react';
import ReactDOM from 'react-dom';
import { HeaderComponent } from '../components/organisms/Header/HeaderComponent';

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
  test('Rendering test for HeaderComponent', () => {
    const div = document.createElement('div');
    ReactDOM.render(<HeaderComponent />, div);  
  })  
})