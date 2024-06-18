import React from 'react';
import { Row, Col, } from 'react-bootstrap';
import styles from './ProductDetails.module.css';
import Product from '../../Assets/ProductDetails.jpg';
import { Link } from 'react-router-dom';

const ProductDetails = () => {
  return (
    <div className={styles.container}>
      <Row>
        <Col md={5} className="text-center">
          <div className={styles.imageWrapper}>
            <img src={Product} alt="Product" className={styles.productImage} />
          </div>
          <div className={`${styles.buttonGroup} my-3`}>
            <Link to='/buyNow'>
                <button className={`text-white ${styles.btnBuy} me-3`}>Buy Now</button>
            </Link>
            
            <button className={` text-white ${styles.btnAddToCart}`}>Add To Cart</button>
          </div>
        </Col>
        <Col md={7}>
          <h2 className={styles.title}>Lorem ipsum dolor sit amet consectetur.</h2>
          <div className={styles.rating}>
            <span className="text-warning">&#9733; &#9733; &#9733; &#9733; &#9733;</span>
            <span className={styles.ratingValue}>4.5</span>
          </div>
          <div className={styles.progressBar}>
            <div className={styles.progress} style={{ width: '48%' }}></div>
          </div>
          <div className={styles.stockInfo}>
            <span>Sold: <strong className={styles.highlight}>33</strong></span>
            <span>Available: <strong className={styles.highlight}>35</strong></span>
          </div>
          <div className={styles.price}>22 $</div>
          <p className={styles.description}>
            Lorem ipsum dolor sit amet consectetur. Rutrum erat magna sed ipsum morbi ullamcorper. Sed pharetra eu vulputate tortor nisl diam tristique sagittis. Rutrum viverra nibh magna nulla convallis laoreet pulvinar dictum in. Ultrices sodales vitae sed cursus a habitasse faucibus tincidunt nullam.
            Integer sit egestas posuere justo mollis. Eu in dictumst adipiscing aenean porttitor auctor urna semper eu. Eget cursus vestibulum phasellus nulla integer eget nulla fames eget. Velit elementum a dolor semper nulla. Ante at proin nisl dolor accumsan facilisis vel. Pellentesque dictumst risus cursus ultrices lobortis dictum neque rutrum quam.
            Ut elementum vulputate quis id consequat at mauris. Massa in sem sodales vitae at pharetra. Orci in mi amet odio. Id enim accumsan tempus in consectetur malesuada elementum at accumsan. Vel arcu odio convallis ac enim at porta. Fusce massa neque magna amet enim. Posuere volutpat turpis cras nisi adipiscing eget faucibus. Nisl nibh ultrices nam aliquam pharetra ultrices.
          </p>
        </Col>
      </Row>
    </div>
  );
};

export default ProductDetails;
