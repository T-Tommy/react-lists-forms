import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class CreateColor extends PureComponent {
  static propTypes = {
    addColor: PropTypes.func.isRequired
  }

  state = {
    name: '',
    hex: '#000000',
  }

  handleChange = ({ target }) => this.setState({ [target.name]: target.value })
  render() {
    return (
      <>
        <input name="name" type="text" onChange={ this.handleChange } />
        <input name="hex" type="color" onChange={ this.handleChange } />
        <input type="submit" onClick={ () => this.props.addColor(this.state) } />
      </>
    );
  }
}
