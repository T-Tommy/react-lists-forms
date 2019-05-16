import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Sidebar.css';

export default class Sidebar extends Component {
  static propTypes = {
    children: PropTypes.node
  }

  render() {
    return (
      <nav style={styles}>
        { this.props.children}
      </nav>
    );
  }
}
