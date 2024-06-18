import React from 'react';
import styles from './MediaFurniture.module.css';
import myImage from '../../Assets/media7.jpg'; 

const MediaFurniture = () => {
  return (
    <div className={styles.container}>
      <img
        src={myImage}
        alt="media7"
        className={styles.image}
      />
    </div>
  );
};

export default MediaFurniture;
