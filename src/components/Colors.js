import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Color from './Color';

export default class Colors extends PureComponent {
  static propTypes = {
    colors: PropTypes.array.isRequired
  }

  render() {
    const { colors } = this.props;
    const colorList = colors.map(color => <li key={ color.name }><Color color={ color } /></li>);
    return (
      <ul>
        { colorList }
      </ul>
    );
  }
  
}
