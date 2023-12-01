import React from 'react'
import '../Companies/Companies.css'
import tower from '../Assets/tower.png'
import equinix from '../Assets/equinix.png'
import prologis from '../Assets/prologis.png'
import realty from '../Assets/realty.png'


const Companies = () => {
  return (
    <section className="c-wapper">
        <div className="paddings innerWidth flexCenter c-container">
            <img src={tower} alt="" />
            <img src={prologis} alt="" />
            <img src={equinix} alt="" />
            <img src={realty} alt="" />
        </div>
    </section>
    
  )
}

export default Companies