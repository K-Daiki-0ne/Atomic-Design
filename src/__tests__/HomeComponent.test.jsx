import React from 'react';
import ReactDOM from 'react-dom';
import { HomeComponent } from '../components/templates/HomeComponent/HomeComponent';

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
  test('Rendering test for HomeComponent', () => {
    const div = document.createElement('div');
    ReactDOM.render(<HomeComponent />, div);  
  })  
})