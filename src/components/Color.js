import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import convertHex from '../services/hex-converter';

export default class Color extends PureComponent {
  static propTypes = {
    color: PropTypes.object.isRequired
  }

  render() {
    const { name, hex } = this.props.color; 
    const { r, g, b } = convertHex(hex);
    return (
      <dl>
        <dt>Name</dt>
        <dd>{ name || hex }</dd>

        <dt>Hex</dt>
        <dd>{ hex }</dd>

        <dt>RBG</dt>
        <dd>Red - { r }</dd>
        <dd>Green - { g }</dd>
        <dd>Blue - { b }</dd>
      </dl>
    );
  }
}
