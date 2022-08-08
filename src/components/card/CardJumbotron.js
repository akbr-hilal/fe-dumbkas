import React from 'react'

function CardJumbotron({ item }) {
  return (
    <>
      <div className='card pt-2 shadow' style={{ width: '14rem'}}>
        <div className='d-flex justify-content-center'>
          <img src={item.img} alt="" width={60} height={60} />
        </div>
        <div className='card-body'>
          <div className='text-center'>{item.title}</div> 
        </div>
      </div>
    </>
  )
}

export default CardJumbotron