import React from 'react';
import ReactDOM from 'react-dom';
import { MainComponent } from '../components/organisms/Main/MainComponent';

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
  test('Rendering test for MainComponent', () => {
    const div = document.createElement('div');
    ReactDOM.render(<MainComponent />, div);  
  })  
})