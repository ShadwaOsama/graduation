import React from 'react';
import styles from './MediaGeneral.module.css';
import myImage from '../../Assets/media2.jpg'; 

const MediaGeneral = () => {
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

export default MediaGeneral;

