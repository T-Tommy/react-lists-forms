import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class color extends PureComponent {
  static propTypes = {
    color: PropTypes.object.isRequired
  }
  render() {
    const { name, hex, rgb: { r, g, b } } = this.props.color;
    return (
      <dl>
        <dt>Name</dt>
        <dd>{ name }</dd>

        <dt>Hex</dt>
        <dd>{ hex }</dd>

        <dt>RGB</dt>
        <dd>Red - { r }</dd>
        <dd>Green - { g }</dd>
        <dd>Blue - { b }</dd>
      </dl>
    );
  }
}
