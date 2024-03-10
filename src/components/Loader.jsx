import React from 'react'
import { FidgetSpinner } from 'react-loader-spinner'

function Loader() {
  return (
    <FidgetSpinner
  visible={true}
  height="100"
  width="100"
  ariaLabel="fidget-spinner-loading"
  wrapperStyle={{}}
  wrapperClass="fidget-spinner-wrapper"
  />
  )
}

export default Loader