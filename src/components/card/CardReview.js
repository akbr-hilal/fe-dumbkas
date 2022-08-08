import React from 'react'

function CardReview({ item }) {
  return (
    <>
      <div className='card shadow' style={{ width: '14rem'}}>
        <div className='card-body text-center'>
          <div className='mb-5'>{item.review}</div>
          <div className='card-title fw-semibold'>{item.user}</div>
        </div>
      </div>
    </>
  )
}

export default CardReview