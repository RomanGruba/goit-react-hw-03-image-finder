import React, { Component } from 'react';
import PropTypes from 'prop-types';
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
    const { item } = this.props;
    const { webformatURL, likes, views, comments, downloads } = this.props.item;
    return (
      <>
        <div className={styles.photoCard}>
          <div className={styles.imageContainer}>
            <img src={webformatURL} alt="" />
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
              {likes}
            </p>
            <p className={styles.statsItem}>
              <i className="material-icons">visibility</i>
              {views}
            </p>
            <p className={styles.statsItem}>
              <i className="material-icons">comment</i>
              {comments}
            </p>
            <p className={styles.statsItem}>
              <i className="material-icons">cloud_download</i>
              {downloads}
            </p>
          </div>
        </div>
        {showModal ? (
          <Modal
            item={item}
            closeModal={this.closeModal}
            closeModalEsc={this.closeModalEsc}
          />
        ) : null}
      </>
    );
  }
}

PhotoCard.propTypes = {
  item: PropTypes.shape({
    webformatURL: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
    likes: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    comments: PropTypes.number.isRequired,
    downloads: PropTypes.number.isRequired,
  }).isRequired,
};
