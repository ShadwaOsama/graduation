import React from 'react';
import styles from './MediaElectronics.module.css';
import myImage from '../../Assets/media3.jpg'; 
import MainElectronics from './MainElectronics';

const MediaElectronics = () => {
  return (
    <div className={styles.container}>
      <img
        src={myImage}
        alt="media3"
        className={styles.image}
      />
    </div>
  );
};

export default MediaElectronics;
