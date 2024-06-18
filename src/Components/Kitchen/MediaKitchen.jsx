import React from 'react';
import styles from './MediaKitchen.module.css';
import myImage from '../../Assets/media5.jpg'; 

const MediaKitchen = () => {
  return (
    <div className={styles.container}>
      <img
        src={myImage}
        alt="media5"
        className={styles.image}
      />
    </div>
  );
};

export default MediaKitchen;
