import React from 'react';
import { shallow } from 'enzyme';
import Colors from '../../src/components/Colors';

describe('Colors component', () => {
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

  it('renders Colors', () => {
    const wrapper = shallow(<Colors colors={ colors } />);
    expect(wrapper).toMatchSnapshot();
  });
});
