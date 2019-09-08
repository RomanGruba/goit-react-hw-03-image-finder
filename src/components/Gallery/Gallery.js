import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Gallery.module.css';
import PhotoCard from '../PhotoCard/PhotoCard';

export default class Gallery extends Component {
  state = {};

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.items.length !== this.props.items.length) {
      const top = window.innerHeight - 70;
      window.scrollBy({
        top,
        behavior: 'smooth',
      });
    }
  }

  render() {
    const { items } = this.props;

    return items.length > 0 ? (
      <ul className={styles.gallery}>
        {items.map(item => (
          <li className={styles.item} key={item.id}>
            <PhotoCard item={item} />
          </li>
        ))}
      </ul>
    ) : null;
  }
}

Gallery.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.number.isRequired }).isRequired,
  ).isRequired,
};

// const Gallery = ({ items }) => {
//   return (
//     <ul className={styles.gallery}>
//       {items.map(item => (
//         <li className={styles.item} key={item.id}>
//           <PhotoCard item={item} />
//         </li>
//       ))}
//     </ul>
//   );
// };

// export default Gallery;
