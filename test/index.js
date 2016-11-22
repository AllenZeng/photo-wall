import React from 'react';
import { render } from 'react-dom';
import PhotoWalls from '../src/PhotoWalls';

const RootElement = document.createElement('div');
document.body.appendChild(RootElement);

render(
  <PhotoWalls />,
  RootElement
);