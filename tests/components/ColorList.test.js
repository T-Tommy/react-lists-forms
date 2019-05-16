import React from 'react';
import { shallow } from 'enzyme';
import ColorList from '../../src/components/ColorList';

describe('ColorList component', () => {
  it('renders ColorList', () => {
    const wrapper = shallow(<ColorList />);
    expect(wrapper).toMatchSnapshot();
  });

  it('updates the state', () => {
    const color = {
      name: 'Blaci',
      hex: '#424242'
    };

    const wrapper = shallow(<ColorList />);
    wrapper.instance().addColor(color);
    expect(wrapper.state('colors')).toEqual([
      {
        name: 'Blaci',
        hex: '#424242'
      }
    ]);

  });
});
