import React, { PureComponent } from 'react';

export default class TextFormatter extends PureComponent {
  state = {
    text: ''
  }

  handleChange = ({ target }) => this.setState({ text: target.value })

  render() {
    return (
      <>
        <input name='text' value={ this.state.text } onChange={ this.handleChange } />
        <div>{ this.state.text }</div>
        </>
    );
  }
}
