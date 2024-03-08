import React from 'react'
import Hero from '../Components/Hero/Hero'
import Companies from '../Components/Companies/Companies'
import Residences from '../Components/Residences/Residences'
import Value from '../Components/Value/Value'
import Contact from '../Components/Contact/Contact'
import GetStarted from '../Components/GetStarted/GetStarted'

const Website = () => {
  return (
    <div className="App">
      <div>
        <div className="white-gradient"/>
      <Hero/>
      </div>
      <Companies/>
      <Residences/>
      <Value/>
      <Contact/>
      <GetStarted/>
  </div>
  )
}

export default Website