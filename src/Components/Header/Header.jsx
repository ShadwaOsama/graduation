import React from 'react'
import './Header.css'
import left from '../../Assets/left-side.jpg'
import right from '../../Assets/right-side.jpg'
import center from '../../Assets/center.jpg'
import Categories from '../Categories/Categories'

export default function Header() {
  return (
    <section className=' header py-3 position-relative '>
                <div className="left-image ">
                    <img src={left} alt="left" className=' w-100'/>
                </div>
                <div className="header-body mx-auto">
                    <div className="top-image w-75 m-auto">
                        <img src={center} alt="center" className=' w-100' />
                    </div>
                    <div className="search position-relative d-flex align-items-center mb-4">
                        <span><i class="fa-solid fa-magnifying-glass fa-flip-horizontal"></i></span>
                        <input type="text" className='form-control px-3' placeholder='Search Here' />
                    </div>
                    <div className="header-text text-center mb-4">
                        <h2 className=' text-capitalize'><span>shop</span> smart, live better</h2>
                        <p>Discover the Best Deals, Enjoy a Better Life – Shop with Us Today!</p>
                    </div>
                </div>
                <div className="right-image">
                    <img src={right} alt="right" className=' w-100' />
                </div>
                <Categories/>
                
                
    </section>
  )
}
