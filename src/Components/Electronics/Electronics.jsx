import React from 'react'
import './Electronics.css'
import SideBar from '../SideBar/SideBar'
import Product from '../Product/Product'
import khalat from '../../Assets/5lat.jpg'
import ghsala from '../../Assets/8sala.jpg'
import fan from '../../Assets/fan.jpg'
import sticks from '../../Assets/wooden sticks.jpg'


export default function Electronics() {
  return (
    <section className='Electronics'>
      <div className="row gx-0 mb-3">
        <div className="col-md-2">
          <SideBar name={'Electronics'}/>
        </div>
        <div className="col-md-10">
          <div className="products px-3">
          <div className="row gy-3">
            <div className="col-md-4"> 
              <Product image={khalat}/>
            </div>
            <div className="col-md-4">
              <Product image={ghsala}/>
            </div>
            <div className="col-md-4">
              <Product image={fan}/>
            </div>
            <div className="col-md-4">
              <Product image={sticks}/>
            </div>
            <div className="col-md-4">
              <Product image={khalat}/>
            </div>
            <div className="col-md-4">
              <Product image={fan}/>
            </div>
          </div>
          </div>
          
        </div>
      </div>

      <div className="pages d-flex align-items-center justify-content-center gap-5 fs-1">
        <div className="left-arrow"><i class="fa-solid fa-circle-arrow-left text-orange"></i></div>
        <div className="righ-arrow"><i class="fa-solid fa-circle-arrow-right text-orange"></i></div>
      </div>
    </section>
  )
}