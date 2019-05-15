import React from 'react';
import { shallow } from 'enzyme';
import Color from '../../src/components/Color';

describe('Color component', () => {
  const color = {
    name: 'Red',
    hex: 'FF0000',
    rgb: {
      r: 255,
      g: 0,
      b: 0
    }
  };

  it('renders Color', () => {
    const wrapper = shallow(<Color color={ color } />);
    expect(wrapper).toMatchSnapshot();
  });
});
