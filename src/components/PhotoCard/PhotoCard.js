import React, { Component } from 'react';
import styles from './PhotoCard.module.css';

export default class PhotoCard extends Component {
  state = {};

  render() {
    return (
      <>
        <div className={styles.photoCard}>
          <img src={this.props.item.webformatURL} alt="" />

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

          <button type="button" className={styles.fullscreenButton}>
            <i className="material-icons">zoom_out_map</i>
          </button>
        </div>
      </>
    );
  }
}
