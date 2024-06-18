import React from 'react'
import styles from '../CartThree/CartThree.module.css'
import logo from '../../Assets/wishLogo.svg'
import img1 from '../../Assets/tracking.svg'
import arrow from '../../Assets/arrow.svg'
// import Offer from '../../Assets/offer.png'
import productCard from '../../Assets/productCCard.svg'
import style from '../Offers/Offers.module.css'
import { Link } from 'react-router-dom'
import leftArrow from '../../Assets/leftArrow.svg'
import rightArrow from '../../Assets/rightArrow.svg'


export default function CartThree() {
    const cards = [
        { id: 1, content: 'Lorem ipsum dolor sit amet consectetur. Aliquam magna massa morbi.', sold: 25, available: 35 },
        { id: 2, content: 'Lorem ipsum dolor sit amet consectetur. Aliquam magna massa morbi.', sold: 25, available: 35 },
        { id: 3, content: 'Lorem ipsum dolor sit amet consectetur. Aliquam magna massa morbi.', sold: 25, available: 35 },


    ];
    return (
        <>
            <div className={`${styles.head} container`}>
                <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', margin: '20px' }}>
                    <img src={logo} alt='logo' style={{ width: '30px', marginRight: '10px' }} />
                    <h2 className={styles.sectionTitle}>
                        Shopping Cart
                    </h2>
                </div>
                <div >
                    <button className={`${styles.butWish}`}><i class="fa-regular fa-heart mx-2"></i>WishList</button>
                </div>
                <div className={`${styles.tracking}`}>
                    <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
                        <img src={img1} alt='logo' style={{ width: '30px', marginRight: '10px' }} />
                        <p className={styles.sectionTitlee}>
                            Tracking My Orders
                        </p>
                    </div>
                </div>
            </div>
            <section className={`${styles.container} my-4`}>
                <div className={`${styles.sectionOne} d-flex justify-content-start gap-5`}>
                    <div>
                        <button className={` ${styles.bttn} `}>Select All Items</button>
                    </div>
                    <div>
                        <button className={` ${styles.bttn2}`}>Delete Selected Elements</button>

                    </div>
                    <div>
                        <button className={` ${styles.bttn3}`}>Move Selected Items to Cart</button>

                    </div>
                </div>
                <section >
                    <div className={`${style.offersContainer} my-4 `}>

                        {cards.map(card => (
                            <div key={card.id} className={styles.Card}>
                                <div className={`${style.rectangle} `}>
                                    <div className={style.priceBox}>
                                        <span className={style.newPrice}>20$</span>
                                    </div>
                                    <span className={style.oldPrice}>22$</span>
                                    <img src={productCard} className={`${style.productImage} `} alt="Product " />
                                </div>
                                <span className={style.cardContent}>{card.content} <Link to='' className={`${styles.showMore} mx-4`}>show More</Link></span>

                                <div className={`${styles.buttons}  gap-5 my-3`}>
                                    <div className="delete">
                                        <button className={styles.deleteButton}>delete</button>
                                    </div>
                                    <div className="MoveCart">
                                        <button className={styles.moveButton}>Move  to Cart</button>
                                    </div>
                                </div>
                                <div className={styles.box}>

                                </div>




                            </div>
                        ))}
                    </div>
                </section>
                <div className={`${styles.low} d-flex justify-content-start gap-5 my-3`}>
                    <div className='d-flex justify-content-start gap-2 w-75'>
                        <button className={` ${styles.left} mx-3`}>
                            <img src={arrow} alt="arrow" className='mx-3 ml-5' />Go To Shopping Cart</button>
                    </div>

                    <div className='right d-flex justify-content-start gap-3 '>
                        <div className={styles.b1}>

                            <img src={leftArrow} className='mx-3' alt="leftArrow" />
                        </div>
                        <div className={styles.b2}>

                            <img src={rightArrow} className='mx-3' alt="rightArrow" />
                        </div>

                    </div>
                </div>
            </section>

        </>
    )
}
