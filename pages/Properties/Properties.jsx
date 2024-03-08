import React from 'react'
import '../Properties/Properties.css'
import SearchBar from '../../Components/SearchBar/SearchBar'

const Properties = () => {
  //const {data, isError, isLoading} = userPoper
  return (
    <div className="wrapper">
        <div className="flexColCenter paddings innerWidth properties-container">
          <SearchBar/>
        </div>
    </div>
  )
}

export default Properties