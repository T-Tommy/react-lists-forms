import React from 'react';
import { shallow } from 'enzyme';
import Color from '../../src/components/Color';

describe('Color component', () => {
  it('renders Color', () => {
    const color = {
      name: 'Blue',
      hex: '#FF00AA'
    };

    const wrapper = shallow(<Color color={ color } />);
    expect(wrapper).toMatchSnapshot();
  });

});
