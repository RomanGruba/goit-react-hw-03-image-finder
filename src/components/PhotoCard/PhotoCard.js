import React, { Component } from 'react';
import styles from './PhotoCard.module.css';
import Modal from '../Modal/Modal';

export default class PhotoCard extends Component {
  state = {
    showModal: false,
  };

  handleClick = e => {
    this.setState({ showModal: !this.state.showModal });
  };

  closeModal = e => {
    if (this.state.showModal === true && e.target.nodeName !== 'IMG') {
      this.setState({ showModal: false });
    }
  };

  closeModalEsc = e => {
    if (this.state.showModal === true) {
      this.setState({ showModal: false });
    }
  };

  render() {
    const { showModal } = this.state;
    return (
      <>
        <div className={styles.photoCard}>
          <div className={styles.imageContainer}>
            <img src={this.props.item.webformatURL} alt="" />
            <button
              type="button"
              className={styles.fullscreenButton}
              onClick={this.handleClick}
            >
              <i className="material-icons">zoom_out_map</i>
            </button>
          </div>

          <div className={styles.stats}>
            <p className={styles.statsItem}>
              <i className="material-icons">thumb_up</i>
              {this.props.item.likes}
            </p>
            <p className={styles.statsItem}>
              <i className="material-icons">visibility</i>
              {this.props.item.views}
            </p>
            <p className={styles.statsItem}>
              <i className="material-icons">comment</i>
              {this.props.item.comments}
            </p>
            <p className={styles.statsItem}>
              <i className="material-icons">cloud_download</i>
              {this.props.item.downloads}
            </p>
          </div>
        </div>
        {showModal ? (
          <Modal
            item={this.props.item}
            closeModal={this.closeModal}
            closeModalEsc={this.closeModalEsc}
          />
        ) : null}
      </>
    );
  }
}
