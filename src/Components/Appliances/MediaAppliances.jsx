import React from 'react';
import styles from './MediaAppliances.module.css';
import myImage from '../../Assets/media6.jpg'; 

const MediaAppliances = () => {
  return (
    <div className={styles.container}>
      <img
        src={myImage}
        alt="media6"
        className={styles.image}
      />
    </div>
  );
};

export default MediaAppliances;
