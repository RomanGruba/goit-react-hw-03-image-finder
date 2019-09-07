import React, { Component } from 'react';
import styles from './Modal.module.css';

export default class Modal extends Component {
  state = {};

  componentDidMount() {
    window.addEventListener('keydown', this.closeOnEsc);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.closeOnEsc);
  }

  closeOnEsc = e => {
    if (e.code === 'Escape') {
      this.props.closeModalEsc();
    }
  };

  render() {
    return (
      <div className={styles.overlay} onClick={this.props.closeModal}>
        <div className={styles.modal}>
          <img src={this.props.item.largeImageURL} alt="" />
        </div>
      </div>
    );
  }
}
