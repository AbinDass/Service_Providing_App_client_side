import React from 'react'
import ClockLoader from "react-spinners/ClipLoader";

const Loader = ({loader}) => {
  return (
    <div className='fixed inset-0 bg-white bg-opacity-10 backdrop-blur-sm flex justify-center items-center z-50'>
       <div className="flex justyfy-center items-center ">
             <ClockLoader
        color={"#f37a24"}
        loading={loader}
        size={90}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
      
    </div>
    </div>
  )
}

export default Loader
