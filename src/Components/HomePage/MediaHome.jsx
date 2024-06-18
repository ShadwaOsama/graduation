import React from 'react';
import styles from './MediaHome.module.css';
import myImage from '../../Assets/media1.jpg'; 

const MediaHome = () => {
  return (
    <div className={styles.container}>
      <img
        src={myImage}
        alt="media1"
        className={styles.image}
      />
    </div>
  );
};

export default MediaHome;

