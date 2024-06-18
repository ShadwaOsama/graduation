import React from 'react'
import Header from '../Header/Header'
import Electronics from '../Electronics/Electronics'
import EndHome from '../EndHome/EndHome'
import Offers from '../Offers/Offers'
import MediaHome from './MediaHome'
import MediaGeneral from './MediaGeneral'
import styles from '../Offers/Offers.module.css'
import logo from '../../Assets/Logo1.jpg' 

export default function HomePage() {
  return (
    <>
      <Header/> 
      <MediaHome/>
      <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', margin: '20px' }}>
        <img src={logo} alt='logo' style={{ width: '30px', marginRight: '10px' }} />
        <h2 className={styles.sectionTitle}>
          GAZ<span className={styles.highlightedText}>IER</span> Offers
        </h2>
      </div>
      <Offers/> 
      <MediaGeneral/> 
      <Electronics/> 
      <EndHome/>
    </>
  )
}
