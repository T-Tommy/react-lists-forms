import React from 'react';
import { shallow } from 'enzyme';
import Sidebar from '../../src/components/Sidebar';

describe('Sidebar component', () => {
  it('renders a Sidebar', () => {
    const wrapper = shallow(
      <Sidebar>
        <p>Home</p>
        <p>About</p>
        <p>Blog</p>
        <p>Contact</p>
      </Sidebar>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
