import React from 'react'
import Header from '../Header/Header'
import Offers from '../Offers/Offers'
import Electronics from '../Electronics/Electronics'
import MediaElectronics from './MediaElectronics'
import logo from '../../Assets/Logo1.jpg' 


export default function MainElectronics() {
  return (
    <>
    <Header/> 
    <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', margin: '20px' }}>
        <img src={logo} alt='logo' style={{ width: '30px', marginRight: '10px' }} />
        <h3 className='fw-bold'> Electronics Offers </h3>
      </div>
    <Offers/> 
    <MediaElectronics/>
    <Electronics/>
    </>
  )
}
