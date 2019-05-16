import React from 'react';
import { shallow } from 'enzyme';
import Colors from '../../src/components/Colors';

describe('Colors component', () => {
  it('renders Colors', () => {
    const colors = [
      {
        name: 'Blue',
        hex: '#FF00AA'
      },
      {
        name: 'Blaci',
        hex: '#424242'
      }
    ];

    const wrapper = shallow(<Colors colors={ colors } />);
    expect(wrapper).toMatchSnapshot();
  });
});
