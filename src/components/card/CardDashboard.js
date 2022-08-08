import React from 'react'
import rupiahFormat from 'rupiah-format'

function CardDashboard({ img, title, result }) {
  return (
    <div className='p-0 m-0'>
      <div className='col bg-white p-1 rounded-4 shadow mb-3'>
        <div className='d-flex my-1 justify-content-start ps-2 me-1'>
          <img src={img} alt="Money Check" width={50} height={50}/>
          <div className='ms-1'>{title}
            <div className='align-middle fs-5 fw-bold'>{rupiahFormat.convert(result)}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardDashboard