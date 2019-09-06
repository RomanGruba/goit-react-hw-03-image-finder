import React, { Component } from 'react';
import styles from './Modal.module.css';

export default class Modal extends Component {
  state = {};

  render() {
    return (
      <div className="overlay">
        <div className="modal">
          <img src={this.props.item.largeImageURL} alt="" />
        </div>
      </div>
    );
  }
}
