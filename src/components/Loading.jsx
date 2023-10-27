import React from 'react'

export const Loading = () => {
  return (
   <div className='container'>
     <div className="d-flex ">
        <strong role="status">Loading...</strong>
        <div className="spinner-border ms-auto" aria-hidden="true"></div>
    </div>
   </div>
  )
}
