import React from 'react'
import '../Properties/Properties.css'
import SearchBar from '../../Components/SearchBar/SearchBar'
import useProperties from '../../hooks/useProperties'

const Properties = () => {
  const {data, isError, isLoading} = useProperties()
  console.log(data)
  return (
    <div className="wrapper">
        <div className="flexColCenter paddings innerWidth properties-container">
          <SearchBar/>
        </div>
    </div>
  )
}

export default Properties