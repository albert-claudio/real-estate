import React from 'react'
import '../Footer/Footer.css'
import logo2 from '../Assets/logo2.png'

const Footer = () => {
  return (
     <section className="f-wrapper">
        <div className="paddings innerWidth flexCenter f-container">

            {/* LADO ESQUERDO */}
            <div className="flexColStart f-left">
                <img src={logo2} alt="" width={120} />
                <span className="secondaryText">
                    Our vision is to make all people <br/>
                    the best place to live for them.
                </span>
            </div>
            <div className="flexColStart f-right">
                <span className='primaryText'>Information</span>
                <span className='secondaryText'> 14401150 Rua Frederico Moura, Cidade Nova, Franca, SP</span>

                <div className="flexCenter f-menu">
                    <span>Property</span>
                    <span>Services</span>
                    <span>Product</span>
                    <span>About Us</span>
                </div>
            </div>
        </div>
     </section>

  )
}


export default Footer