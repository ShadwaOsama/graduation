import React from 'react'
import styles from '../Orders/Orders.module.css';
import CartImage from '../../Assets/CartImage.png';
import SampleImage from '../../Assets/offer.png';
import { Link } from 'react-router-dom';

export default function Orders() {
 
  return (
    <div className={styles.wrapper}>
       
       <h1 className={styles.title}>
        <span className={styles.icon}>
          <img src={CartImage} alt="Cart Icon" />
        </span>{" "}
        My Orders
      </h1>

      <div className={styles.wrapperInside}>

        
          <div className={styles.orderCard}>
          <div className={styles.imageContainer}>
            <img src={SampleImage} alt="order" />
          </div>
          <div className={styles.orderDetails}>
            <div className={styles.header}>
              <h2>Lorem ipsum dolor sit amet consectetur</h2>
              <span className={styles.price}>20$</span>
            </div>
            <p className={styles.description}>
             Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus sint delectus, atque magni, eaque facilis quasi doloribus accusamus recusandae alias veritatis totam quod accusantium ut.            
            </p>
            
          </div>
        </div>



          <div className={styles.navigation}>
          <Link to={'/cart'}><button className={styles.navButton}><i className="fa-solid fa-circle-arrow-left m-2"></i>Go To Shopping Cart</button></Link>
          </div>



      </div>
</div>
  )
}
