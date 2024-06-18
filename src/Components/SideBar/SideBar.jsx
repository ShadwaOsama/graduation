import React, { useState } from "react";
import "./SideBar.css";

export default function SideBar({name}) {

  const mobile = window.innerWidth <= 768 ? true : false ;
  const [openDelivery , setOpenDelivery] = useState(false);
  const [openBrand , setOpenBrand] = useState(false);
  const [openCondition , setOpenCondition] = useState(false);
  const [openRate , setOpenRate] = useState(false);
  const [openPrice , setOpenPrice] = useState(false);



  return (
    <>
      <div className={`side-bar p-3 ${mobile?'mb-3':''}`}>
        <div className="header">
          <div className="title mb-3 pb-2">
            <h3 className="m-0 text-capitalize">{name}</h3>
          </div>
          <div className="search-bar position-relative d-flex align-items-center mb-4">
            <span>
              <i class="fa-solid fa-magnifying-glass fa-flip-horizontal"></i>
            </span>
            <input
              type="text"
              className="form-control px-3"
              placeholder="Search Here"
            />
          </div>
        </div>

        <div className={`filter ${mobile?'d-flex justify-content-around flex-wrap':''}`}>
          <div className="delivery mb-3">
            <h4 className="text-capitalize py-2 fs-6 title-border pointer" onClick={()=>setOpenDelivery(!openDelivery)}>
              eligible for free delivery
            </h4>
            <div className={`check d-flex align-items-center ${(mobile?(openDelivery ?'d-block':'d-none'):'')} `}>
              <input type="checkbox" name="check" id="check" />
              <label className="m-0 ms-2 text-capitalize" htmlFor="check">
                free shipping
              </label>
            </div>
          </div>

          <div className="brand mb-3">
            <h4 className="text-capitalize py-2 fs-6 title-border pointer" onClick={()=>setOpenBrand(!openBrand)}>brand</h4>
            <div className={`${(mobile?(openBrand?'d-block':'d-none'):'')}`}>
            <div className={`check d-flex align-items-center`}>
              <input type="checkbox" name="other" id="other" />
              <label className="m-0 ms-2 text-capitalize" htmlFor="other">
                other
              </label>
            </div>
            <div className="check d-flex align-items-center">
              <input type="checkbox" name="tornado" id="tornado" />
              <label className="m-0 ms-2 text-capitalize" htmlFor="tornado">
                tornado
              </label>
            </div>
            <div className="check d-flex align-items-center">
              <input type="checkbox" name="beko" id="beko" />
              <label className="m-0 ms-2 text-capitalize" htmlFor="beko">
                beko
              </label>
            </div>
            <div className="check d-flex align-items-center">
              <input type="checkbox" name="bosch" id="bosch" />
              <label className="m-0 ms-2 text-capitalize" htmlFor="bosch">
                bosch
              </label>
            </div>
            <div className="check d-flex align-items-center">
              <input type="checkbox" name="sonai" id="sonai" />
              <label className="m-0 ms-2 text-capitalize" htmlFor="sonai">
                sonai
              </label>
            </div>
            <div className="check d-flex align-items-center">
              <input type="checkbox" name="braun" id="black" />
              <label className="m-0 ms-2 text-capitalize" htmlFor="black">
                black & decker
              </label>
            </div>
            <div className="check d-flex align-items-center">
              <input type="checkbox" name="braun" id="braun" />
              <label className="m-0 ms-2 text-capitalize" htmlFor="braun">
                braun
              </label>
            </div>
            </div>
          </div>

          <div className="condition mb-3">
            <h4 className="text-capitalize py-2 fs-6 title-border pointer" onClick={()=>setOpenCondition(!openCondition)}>
              condition
            </h4>
            <div className={`${(mobile?(openCondition?'d-block':'d-none'):'')}`}>
            <div className="check d-flex align-items-center">
              <input type="checkbox" name="new" id="new" />
              <label className="m-0 ms-2 text-capitalize" htmlFor="new">
                new
              </label>
            </div>
            <div className="check d-flex align-items-center">
              <input type="checkbox" name="used" id="used" />
              <label className="m-0 ms-2 text-capitalize" htmlFor="used">
                used
              </label>
            </div>
            </div>
          </div>

          <div className="rate mb-3">
            <h4 className="text-capitalize py-2 fs-6 title-border pointer" onClick={()=>setOpenRate(!openRate)}>
              avg. customer review
            </h4>
            <div className={`${(mobile?(openRate?'d-block':'d-none'):'')}`}>
            <div className="check d-flex align-items-center">
              <input type="checkbox" name="five" id="five" />
              <label className="m-0 ms-2 text-capitalize" htmlFor="five">
                <i class="fa-solid fa-star" style={{ color: "orange" }}></i>
                <i class="fa-solid fa-star" style={{ color: "orange" }}></i>
                <i class="fa-solid fa-star" style={{ color: "orange" }}></i>
                <i class="fa-solid fa-star" style={{ color: "orange" }}></i>
                <i class="fa-solid fa-star" style={{ color: "orange" }}></i>
              </label>
            </div>
            <div className="check d-flex align-items-center">
              <input type="checkbox" name="four" id="four" />
              <label className="m-0 ms-2 text-capitalize" htmlFor="four">
                <i class="fa-solid fa-star" style={{ color: "orange" }}></i>
                <i class="fa-solid fa-star" style={{ color: "orange" }}></i>
                <i class="fa-solid fa-star" style={{ color: "orange" }}></i>
                <i class="fa-solid fa-star" style={{ color: "orange" }}></i>
                <i
                  class="fa-solid fa-star"
                  style={{ color: "rgb(174, 173, 173)" }}
                ></i>
              </label>
            </div>
            <div className="check d-flex align-items-center">
              <input type="checkbox" name="three" id="three" />
              <label className="m-0 ms-2 text-capitalize" htmlFor="three">
                <i class="fa-solid fa-star" style={{ color: "orange" }}></i>
                <i class="fa-solid fa-star" style={{ color: "orange" }}></i>
                <i class="fa-solid fa-star" style={{ color: "orange" }}></i>
                <i
                  class="fa-solid fa-star"
                  style={{ color: "rgb(174, 173, 173)" }}
                ></i>
                <i
                  class="fa-solid fa-star"
                  style={{ color: "rgb(174, 173, 173)" }}
                ></i>
              </label>
            </div>
            <div className="check d-flex align-items-center">
              <input type="checkbox" name="two" id="two" />
              <label className="m-0 ms-2 text-capitalize" htmlFor="two">
                <i class="fa-solid fa-star" style={{ color: "orange" }}></i>
                <i class="fa-solid fa-star" style={{ color: "orange" }}></i>
                <i
                  class="fa-solid fa-star"
                  style={{ color: "rgb(174, 173, 173)" }}
                ></i>
                <i
                  class="fa-solid fa-star"
                  style={{ color: "rgb(174, 173, 173)" }}
                ></i>
                <i
                  class="fa-solid fa-star"
                  style={{ color: "rgb(174, 173, 173)" }}
                ></i>
              </label>
            </div>
            <div className="check d-flex align-items-center">
              <input type="checkbox" name="one" id="one" />
              <label className="m-0 ms-2 text-capitalize" htmlFor="one">
                <i class="fa-solid fa-star" style={{ color: "orange" }}></i>
                <i
                  class="fa-solid fa-star"
                  style={{ color: "rgb(174, 173, 173)" }}
                ></i>
                <i
                  class="fa-solid fa-star"
                  style={{ color: "rgb(174, 173, 173)" }}
                ></i>
                <i
                  class="fa-solid fa-star"
                  style={{ color: "rgb(174, 173, 173)" }}
                ></i>
                <i
                  class="fa-solid fa-star"
                  style={{ color: "rgb(174, 173, 173)" }}
                ></i>
              </label>
            </div>
            </div>
          </div>

          <div className="price mb-3">
            <h4 className="text-capitalize py-2 fs-6 title-border pointer" onClick={()=>setOpenPrice(!openPrice)}>price</h4>
            <div className={`${(mobile?openPrice?'d-block':'d-none':'')}`}>
            <div className="check d-flex align-items-center">
              <input type="checkbox" name="up25" id="up25" />
              <label className="m-0 ms-2 text-capitalize" htmlFor="up25">
                up to 25$
              </label>
            </div>
            <div className="check d-flex align-items-center">
              <input type="checkbox" name="up50" id="up50" />
              <label className="m-0 ms-2 text-capitalize" htmlFor="up50">
                25 to 50$
              </label>
            </div>
            <div className="check d-flex align-items-center">
              <input type="checkbox" name="up100" id="up100" />
              <label className="m-0 ms-2 text-capitalize" htmlFor="up100">
                50 to 100$
              </label>
            </div>
            <div className="check d-flex align-items-center">
              <input type="checkbox" name="up200" id="up200" />
              <label className="m-0 ms-2 text-capitalize" htmlFor="up200">
                100 to 200$
              </label>
            </div>
            <div className="check d-flex align-items-center">
              <input type="checkbox" name="up300" id="up300" />
              <label className="m-0 ms-2 text-capitalize" htmlFor="up300">
                200 to 300$
              </label>
            </div>
            <div className="check d-flex align-items-center">
              <input type="checkbox" name="up400" id="up400" />
              <label className="m-0 ms-2 text-capitalize" htmlFor="up400">
                300 to 400$
              </label>
            </div>
            <div className="check d-flex align-items-center">
              <input type="checkbox" name="above" id="above" />
              <label className="m-0 ms-2 text-capitalize" htmlFor="above">
                400$ & above{" "}
              </label>
            </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
