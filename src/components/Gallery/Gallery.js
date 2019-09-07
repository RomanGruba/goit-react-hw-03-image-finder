import React, { Component } from 'react';
import styles from './Gallery.module.css';
import PhotoCard from '../PhotoCard/PhotoCard';

export default class Gallery extends Component {
  state = {};

  render() {
    const { items } = this.props;
    return (
      <ul className={styles.gallery}>
        {items.map(item => (
          <li className={styles.item} key={item.id}>
            <PhotoCard item={item} />
          </li>
        ))}
      </ul>
    );
  }
}

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
