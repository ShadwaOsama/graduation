import React from "react";
import styles from "../Account/Account.module.css";
import img from "../../Assets/personaInform.svg";
import img1 from "../../Assets/imge_account.svg";
import img2 from "../../Assets/changePass.svg";
import img3 from "../../Assets/edit.svg"
import Footer from './../Footer/Footer';
export default function Account() {
  return (
    <>
      <section className={`${styles.myAccount} container `}>
        <div className="container mt-4">
          <div className={`${styles.imgeedit}`}>

            <div className={`${styles.peofile_Img}`}>
              <div className={`${styles.imgPerson} `}>
              <img src={img1} alt="account" className={``} />
              </div>

              <div className={`${styles.edit}`}>
                <img src={img3} alt="" className="" />
              </div>
            </div>
          </div>




          <div className={`${styles.formContain} `}>
            <div className={styles.collparent}>
              <div className="me-2 ">
                <img src={img} alt="" className="w-100" />



              </div>
              <h2 className="text-dark ">Personal Information</h2>
            </div>
            <form className="">
              <div className="d-flex justify-content-between">
                <div className="row  w-50">
                  <div className="col-lg-12">
                    <label htmlFor="inptName">
                      Full name (First and Last name)
                    </label>
                    <input type="text" className={`${styles.colorInput} form-control`} id="inptName" />
                    <label htmlFor="City">City/Area</label>
                    <input type="email" className={`${styles.colorInput} form-control`} id="City" />
                    <label htmlFor="Building_name">Building name/no</label>
                    <input type="number"
                      className={`${styles.colorInput} form-control`}
                      id="Building_name"
                      min={0}
                    />
                    <label htmlFor="email">Email</label>
                    <input type="email" className={`${styles.colorInput} form-control`} id="email" />
                  </div>
                </div>
                <div className="row  w-50">
                  <div className="">
                    <label htmlFor="Mobile_number">Phone number</label>
                    <input
                      type="number"
                      className={`${styles.colorInput} form-control`}
                      min={0}
                      id="Mobile_number"
                    />
                    <label htmlFor="Street_name">Street name</label>
                    <input
                      type="text"
                      className={`${styles.colorInput} form-control`}
                      id="Street_name"
                    />
                    <label htmlFor="Nearest">Nearest landmark</label>
                    <input type="number" className={`${styles.colorInput} form-control`} id="Nearest" />
                    <label htmlFor="Postal">Postal Code</label>
                    <input type="number" className={`${styles.colorInput} form-control`} id="Postal" />
                  </div>
                </div>
              </div>

              <button type="submit" className={`${styles.submit} mt-5 `} name="" id="" value="save Changes" >save Changes</button>
            </form>
          </div>
        </div>
      </section>


      <section className={`${styles.myAccount} container mb-5 `}>
        <div className="container mt-4 ">


          <div className={`${styles.formContain} `}>
            <div className={styles.collparent1}>
              <div className="me-2 ">
                <img src={img2} alt="" className="w-100" />
              </div>
              <h2 className="text-dark ">Change Password</h2>
            </div>
            <div className="text-center m-3">City/Area</div>
            <form className="">
              <div className="d-flex justify-content-between">
                <div className="row  w-50">
                  <div className="col-lg-12">
                    <label htmlFor="Current">
                      Current Password
                    </label>
                    <input type="password" className={`${styles.colorInput} form-control`} id="Current" />
                    <label htmlFor="New">New Password</label>
                    <input type="password" className={`${styles.colorInput} form-control`} id="New" />


                  </div>
                </div>
                <div className="row  w-50">
                  <div className="">

                    <label htmlFor="Repeat">Repeat New Password</label>
                    <input type="password" className={`${styles.colorInput} form-control`} id="Repeat" />

                  </div>
                </div>
              </div>

              <button type="submit" className={`${styles.submit} mt-5 `} name="" id="" value="save Changes" >save Changes</button>
            </form>
          </div>
        </div>
      </section>
<Footer/>
    </>
  );
}
