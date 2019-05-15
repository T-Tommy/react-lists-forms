import React from 'react';
import Colors from './Colors';

const colors = [
  {
    name: 'Red',
    hex: 'FF0000',
    rgb: {
      r: 255,
      g: 0,
      b: 0
    }
  },
  {
    name: 'Green',
    hex: '00FF00',
    rgb: {
      r: 0,
      g: 255,
      b: 0
    }
  },
  {
    name: 'Blue',
    hex: '0000FF',
    rgb: {
      r: 0,
      g: 0,
      b: 255
    }
  },
];

export default function App() {
  return (
    <Colors colors={ colors } />
  );
}
