import React from 'react';
import dateFormat from 'dateformat';
import rupiahFormat from 'rupiah-format';

function CardTransaction({ item, img, category, result }) {
  return (
    <div>
      <div className='header row px-3'>
        <div className='col-2 fs-2 fw-bold ps-3' style={{ color: "#22577A" }}>{dateFormat(item.date, "dd")}</div>
        <div className='col-5 p-0 pt-1 lh-sm ' style={{ color: "#38A3A5" }}>
          {dateFormat(item.date, "dddd")} <br />
          {dateFormat(item.date, "mmmm yyyy")}
        </div>
        <div className='col-5 d-flex align-items-center justify-content-end text-danger fw-bold'>{result}</div>
      </div>
      <hr className='my-2'/>
      <div className='body px-3'>
        <div className='row mb-1'>
          <div className='col-2 p-0 m-0 d-flex justify-content-center align-items-center'>
            <img src={img} alt={category} width={36} height={36} />
          </div>
          <div className='col-6 p-0 m-0'>
            <div className='fw-bold'>{category}</div>
            <div>{item.description}</div>
          </div>
          <div className='col-4 d-flex align-items-center justify-content-end m-0 p-0 pe-2'>
            <div className={`fw-bold color-${item.type}`}>{rupiahFormat.convert(item.nominal)}</div>
          </div>
        </div>
      </div>
      <hr className="border border-4 opacity-75" style={{ borderColor: "#f5f5f5" }}/>
    </div>
  )
}

export default CardTransaction