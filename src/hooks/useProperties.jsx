import React from 'react'
import { isError, useQuery } from 'react-query'
import { getAllProperties } from '../utilis/api'

const useProperties = () => {

    const {data, isLoading, isError, refetch} = useQuery(
        "allproperties", getAllProperties, {refetchOnWindowFocus: false}
    )

  return {
    data, isError, isLoading, refetch
  }
}

export default useProperties