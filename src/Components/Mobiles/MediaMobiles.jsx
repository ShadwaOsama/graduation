import React from 'react';
import styles from './MediaMobiles.module.css';
import myImage from '../../Assets/media4.jpg'; 

const MediaMobiles = () => {
  return (
    <div className={styles.container}>
      <img
        src={myImage}
        alt="media4"
        className={styles.image}
      />
    </div>
  );
};

export default MediaMobiles;
