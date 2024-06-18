import React from 'react'
import './Categories.css'
import ele from '../../Assets/Electronics.jpg'
import mobile from '../../Assets/Mobiles.jpg'
import kitch from '../../Assets/Kitchen.jpg'
import app from '../../Assets/Appliances.jpg'
import furn from '../../Assets/Furniture.jpg'
import offers from '../../Assets/Offers.jpg'
import { Link } from 'react-router-dom'

export default function Categories() {
  return (
    <div className="categories py-3 m-auto position-relative d-flex gap-3 align-items-center justify-content-center">
            
            <Link to='/mainElectronics' className='text-decoration-none text-black'>
            <div className="category text-center border px-3 py-2 rounded-4" >
                <div className="logo">
                    <img src={ele} alt="Electronics" className='w-100' />
                </div>
                <p className='m-0 fw-bold'>Electronics</p>
            </div>
            </Link>
            
            <Link to='/mobiles' className='text-decoration-none text-black'>
            <div className="category text-center border px-3 py-2 rounded-4">
                <div className="logo">
                    <img src={mobile} alt="Mobiles" className='w-100' />
                </div>
                <p className='m-0 fw-bold'>Mobiles</p>
            </div>
            </Link>
            <Link to='/kitchen' className='text-decoration-none text-black'>
            <div className="category text-center border px-3 py-2 rounded-4">
                <div className="logo">
                    <img src={kitch} alt="Kitchen" className='w-100' />
                </div>
                <p className='m-0 fw-bold'>Kitchen</p>
            </div>
            </Link>
            
            <Link to='/appliances' className='text-decoration-none text-black'>
            <div className="category text-center border px-3 py-2 rounded-4">
                <div className="logo">
                    <img src={app} alt="Appliances" className='w-100' />
                </div>
                <p className='m-0 fw-bold'>Appliances</p>
            </div>
           </Link>

           <Link to='/furniture' className='text-decoration-none text-black'>
            <div className="category text-center border px-3 py-2 rounded-4">
                <div className="logo">
                    <img src={furn} alt="Furniture" className='w-100' />
                </div>
                <p className='m-0 fw-bold'>Furniture</p>
            </div>
           </Link>

           <Link to='/mainOffer' className='text-decoration-none text-black'>
            <div className="category text-center border px-3 py-2 rounded-4">
                <div className="logo">
                    <img src={offers} alt="Offers" className='w-100' />
                </div>
                <p className='m-0 fw-bold'>Offers</p>
            </div>
            </Link>
           
    </div>
    
  )
}
